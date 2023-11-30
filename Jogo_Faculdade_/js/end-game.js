document.addEventListener('DOMContentLoaded', function() {
    console.log(localStorage.getItem('point'));
    document.getElementById("point-game").innerHTML = localStorage.getItem('point') || 0;
});
