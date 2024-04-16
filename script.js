document.addEventListener('DOMContentLoaded',function () {
    const nav = document.querySelector("nav");
    setInterval(() => {
        if (window.scrollY >= 500) {
            if (typeof nav.getAnimations()[0] === "undefined") {
                const nav_appear = nav.animate([
                    {opacity: 1},
                ],
                {
                    duration: 1000,
                    iterations: 1,
                    easing: "ease-out",
                    direction: "normal",
                },
                );
                nav_appear.onfinish = (event) => {
                    nav.style.opacity = 1;
                    nav.style.pointerEvents = "auto";
                }
            }
        } else {
            if (typeof nav.getAnimations()[0] === "undefined") {
                const nav_disappear = nav.animate([
                    {opacity: 0},
                ],
                {
                    duration: 100,
                    iterations: 1,
                    easing: "ease-out",
                    direction: "normal",
                },
                );
                nav_disappear.onfinish = (event) => {
                    nav.style.opacity = 0;
                    nav.style.pointerEvents = "none";
                }
            }
        }
    }, 100);
})