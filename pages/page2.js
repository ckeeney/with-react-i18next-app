import React from 'react'
import Link from 'next/link'
import PureComponent from '../components/PureComponent'
import ExtendedComponent from '../components/ExtendedComponent'
import ComponentWithTrans from '../components/ComponentWithTrans'
import {translate} from "react-i18next";

const Page2 = ({ t }) => (
    <div>
        <h1>{t('welcomePage2')}</h1>
        <p>{t('common:integrates_react-i18next')}</p>
        <PureComponent t={t} />
        <ExtendedComponent />
        <ComponentWithTrans />
        <Link href='/'>
            <a>{t('link.gotoPage1')}</a>
        </Link>
    </div>
)
export default translate(['page2'])(Page2);