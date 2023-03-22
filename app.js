

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
const selectButton = document.querySelector('#selectTeacher');


selectButton.addEventListener('click', function () {
    const teacherSelection = document.querySelector('select').value;
    const teacherImg = document.querySelector('.photo');
    const stylesheet = document.querySelector('#stylesheet');
    if (teacherSelection === 'oprah') {
        teacherImg.setAttribute('src', 'assets/oprah.jpg');
        stylesheet.setAttribute('href', 'oprah.css');
    } else if (teacherSelection === 'miyagi') {
        teacherImg.setAttribute('src', 'assets/miyagi.jpeg');
        stylesheet.setAttribute('href', 'miyagi.css');
    } else if (teacherSelection === 'peanuts') {
        teacherImg.setAttribute('src', 'assets/peanuts.jpeg');
        stylesheet.setAttribute('href', 'peanuts.css');
    } else if (teacherSelection === 'dumbledore') {
        teacherImg.setAttribute('src', 'assets/dumbledore.jpeg');
        stylesheet.setAttribute('href', 'dumbledore.css');
    } else {
        teacherImg.setAttribute('src', 'assets/yoda.jpg');
        stylesheet.setAttribute('href', 'yoda.css');
    }
});