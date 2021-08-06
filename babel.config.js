module.exports = function babel(api) {
  const BABEL_ENV = api.env();

  console.debug(`
  ****************************
  React app running on:
  BABEL_ENV = ${BABEL_ENV},
  NODE_ENV = ${process.env.NODE_ENV}
  ****************************
  `)

  const presets = ["@babel/preset-env", "@babel/preset-react"];
  const plugins = ["@babel/plugin-syntax-dynamic-import"];

  if (BABEL_ENV === "development") {
    plugins.push("react-refresh/babel");
  }
  return {
    presets,
    plugins,
  };
};
