function summingArguments(numbers) {
    let sumOfArgs = 0;
    for (let i of numbers) {
        sumOfArgs += parseInt(i);
    }
    return sumOfArgs;
}

let _userInput = prompt("Please, enter some numbers separated with commas&spaces (e.g. '13, 15, 17, 23')");
let $modifiedUserInput = _userInput.split(", ");
console.log(summingArguments($modifiedUserInput));
