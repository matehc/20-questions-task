let keyPress = document.querySelector('.keyPress');

// functionality to create random numbers
function randomNumber() {
    let randNum1 = Math.floor(Math.random() * 10);
    let randNum2 = Math.floor(Math.random() * 10);
    let randNum3 = Math.floor(Math.random() * 10);

    console.log({randNum1, randNum2, randNum3});
    return {randNum1, randNum2, randNum3};
}

// functionality to display numbers and message to user
function displayNum(num1, num2, num3, message) {
    let p = document.createElement('p');
    let textNode = `The lottery Numbers are ${num1} ${num2} ${num3}. ${message}`;

    p.classList.add("msg");
    p.innerText = textNode;
    keyPress.after(p);

}

// functionality to check if numbers repeated
function numCheck(num1, num2, num3) {

    let numArr = [num1, num2, num3];
    let msg;
    if (numArr.includes(7)) {
        msg = "Congratulations!"
        displayNum(num1, num2, num3, msg);
    }
    else {
        msg = "Try again! Better luck next time.";
        displayNum(num1, num2, num3, msg);
    }
}

document.addEventListener('keydown', () => {
    let {randNum1, randNum2, randNum3} = randomNumber();

    keyPress.classList.add("hidden");
    numCheck(randNum1, randNum2, randNum3);
})


