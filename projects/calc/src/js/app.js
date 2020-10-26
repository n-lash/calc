import "./slider";


$('.form-select-box').chosen({width: "85%"});

$('#resetBtn').on('click', function () {
    
    $('.form-select-box').val('').trigger('chosen:updated');
});

