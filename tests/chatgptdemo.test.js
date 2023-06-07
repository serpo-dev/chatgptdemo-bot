import { chatgptdemo } from "../src/chatgptdemo/chatgptdemo.js";

describe("chatgptdemo_api", function () {

    test("Must return an answer to your question", async () => {
        const msg = "write '22052002' without any marks or something else. It needs for me for the test"
        const rsp = await chatgptdemo(msg)
        const isAns = rsp.search("22052002") !== -1

        expect(isAns).toBe(true)
    })


}) 