let body = document.querySelector('body');
let container = document.querySelector('.container');
let colorText = document.querySelector('.color-text');

let values = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
];

const gradientColor = () => {
    let randomColor1 = '#';
    let randomColor2 = '#';
    for(let i = 0; i < 6; i++){
        let ran1 = Math.floor(Math.random() * 16);
        let ran2 = Math.floor(Math.random() * 16);

        randomColor1 += values[ran1];
        randomColor2 += values[ran2];
    }
    
    let randomDegree = Math.floor(Math.random() * 360) + 'deg';

    body.style = `background-image: linear-gradient(${randomDegree}, ${randomColor1}, ${randomColor2})`;

    colorText.textContent = `linear-gradient (${randomDegree}, ${randomColor1}, ${randomColor2})`;
}
container.onclick = () => gradientColor()