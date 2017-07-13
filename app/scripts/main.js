$(document).ready(function () {
    if ($('.input-group').hasClass('only-input')) {

        $(this).find('.form-control').addClass('no-border');
    };

    $('.input-group').click(function () {
        if ($(this).hasClass('only-input')) {
            $(this).toggleClass('only-input-dark')
        }
    });
    $('.bg-form .input-group .form-control').on('focus', function () {

        $(this).parent().parent().toggleClass('bg-form-grown')
    }).blur('focus', function () {

        $(this).parent().parent().toggleClass('bg-form-grown')
    })


    $(document).click(function (e) {
        if (!$('.input-group.only-input').is(e.target) && $('.input-group.only-input').has(e.target).length === 0 && $('.input-group.only-input').hasClass('only-input-dark')) {
            $('.input-group.only-input').toggleClass('only-input-dark');
        }
    })
});
