$(document).foundation()
feather.replace()

window.tdiff = [];
fred = function(a, b) {
    return a - b;
};

window.onload = function(e) {
    console.log("window.onload", e, Date.now(), window.tdiff,
        (window.tdiff[1] = Date.now()) && window.tdiff.reduce(fred));
} // END onload()