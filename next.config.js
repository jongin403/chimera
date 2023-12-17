/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "./../styles/variable.scss"; @import "./../styles/mixin.scss";`,
  },
};

module.exports = nextConfig;
