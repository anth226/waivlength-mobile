export function checkIfSymbolOwned(arr, id) {
    let hasowned = false;
    if (arr && id) {
        arr.map((v, i) => {
            if (v.symbol == id) {
                hasowned = true
            }
        })
    }
    return hasowned;
}