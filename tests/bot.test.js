import { bot } from "../src/bot/bot";

describe("telegraf_api", function () {

    test("Must launch without any errors", () => {
        const isLauch = bot()

        expect(isLauch).toBe(true)
    })

})