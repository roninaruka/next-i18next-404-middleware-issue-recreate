/* eslint-disable @next/next/no-img-element */
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation, Trans } from "next-i18next";
import Link from "next/link";

export default function Home() {
    const { t } = useTranslation("common");

    return (
        <>
            <h2>{t("title")}</h2>
            <p>{t("below")}</p>
            <Link href="/about-us">About us</Link>
            <br />
            <Link href="/about-us-404">404</Link>
            <br />
            <Link href="/en">en</Link>
            <br />
            <Link href="/fr">fr</Link>
        </>
    );
}

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", ["common"])),
    },
});
