function validatePalin(str) {
    let len = str.length;
    console.log(len)
    for (let i = 0; i < len / 2; i++) {

        if (str[i] !== str[len - 1 - i]) {
            console.log("not palindrome")
        }
        else {
            console.log("palidrome");
        }

    }

}
const string = "121"

const value = validatePalin(string);




