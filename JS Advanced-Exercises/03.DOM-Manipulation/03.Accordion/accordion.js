function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    let buttonText = buttonElement.textContent;
    let moreInfoElement = document.getElementById('extra');
    if (buttonText == 'More') {
        buttonElement.textContent = 'Less';
        moreInfoElement.style.display = 'block';
    } else {
        buttonElement.textContent = 'More';
        moreInfoElement.style.display = 'none';
    }
}