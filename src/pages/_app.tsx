import { appWithTranslation } from "next-i18next";

import nextI18NextConfig from "../../next-i18next.config.js";

function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default appWithTranslation(App, nextI18NextConfig);
