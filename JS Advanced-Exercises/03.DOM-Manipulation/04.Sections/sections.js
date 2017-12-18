function create(sentences) {
    let content = document.getElementById('content');

    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i];
        let divElement = document.createElement('div');
        let pElement = document.createElement('p');
        pElement.textContent = sentence;
        pElement.style.display = 'none';

        divElement.addEventListener('click', showParagraph);
        divElement.appendChild(pElement);
        content.appendChild(divElement);
    }

    function showParagraph(event) {
        event.target.children[0].style.display = 'inline-block';
    }
}