// const form = document.forms['search'];
// const input = form['searchInput']

// console.log(form)
// console.log(input)


// const input = form.elements.searchInput;
// input.addEventListener('focus', () => alert('focused'), false);

// input.addEventListener('blur', () => alert('blurred'),
// false);




const form = document.forms['search'];

//Set variable to get what is inside the searchINput
const input = document.getElementById('searchInput');
form.addEventListener('submit', search);

function search() {
    alert(' Form Submitted');
}
// function search(event) {
//     alert('Form Submitted');
//     event.preventDefault();
//     }

// What you search will pop up in alert   

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

// input.addEventListener('focus', function () {
//     if (input.value === 'Search Here') {
//         input.value = ''
//     }
// }, false);
// input.addEventListener('blur', function () {
//     if (input.value === '') {
//         input.value = 'Search Here';
//     }
// }, false);