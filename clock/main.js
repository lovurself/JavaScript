const target = document.getElementById("target");

// 매 초 시간을 로그에 남긴다.
setInterval(logClockTime, 1000);

function logClockTime() {
  // 현재 시간을 상용시로 표현하는 문자열을 얻음
  const times = getClockTime();

  // HTML P태그에 text 입력
  target.textContent = times;
}

function getClockTime() {
  // 현재 시간을 얻음
  const date = new Date();

  // 시간을 직렬화함
  let time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    amPm: "AM",
  };

  // 비구조화 할당
  let { hours, minutes, seconds, amPm } = time;

  // 상용시로 전환
  if (hours === 12) {
    amPm = "PM";
  } else if (hours > 12) {
    amPm = "PM";
    hours -= 12;
  }

  // 시간을 두 글자로 만들기
  if (hours < 10) {
    hours = "0" + hours;
  }

  // 분을 두 글자로 만들기
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // 초를 두 글자로 만들기
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // "hh: mm: ss tt" 형식으로 문자열을 만들기
  return hours + ":" + minutes + ":" + seconds + " " + amPm;
}
