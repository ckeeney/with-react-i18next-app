import App, { Container } from "next/app";
import {I18nextProvider, loadNamespaces} from "react-i18next";
import {getInitialProps as getI18nProps, I18n, i18nInstance} from "../i18n";

export default class MyApp extends App {
    static async getInitialProps ({ Component, ctx }) {

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        const namespaces = ['common', 'home', 'page2'];

        let i18nProviderProps = ctx.req ?
            getI18nProps(ctx.req, namespaces) :
            await loadNamespaces({
                components: [{ props: { namespaces } }],
                // i18n: I18n,
                i18n: I18n,
            });
        // todo: fix the underlying cause.
        if (!i18nProviderProps) {
            i18nProviderProps = {}
        }
        if (!i18nProviderProps.i18n) {
            i18nProviderProps.i18n = I18n;
        }

        return {
            pageProps,
            i18nProviderProps
        }

    }

    render() {
        const { Component, pageProps} = this.props;
        let {i18nProviderProps} = this.props;
        // i18n is undefined on first client side render.
        if (!i18nProviderProps.i18n) {
            i18nProviderProps.i18n = I18n;
        }
        return (
            <Container>
                <I18nextProvider {...i18nProviderProps}>
                    <div>
                        <Component {...pageProps} />
                    </div>
                </I18nextProvider>
            </Container>
        );
    }
}