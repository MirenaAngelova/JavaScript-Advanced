function findAll(selector) {
    let children = $(`${selector} *:not(:has(*))`);
    let mostInnerChild;
    let maxIndentation = 0;
    children.each(function(index, element) {
        let currentIndentation = 0;
        let originalElement = element;
        while ((element = $(element).parent())[0]) {
            currentIndentation++;
            if (currentIndentation > maxIndentation) {
                maxIndentation = currentIndentation;
                mostInnerChild = originalElement;
            }
        }
    });
    let currnetElement = $(mostInnerChild);
    while (currnetElement[0] && currnetElement[0] != $(selector)[0]) {
        currnetElement.addClass('highlight')
        currnetElement = currnetElement.parent()
    }

    $(selector).addClass('highlight');
}