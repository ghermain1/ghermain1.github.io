window.onscroll = function() {
    let header = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};
footer {
    background: #333;
    color: #fff;
    position: relative; /* Change to fixed */
    width: 100%;
    transition: background 0.5s ease, padding 0.5s ease;
}

.fixed {
    position: fixed; /* Make footer fixed */
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9); /* Darker background when fixed */
    padding: 10px 0; /* Reduced padding */
}

