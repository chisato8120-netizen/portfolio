
// function calcCoin(input) {

//     let i = 0
//     for (; input >= 500; i++) {
//         input = input - 500
//     }
//     let result500 = i
//     i = 0

//     for (; input >= 100; i++) {
//         input = input - 100
//     }
//     let result100 = i
//     i = 0

//     for (; input >= 50; i++) {
//         input = input - 50
//     }
//     let result50 = i
//     i = 0

//     for (; input >= 10; i++) {
//         input = input - 10
//     }
//     let result10 = i
//     i = 0

//     for (; input >= 5; i++) {
//         input = input - 5
//     }
//     let result5 = i
//     i = 0

//     for (; input >= 1; i++) {
//         input = input - 1
//     }
//     return { result500, result100, result50, result10, result5, result1 }
// }


let input = parseInt(process.argv[2])

if (input % 15 == 0) {
    console.log("FizzBuzz")
} else if (input % 3 == 0) {
    console.log("Fizz")
} else if (input % 5 == 0) {
    console.log("Buzz")
} else { console.log(input) }



// if (input % 100 == 0) {
//     console.log("例年")
// }
// if (input % 4 == 0) {
//     console.log("うるう年")
// }