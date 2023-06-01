/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js");

const { loadCustomBuildParams } = require("./next-utils.config");
const { esmExternals = false, tsconfigPath } = loadCustomBuildParams();

const nextConfig = {
    reactStrictMode: false,
    i18n,
    experimental: {
        esmExternals,
    },
    typescript: {
        tsconfigPath,
    },
};
module.exports = nextConfig;
