function getpin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getpin();
    }
}
function generatepin() {
    const pin = getpin();
    document.getElementById('display-pin').value = pin

}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = (event.target.innerText);
    const calcinput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcinput.value = '';
        }
    }
    else {

        const previousnumber = calcinput.value
        const newnumber = previousnumber + number
        calcinput.value = newnumber;
    }
})
function verifypin() {
    const pin = document.getElementById('display-pin').value
    const typednumber = document.getElementById('typed-numbers').value
    const failure = document.getElementById('notify-fail')
    const success = document.getElementById('notify-success')
    if (pin == typednumber) {

        success.style.display = 'block';
        failure.style.display = 'none';
    }
    else {

        failure.style.display = 'block';
        success.style.display = 'none';
    }
}
