const join = document.getElementById('join');
const logIn = document.getElementById('logIn');
const joinModal = document.getElementById('joinModal');
const logInModal = document.getElementById('logInModal');
const joinClose = document.getElementById('joinClose');
const logInClose = document.getElementById('logInClose');

join.onclick = () => {
    joinModal.style.display = 'flex';
}

logIn.onclick = () => {
    logInModal.style.display = 'flex';
}

joinClose.onclick = () => {
    joinModal.style.display = 'none';
}

logInClose.onclick = () => {
    logInModal.style.display = 'none';
}