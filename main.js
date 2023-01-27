const menuItems = document.querySelectorAll("nav a");

buttonUp.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        const target = document.querySelector(event.target.hash);
        target.scrollIntoView({ behavior: "smooth" });
    });
});