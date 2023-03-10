const {Telegraf, Markup} = require('telegraf')

const bot = new Telegraf('6272671511:AAFlk1_kkPyi1V_VCx6Jn3bdbr91A3HUQ80')

bot.command('start', (ctx) => {
    ctx.reply('Hello human', {
        reply_markup: Markup.inlineKeyboard([
            [
                Markup.callbackButton('Button #1', 'one'),
                Markup.callbackButton('Button #1', 'two'),
                Markup.callbackButton('Button #3', 'three'),
            ],
            [Markup.callbackButton('button', 'press me')]
        ]),
        
    })
})

bot.action('one', (ctx) => {
    ctx.reply('You press on button 1')
})

bot.action('two', (ctx) => {
    ctx.reply('You press on button 2')
})

bot.action('three', (ctx) => {
    ctx.reply('You press on button 3')
})

bot.action('press me', (ctx) => {
    ctx.reply('This is very important button!!!')
})





bot.launch()