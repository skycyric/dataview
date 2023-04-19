const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  env: {
    API_KEY: '81aa3fc0ace24fdcbf5ebcf73f79a8ff',
  },
  distDir: isDevelopment ? './dev' : './build',
  reactStrictMode: true,
};
