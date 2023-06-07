import { Telegraf } from "telegraf"
import { message } from "telegraf/filters"
import { BOT_TOKEN, MAX_MESSAGE_LENGTH } from "../../config.js"

const repo_url = "https://github.com/yphwd/chatgptdemo-bot"

export function bot(chat) {
    try {
        const bot = new Telegraf(BOT_TOKEN)

        bot.start(ctx => ctx.reply("Welcome! I am an human-like bot. Send me your question."))
        bot.help(ctx => ctx.replyWithMarkdownV2(`Creator: *lav2u* _\\(aka **yphwd**\\)_\\. [Look for more here](${repo_url})\\.`))

        bot.on(message("text"), async (ctx) => {
            async function rpl(ctx) {
                const msg = ctx.message.text;
                if (msg.length <= MAX_MESSAGE_LENGTH) {
                    const rsp = await chat(msg)
                    return rsp;
                } else {
                    const err_msg = "Max length exceeded: " + MAX_MESSAGE_LENGTH;
                    return err_msg;
                }
            }

            const ans = await rpl(ctx)
            ctx.reply(ans)
        })

        bot.launch();

        process.once('SIGINT', () => bot.stop('SIGINT'));
        process.once('SIGTERM', () => bot.stop('SIGTERM'));

        return true;
    } catch (err) {
        console.error("Failed to launch bot", err)
        return false;
    }
}