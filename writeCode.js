let arr = [0, 5, 7, 8, 10]
let myString = 'The quick brown fox jumps over the lazy dog!'
let myString2 = 'I like cats, but not mice!'

function sumZero(arr) {
    let answer = 0
    for(let i = 0; i < arr.length; i++) {
        answer += arr[i]
    }
    if (answer === 0) {
        return true
    } else {
        return false
    }
}

console.log(sumZero(arr))

function uniqueCharacters(str) {
    let length = str.length
    if(length > 26) {
        return false
    }
    for(let i = 0; i < str.length; i++) {
        if(str.lastIndexOf(str[i]) !== i) {
            return false
        }
    }
    return true
}

console.log(uniqueCharacters('Monday'))
console.log(uniqueCharacters('Moonday'))

function pangramSentence(str) {
    str = str.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let alphabetArray = alphabet.split('')
    let allLetters = false
    for(let i = 0; i < alphabetArray.length; i++) {
        if(str.includes(alphabetArray[i])) {
            allLetters = true
        } else {
            allLetters = false
        }
    }

    return allLetters

}

console.log(pangramSentence(myString))
console.log(pangramSentence(myString2))

function findLongestWord(strs) {
    let longest = '';
    for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > longest.length)
    longest = strs[i];
    }
    return longest;
    }

console.log(findLongestWord(myString))