function attachEvents() {
    $('a.button').on('click', Selected);

    function Selected() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}