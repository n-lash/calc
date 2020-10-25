document.addEventListener("DOMContentLoaded", () => {

    const slider = document.getElementById('slider');
    let min = document.getElementById('slider-value-min'),
        max = document.getElementById('slider-value-max');

    noUiSlider.create(slider, {
        start: [0, 200],
        // tooltips: true,
        connect: true,
        // padding: 7,
        range: {
            'min': 0,
            'max': 200
        },
    });


    slider.noUiSlider.on('update', function (values, handle) {
        if (handle) {
            max.innerHTML = Math.round(values[handle]);
        } else {
            min.innerHTML = Math.round(values[handle]);
        }
    });
});
