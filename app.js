

const teachMe = document.querySelector('#generateAdvice');
const adviceText = document.querySelector('#adviceText');
const adviceNumber = document.querySelector('#adviceNumber');

document.addEventListener('DOMContentLoaded', getAdvice);

teachMe.addEventListener('click', getAdvice);

async function getAdvice() {
    const adviceData = await fetch('https://api.adviceslip.com/advice', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const adviceObject = await adviceData.json();
    adviceText.innerHTML = adviceObject.slip.advice;
    adviceNumber.innerHTML = adviceObject.slip.id;
}


// I want to update the html stylesheet based on teacher
// figure out default page
