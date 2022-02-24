const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
// getElementById는 html에 있는 id값을 받아오는거


// onclick을 이용하여 클릭될 때 이벤트가 발생하게 만들어줌
// parseInt는 문자열을 숫자로 변경해주겠다는 것
increase.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
}

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
}