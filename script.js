let txt = "The quick brown fox jumps over the lazy dog"
console.log(txt)

let txtEnc = encryptDecrypt(txt.toUpperCase(), 1)
console.log(txtEnc)

let txt2 = encryptDecrypt(txtEnc, -1)
console.log(txt2)

function encryptDecrypt(message, key) {

    const codeA = "A".codePointAt(0)
    const codeZ = "Z".codePointAt(0)

    let encMessage = ""

    for (let chr of message) {
        let code = chr.codePointAt(0)
        
        if (code >= codeA && code <= codeZ) {
            code -= codeA
            // code = (code + key) % 26
            code = mod(code+key, 26)
            code += codeA
        }

        encMessage += String.fromCodePoint(code)
    }

    return encMessage
}

function mod(n, p) {
    let r = n % p

    if (r < 0) r += p

    return r
}

