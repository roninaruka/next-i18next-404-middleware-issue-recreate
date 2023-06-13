import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation, SSRConfig, i18n as globali18n } from "next-i18next";
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Page404Component(props) {
    const [ lastData, setLastData ] = useState<SSRConfig>()
    useEffect(() => {
        if (!props._nextI18Next) {
            if (lastData) {
                Object.keys(lastData._nextI18Next.initialI18nStore).forEach((l) => {
                    Object.keys(lastData._nextI18Next.initialI18nStore[l]).forEach((n) => {
                        globali18n.addResourceBundle(l, n, lastData._nextI18Next.initialI18nStore[l][n])
                    })
                })
                globali18n.changeLanguage(lastData._nextI18Next.initialLocale)
            }
            return
        }
        setLastData(props)
    }, [props])

    const { t } = useTranslation("common");

    return (
        <>
            <h2>{t("NotFoundTitle")}</h2>
            <p>{t("NotFoundBelow")}</p>
            <p>{t("level1.level2")}</p>
            <Link href="/">Home</Link><br />
            <Link href="/about-us">About us</Link><br />
            <Link href="/en">en</Link><br />
            <Link href="/fr">fr</Link>
        </>
    );
}

import { getStaticProps } from "./index";
export { getStaticProps };
