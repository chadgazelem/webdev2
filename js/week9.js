function sendAlert(){
    window.alert('Hello');
}

function sendConfirm(){
    window.confirm('Do you wish to continue?');
}

function sendPrompt(){
    window.prompt('Please enter your name:');
}

function setTime(){
    window.setTimeout(() => alert("Time's Up!"), 2000);
   
}

function chant(){
    console.log('Beetle Juice');
}
const summon = window.setInterval(chant,50);
window.clearInterval(summon);