let word = prompter();

function prompter() {
    let response = prompt("Please insert a word");
    console.log(response.split);
    return response;
}

function displayWord(word) {
    let p = document.createElement('p');
    let hr = document.querySelector('hr');
    let reversed = word.split('').reverse().join('');
    let textNode = `You typed "${word}" and when reversed is ${reversed}`;
    
    p.classList.add("msg");
    p.innerText = textNode;
    hr.after(p);

}

displayWord(word);