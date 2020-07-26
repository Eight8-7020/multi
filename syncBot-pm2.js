module.exports = {
  apps : [{
    name: "syncBot",
    script: "~/syncBot.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "undefined",
    }
  }]
}
