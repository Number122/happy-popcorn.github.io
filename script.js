const modal = document.getElementById("cartModal");
const addToCartButtons = document.querySelectorAll(".product button");
const closeButton = document.getElementsByClassName("close")[0];
addToCartButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const flavorName = this.parentElement.querySelector("h3").innerText;
        document.getElementById("flavorName").innerText = "Flavor: " + flavorName;
        const currentDate = new Date().toLocaleDateString();
        document.getElementById("currentDate").innerText = currentDate;
        const currentTime = new Date().toLocaleTimeString();
        document.getElementById("currentTime").innerText = currentTime;
        modal.style.display = "block";
    });
});
closeButton.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.getElementById("cartForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const userName = document.getElementById("userName").value;
    alert("Thank you, " + userName + "! Your " + document.getElementById("flavorName").innerText + " has been added to your cart.");
    modal.style.display = "none";
});