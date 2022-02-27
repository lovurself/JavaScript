const target = document.getElementById('languages');

// 랜덤으로 문자열 출력 함수
function randomString() {
    const stringArr = ['Learn to HTML', 'Learn to CSS', 'Learn to JavaScript', 'Learn to React', 'Learn to Node.js'];
    const selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    // Math.floor는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
    // Math.random은 0 이상 1미만의 구간에서 근사적으로 균일한 부동소숫점의 사난수를 반환
    // 여기에 stringArr.length를 곱했으므로 0 이상 stringArr.length 미만의 수가 출력
    // 즉 stringArr[랜덤의 숫자] = 랜덤으로 문자열이 출력됨.
    const selectStringArr = selectString.split('');
    // split는 괄호 안의 기호로 문자열을 쪼개는 함수

    return selectStringArr;
    // 배열안에 있는 문자열 중 랜덤하게 뽑아 쪼개서 return
}

// 커서 깜빡임 효과
function blink() {
    target.classList.toggle('active');
    // 클래스가 존재한다면 제거하고 false 반환, 존재하지 않으면 클래스를 추가하고 true 반환
}
setInterval(blink, 500);
// 지정한 시간의 delay로 함수를 반복적으로 호출하거나 실행, 밀리초 사용

// 타이핑 리셋 함수
function resetTyping() {
    target.textContent = '';
    // element.textContent = '내용'; 텍스트를 추가할 수 있는 프로퍼티
    textTyping(randomString()); 
}

// 한글자씩 타이핑 함수
function textTyping(text) {
    if (text.length > 0) {
        target.textContent += text.shift();
        setTimeout(function() {
            textTyping(text);
        }, 80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}

textTyping(randomString());