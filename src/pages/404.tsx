import { useTranslation, Trans } from "next-i18next";
import Link from "next/link";

export default function Page404Component() {
    const { t } = useTranslation("common");

    return (
        <>
            <h2>{t("NotFoundTitle")}</h2>
            <p>{t("NotFoundBelow")}</p>
            <Link href="/">Home</Link><br />
            <Link href="/about-us">About us</Link><br />
            <Link href="/en">en</Link><br />
            <Link href="/fr">fr</Link>
        </>
    );
}


import { getStaticProps } from "./index";
export { getStaticProps };