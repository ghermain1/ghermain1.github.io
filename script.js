window.onscroll = function() {
    let header = document.getElementById("header");
    let footer = document.getElementById("footer");
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("sticky");
        footer.classList.add("fixed");
    } else {
        header.classList.remove("sticky");
        footer.classList.remove("fixed");
    }
};
