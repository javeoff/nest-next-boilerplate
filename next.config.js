const Dotenv = require('dotenv-webpack');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  pageExtensions: ['page.tsx'],
  webpack: (configRef, {isServer}) => {

    if (process.env.ENABLE_ONBUILD_LINT === '1' && isServer) {
      configRef.plugins.push(
        new ForkTsCheckerWebpackPlugin({
          eslint: {
            enabled: true,
            files: path.resolve(process.cwd(), './src/**/*.{ts,tsx,mdx,js}'),
          },
          typescript: {
            mode: 'write-references',
            include: ['./src/**/*.ts', './src/**/*.tsx'],
          },
        }),
      );
    }

    configRef.plugins.push(
      new Dotenv({
        defaults: path.resolve(process.cwd(), '.env'),
        path: path.resolve(process.cwd(), '.env.local'),
      }),
    );

    return configRef;
  }
}