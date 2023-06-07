import { chatgptdemo } from "./chatgptdemo/chatgptdemo.js"
import { bot } from "./bot/bot.js"

export async function main() {
    bot(chatgptdemo)
}