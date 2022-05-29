module.exports = function (bs) {
    return {
      port: 3000,
      files: ["./src/**/*.{html,htm,css,js}"],
      server: {
        middleware: {
          1: require('connect-history-api-fallback')({
            index: './public/index.html',
            verbose: true,
          }),
        },
      },
    };
  };