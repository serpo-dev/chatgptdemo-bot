import * as dotenv from "dotenv"

dotenv.config();

export const BOT_TOKEN = process.env.BOT_TOKEN

export const REQUEST_URL = process.env.REQUEST_URL || "https://chat.chatgptdemo.net/chat_api_stream"
export const REQUEST_METHOD = process.env.REQUEST_METHOD || "POST"
export const CHAT_ID = process.env.CHAT_ID || "64804e07a5dc0e04417f57ec"
export const MAX_MESSAGE_LENGTH = Number(process.env.MAX_MESSAGE_LENGTH) || 1000