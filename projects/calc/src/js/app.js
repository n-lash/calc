import "./slider";


$('.calc-menu-button').on('click', function () {
    $('.calc-menu-button').toggleClass('active');
    $('.calc-menu').toggleClass('active');
});


$('.form-select-box').chosen({width: "85%"});

$('#resetBtn').on('click', function () {
    
    $('.form-select-box').val('').trigger('chosen:updated');
    slider.noUiSlider.reset();
});
