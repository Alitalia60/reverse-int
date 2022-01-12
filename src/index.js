module.exports = function reverse(n) {
    // function reverse(n) {

    if (n == NaN) {
        return NaN
    }
    if (n < 0) {
        n = n * (-1)
    }
    n = String(n).split('').sort((a, b) => -1)
    n = Number(n.join(''))
    return n

}

// console.log(reverse(-261));