window.onscroll = function() {
    let header = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

