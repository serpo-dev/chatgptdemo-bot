export function prs(ans) {
    const cmbAns = ans.join("")
    const ptrn = /\{\"content\"\:\"([^"]+)\"\}/g
    const extrCntAns = cmbAns.match(ptrn)
    const fmtAns = extrCntAns.map(i => JSON.parse(i)["content"]).join("");
    return fmtAns
}