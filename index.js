const pcard1 = document.getElementById('p-card-1');
const pcard2 = document.getElementById('p-card-2');
const pcard3 = document.getElementById('p-card-3');
const pcard4 = document.getElementById('p-card-4');
const pcard5 = document.getElementById('p-card-5');
const pcard6 = document.getElementById('p-card-6');
const pcard7 = document.getElementById('p-card-7');
const pcard8 = document.getElementById('p-card-8');
const pcard9 = document.getElementById('p-card-9');
const pcard10 = document.getElementById('p-card-10');
const card = document.querySelector('.section-3-card')
function handleCard(numCard) {
    pcard1.style.display = 'none';
    pcard2.style.display = 'none';
    pcard3.style.display = 'none';
    pcard4.style.display = 'none';
    pcard5.style.display = 'none';
    pcard6.style.display = 'none';
    pcard7.style.display = 'none';
    pcard8.style.display = 'none';
    pcard9.style.display = 'none';
    pcard10.style.display = 'none';
    if (numCard === 1) {
        pcard1.style.display = 'block';
    }
    if (numCard === 2) {
        pcard2.style.display = 'block';
    }
    if (numCard === 3) {
        pcard3.style.display = 'block';
    }
    if (numCard === 4) {
        pcard4.style.display = 'block';
    }
    if (numCard === 5) {
        pcard5.style.display = 'block';
    }
    if (numCard === 6) {
        pcard6.style.display = 'block';
    }
    if (numCard === 7) {
        pcard7.style.display = 'block';
    }
    if (numCard === 8) {
        pcard8.style.display = 'block';
    }
    if (numCard === 9) {
        pcard9.style.display = 'block';
    }
    if (numCard === 10) {
        pcard10.style.display = 'block';
    }
}