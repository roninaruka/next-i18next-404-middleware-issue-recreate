import { useTranslation, Trans } from "next-i18next";
import Link from "next/link";

export default function AboutUs() {
    const { t } = useTranslation("common");

    return (
        <>
            <h2>{t("aboutTitle")}</h2>
            <p>{t("aboutBelow")}</p>
            <Link href="/">Home</Link><br />
            <Link href="/about-us-404">404</Link><br />
            <Link href="/en">en</Link><br />
            <Link href="/fr">fr</Link>
        </>
    );
}

import { getStaticProps } from "./index";
export { getStaticProps };
