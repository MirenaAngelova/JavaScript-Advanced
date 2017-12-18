function attachEventsListeners() {
    let daysBtnElem = document.getElementById('daysBtn');
    let hoursBtnElem = document.getElementById('hoursBtn');
    let minutesBtnElem = document.getElementById('minutesBtn');
    let secondsBtnElem = document.getElementById('secondsBtn');

    let daysInputElem = document.getElementById('days');
    let hoursInputElem = document.getElementById('hours');
    let minutesInputElem = document.getElementById('minutes');
    let secondsInputElem = document.getElementById('seconds');

    daysBtnElem.addEventListener('click', convertFromDays);
    hoursBtnElem.addEventListener('click', convertFromHours);
    minutesBtnElem.addEventListener('click', convertFromMinutes);
    secondsBtnElem.addEventListener('click', convertFromSeconds);

    function convertFromDays() {
        hoursInputElem.value = Number(daysInputElem.value) * 24;
        minutesInputElem.value = Number(hoursInputElem.value) * 60;
        secondsInputElem.value = Number(minutesInputElem.value) * 60;
    }

    function convertFromHours() {
        daysInputElem.value = Number(hoursInputElem.value) / 24
        minutesInputElem.value = Number(hoursInputElem.value) * 60
        secondsInputElem.value = Number(minutesInputElem.value) * 60
    }

    function convertFromMinutes() {
        hoursInputElem.value = Number(minutesInputElem.value) / 60
        daysInputElem.value = Number(hoursInputElem.value) / 24
        secondsInputElem.value = Number(minutesInputElem.value) * 60
    }

    function convertFromSeconds() {
        minutesInputElem.value = Number(secondsInputElem.value) / 60
        hoursInputElem.value = Number(minutesInputElem.value) / 60
        daysInputElem.value = Number(hoursInputElem.value) / 24
    }
}