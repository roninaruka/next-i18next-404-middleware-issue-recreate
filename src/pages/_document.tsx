import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentProps } from "next/document";

import i18nextConfig from "../../next-i18next.config";

type Props = DocumentProps & {};
export default class MyDocument extends Document<Props> {
    render() {
        const currentLocale = this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
        return (
            <Html lang={currentLocale}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
