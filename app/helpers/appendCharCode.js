export default function appendCharCode(string, key) {
    let charCodes = string
        .split('')
        .map(c => c.charCodeAt(0))
        .concat([key])

    return String.fromCharCode.apply(null, charCodes).valueOf()
}