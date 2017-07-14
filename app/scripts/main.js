$(document).ready(function () {
    if ($('.input-group').hasClass('only-input')) {
        $(this).find('.form-control').addClass('no-border');
    }

    $('.bg-form .input-group .form-control').on('focus', function () {
        if($(this).val()===''){
        $(this).parent().parent().toggleClass('bg-form-grown');
      }
    }).on('blur', function () {
        if($(this).val()===''){
        $(this).parent().parent().toggleClass('bg-form-grown');
      }
    });

    $('.input-group.only-input .form-control').on('focus', function () {
        if($(this).val()===''){
        $(this).parent().toggleClass('only-input-dark');
      }
    }).on('blur', function () {
      if($(this).val()===''){
        $(this).parent().toggleClass('only-input-dark');
      }
    });

    $('nav a').click(function(e){
      var idMenu=e.target.hash;
      $(idMenu).css('padding-top','12rem');
      $('.container:not("'+idMenu+'")').css('padding-top','0rem');

    });


});
