const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  pageExtensions: ['page.tsx'],
  webpack: (configRef) => {

    configRef.plugins.push(
      new Dotenv({
        defaults: path.resolve(process.cwd(), '.env'),
        path: path.resolve(process.cwd(), '.env.local'),
      }),
    );

    return configRef;
  }
}