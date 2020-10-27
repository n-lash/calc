$(document).ready(function () {
	$('.calc-menu-button').on('click', function () {
		$('.calc-menu-button').toggleClass('active');
		$('.calc-menu').toggleClass('active');
	});

	$('#resetBtn').on('click', function () {

		$('.form-select-box').val('').trigger('chosen:updated');
		slider.noUiSlider.reset();
	});
});
