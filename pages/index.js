import React from 'react'
import Link from 'next/link'

import PureComponent from '../components/PureComponent'
import ExtendedComponent from '../components/ExtendedComponent'
import ComponentWithTrans from '../components/ComponentWithTrans'
import { translate } from 'react-i18next'

class HomePage extends React.Component {

    changeLanguage = () => {
        const {t, i18n} = this.props;
        console.log(i18n.language);
        const newLang = i18n.language === 'en' ? 'de' : 'en';
        console.log('changing language to ' + newLang);
        i18n.changeLanguage(newLang)
    }

    render() {
        const {t, i18n} = this.props;
        return (
            <div>
                <pre>
                    {JSON.stringify(i18n.store.data, null, 2)}
                </pre>
                <h1>{t('welcome')}</h1>
                <p>{t('common:integrates_react-i18next')}</p>
                <p>{t('sample_test')}</p>
                <div>
                    <button onClick={this.changeLanguage}>{t('change_language')}</button>
                </div>
                <PureComponent t={t} />
                <ExtendedComponent />
                <ComponentWithTrans />
                <Link href='/page2'>
                    <a>{t('link.gotoPage2')}</a>
                </Link>
            </div>
        )
    }
}

export default translate(['home'])(HomePage);