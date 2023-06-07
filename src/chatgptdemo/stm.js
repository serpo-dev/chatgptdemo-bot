import { rqs } from "./rqs.js";

export async function stm(qst) {
    const rsp = await rqs(qst);

    const cpl_data = []
    const rdr = rsp.body.pipeThrough(new TextDecoderStream()).getReader()
    while (true) {
        const { value, done } = await rdr.read()
        if (done) break
        cpl_data.push(value)
    }

    return cpl_data;
}