const { token, domain, port, env } = require('../config/config')
const { Telegraf, Composer } = require('telegraf')

const bot = new Telegraf(token)
const composer = new Composer()
const middleware = (composer) => bot.use(composer.middleware())

const launch = async () => {
    if (env.toLowerCase() === "heroku") {
        await bot.launch({
            webhook: {
                domain: domain,
                hookPath: '/bot',
                port: port
            }
        })
            .then(async () => {
                await console.log("Webhook method has been started")
            })
            .catch(async error => {
                await console.log(error)
            })
    } else if (env.toLowerCase() === "local") {
        await bot.launch()
            .then(async () => {
                await console.log("Polling method has been started")
            })
            .catch(async serror => {
                await console.log(error)
            })
    } else {
        await console.log("Bot can't be started due to wrong environment!")
    }
}

module.exports = { bot, composer, middleware, launch }
