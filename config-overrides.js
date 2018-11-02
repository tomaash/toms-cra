module.exports = function override(config, env) {
  require('react-app-rewire-postcss')(config, true);
  return config;
}
