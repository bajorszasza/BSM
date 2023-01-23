gombfel = document.getElementById("gomb");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        gombfel.style.display = "block";
    } else {
        gombfel.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; // Safarinak kell
    document.documentElement.scrollTop = 0; // minden másnak
}