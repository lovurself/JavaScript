// num과 symbol 유사배열을 가져와 진짜 배열로 바꿔줌
const numbers = Array.from(document.querySelectorAll('.num'));
const symbols = Array.from(document.querySelectorAll('.symbol'));

// HTML에 일치하는 element를 받아와 선택자로 만듦
const currentValue = document.querySelector('.currentValue');
const store = document.querySelector('.store');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const allClear = document.querySelector('.allClear');
const dot = document.querySelector('.dot');
const del = document.querySelector('.delete');

// 각 num을 click 시 setNum 함수 호출, map 메소드로 배열에 담는다.
numbers.map(number => {
    number.addEventListener('click', setNum);
});

// 각 symbol을 click 시 setSymbol 함수 호출, map 메소드로 배열에 담는다.
symbols.map(symbol => {
    symbol.addEventListener('click', setSymbol);
});

// btn click 시 함수 호출
dot.addEventListener('click', setDot);
del.addEventListener('click', setDelete);
equal.addEventListener('click', getTotal);
clear.addEventListener('click', clearValue);

// allClear btn을 click 시 초기화되는 함수를 호출
allClear.addEventListener('click', function() {
    clearValue();
    clearStore();
});

// 입력되는 값을 초기화하는 함수
function clearValue() {
    currentValue.innerText = '';
}
function clearStore() {
    store.innerText = '';
}

// 24자리까지 입력가능하도록 설정, store의 마지막 문자가 symbol이 아닐 경우 연산자 입력 알림창 설정
function setNum() {
    currentValue.innerText.length < 25 ?
    currentValue.innerText += this.innerText :
    alert('더 이상 입력하실 수 없습니다.');
}

function setSymbol() {
    if (currentValue.innerText !== '') {
        // store이 빈칸이면 store에 currentValue값과 symbol값을 넣는다.
        if (store.innerText === '') {
            store.innerText = currentValue.innerText + ' ' + this.innerText
        } else {
            // store에 숫자가 있으면 store에 있는 값과 currentValue값과 symbol값을 넣는다.
            store.innerText = `${store.innerText} ${currentValue.innerText} ${this.innerText}`
        }
    }
    // currentValue에 값까지 초기화함
    clearValue();
}

// .이 문자열에 있는지 찾고 없다면 -1 반환하는 것을 이용
function setDot() {
    currentValue.innerText.indexOf('.') === -1 ?
    currentValue.innerText = `${currentValue.innerText}.` :
    false;
}

// currentValue와 store 안에 있는 값을 지워주는 함수
function setDelete() {
    if (currentValue.innerText !== '') {
        currentValue.innerText = currentValue.innerText.toString().slice(0,-1);
    }
}

// currentValue에 값이 있다면 eval함수의 대체로 new Function을 이용해 문자로 표현된 JavaScript 코드를 직접 만들어서 실행함
function getTotal() {
    if (currentValue.innerText !== '') {
        const result = store.innerText + currentValue.innerText;
        currentValue.innerText = new Function('return ' + result)();
    }
    clearStore();
}
