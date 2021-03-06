function prompter() {
    let fName = prompt("Please insert your first name");
    let lName = prompt("Please insert your last name");
    let age = prompt("How old are you?");

    return {fName, lName, age};
}

function display () {
    let p = document.createElement('p');
    let hr = document.querySelector('hr');
    let {fName, lName, age} = prompter();
    let textNode = `Welcome, ${fName} ${lName} (${age}) `;

    p.classList.add("msg");
    p.innerText = textNode;
    hr.after(p);
}

window.addEventListener('load', () => {
    display();
})