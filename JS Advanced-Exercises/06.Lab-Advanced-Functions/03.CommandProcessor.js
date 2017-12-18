function commandProcessor(commands) {
    let processor = (function() {
        let text = '';
        return {
            append: (newText) => text += newText,
            removeStart: (count) => text = text.slice(count),
            removeEnd: (count) => text = text.slice(0, text.length - count),
            print: () => console.log(text)
        }
    })();

    for (let str of commands) {
        let [command, argument] = str.split(' ');
        processor[command](argument);
    }
}

commandProcessor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print'
]);

commandProcessor(['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print'
])