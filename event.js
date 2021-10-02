
//Click ones
const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click', () =>
    console.log('click'));
clickParagraph.addEventListener('mousedown', () =>
    console.log('down'));
clickParagraph.addEventListener('mouseup', () =>
    console.log('up'));


//Double Click
const dblclickParagraph = document.getElementById('dblclick');

dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event) {
    event.target.classList.toggle('highlight');
}


//Mouse Hover
const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);

addEventListener('keydown',highlight);

//Keypress method
addEventListener('keypress', (event) => console.log(`You
pressed the ${event.key} character`));






