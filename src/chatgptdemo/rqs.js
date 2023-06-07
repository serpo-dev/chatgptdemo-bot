import { REQUEST_URL, REQUEST_METHOD, CHAT_ID } from "../../config.js"

export async function rqs(qst) {
    const rsp = await fetch(REQUEST_URL, {
        method: REQUEST_METHOD,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            question: qst,
            timestamp: new Date().getTime()
        })
    })

    return rsp;
}
