var slider = document.getElementById("range-slider")
var selector = document.getElementById("selector")
slider.oninput = function () {
    selector.style.left = this.value + "%"
}