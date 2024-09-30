module.exports = {
  devServer: (devServerConfig) => {
    devServerConfig.setupMiddlewares = (middlewares, devServer) => {
      // ваш код
      return middlewares;
    };
    return devServerConfig;
  },
};
