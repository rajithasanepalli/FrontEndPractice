// program to print prime numbers between the two numbers

// take input from the user

// looping from lowerNumber to higherNumber
for (let i = 2; i <= 10; i++) {
    let flag = 1;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 0;
            break;
        }
        else {
            flag = 1;

        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 1) {
        console.log(i);
    }
}