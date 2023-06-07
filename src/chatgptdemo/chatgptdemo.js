import { prs } from "./prs.js";
import { stm } from "./stm.js";

export async function chatgptdemo(qst) {
    return stm(qst).then(ans => {
        try {
            return prs(ans);
        } catch (err) {
            console.error("Error parsing [ask.js]: " + err.message)
        }
    })
}



