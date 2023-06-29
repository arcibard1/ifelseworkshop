function checkTruthyFalsy() {
    const inputValue = prompt("Enter a value:");

    if (inputValue) {
        alert("true");
    } else if (inputValue === false || inputValue === "false") {
        alert("The boolean value false is falsy");
    } else if (inputValue === null || inputValue === "null") {
        alert("The null value is falsy");
    } else if (inputValue === undefined || inputValue === "undefined") {
        alert("undefined is falsy");
    } else if (inputValue === "" || inputValue === "0") {
        alert("The " + inputValue + " is falsy (the only falsy " + (typeof inputValue) + ")");
    } else {
        alert("Invalid input");
    }
}
