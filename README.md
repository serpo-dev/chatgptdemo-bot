# chatgptdemo-bot

A GPT-3 like AI chat bot. Without saving a context. Just a simple bot for conversations. For your own deals without ads and annoying thigs which are usually met in free tg bot chats. Uses API of `https://chat.chatgptdemo.net/`. 


## Requirements

- `node v18+`
- `npm v8+`


## Installation

Run the command below:

```
npm install
```

## .env config

Field `CHAT_ID` is intended to save context of the conversation. Just change it to random number/string to clear the context. 

```
BOT_TOKEN=your_token

REQUEST_URL=https://chat.chatgptdemo.net/chat_api_stream
REQUEST_METHOD=POST
CHAT_ID=64804e07a5dc0e04417f57ec
MAX_MESSAGE_LENGTH=1000
```

## Commands

- `npm start`
- `npm test`


