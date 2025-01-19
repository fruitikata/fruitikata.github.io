document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); //prevent the form from actually submitting

    //get the form and notification elements
    const form = event.target;
    const notification = document.getElementById("notification");

    //show the notif
    notification.textContent = "Message sent successfully! ^^";
    notification.classList.add("show");

    //clear the form
    form.reset();

    //hide the notif after 3 secs
    setTimeout(() => {
        notification.classList.add("hide");
        setTimeout(() => {
            notification.classList.remove("show", "hide");
            notification.textContent = ""; //clear the message
        }, 300); //3 secs timer
    }, 3000);
});
