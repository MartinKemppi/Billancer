document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded");

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;

            if (!username || !email) {
                alert("Please fill in all required fields.");
                event.preventDefault();
            }
        });
    }
});
