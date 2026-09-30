const envelope = document.getElementById("envelope");
const seal = document.getElementById("seal");
const openButton = document.getElementById("openButton");

const instruction = document.getElementById("instruction");

const editButton = document.getElementById("editButton");
const editor = document.getElementById("editor");

const saveButton = document.getElementById("saveButton");
const cancelButton = document.getElementById("cancelButton");

const teacherName = document.getElementById("teacherName");
const studentName = document.getElementById("studentName");
const message = document.getElementById("message");

const teacherInput = document.getElementById("teacherInput");
const studentInput = document.getElementById("studentInput");
const messageInput = document.getElementById("messageInput");

let opened = false;


/* =========================
   OPEN / CLOSE CARD
========================= */

function toggleCard() {

    opened = !opened;

    envelope.classList.toggle("open", opened);

    if (opened) {

        instruction.innerHTML =
            "A special message from the heart. ❤️";

        openButton.innerHTML =
            "Close Message ↙";

        createParticles();

    } else {

        instruction.innerHTML =
            "Click the seal to open your message.";

        openButton.innerHTML =
            "Open Message ↗";
    }
}

seal.addEventListener("click", toggleCard);
openButton.addEventListener("click", toggleCard);


/* =========================
   PERSONALIZATION
========================= */

editButton.addEventListener("click", function() {

    editor.classList.remove("hidden");

    teacherInput.value =
        teacherName.textContent === "Teacher"
        ? ""
        : teacherName.textContent;

    studentInput.value =
        studentName.textContent;

    messageInput.value =
        message.textContent.trim();

    editor.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


/* =========================
   SAVE MESSAGE
========================= */

saveButton.addEventListener("click", function() {

    const teacher =
        teacherInput.value.trim();

    const student =
        studentInput.value.trim();

    const newMessage =
        messageInput.value.trim();


    teacherName.textContent =
        teacher || "Teacher";

    studentName.textContent =
        student || "Your grateful student";

    message.textContent =
        newMessage ||
        "Thank you for everything you do for your students.";


    editor.classList.add("hidden");


    showNotification(
        "Your Teachers' Day card has been personalized! ✨"
    );


    if (!opened) {
        toggleCard();
    }

});


/* =========================
   CANCEL EDITOR
========================= */

cancelButton.addEventListener("click", function() {

    editor.classList.add("hidden");

});


/* =========================
   CELEBRATION EFFECT
========================= */

function createParticles() {

    const symbols = [
        "✦",
        "✿",
        "✧",
        "❀",
        "♥"
    ];

    for (let i = 0; i < 30; i++) {

        const particle =
            document.createElement("div");

        particle.className = "particle";

        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.color =
            [
                "#c9a86a",
                "#e8d4a9",
                "#ffffff",
                "#d8e2d2"
            ][
                Math.floor(
                    Math.random() * 4
                )
            ];

        particle.style.fontSize =
            (12 + Math.random() * 15) + "px";

        particle.style.setProperty(
            "--move",
            ((Math.random() - .5) * 200) + "px"
        );

        particle.style.animationDelay =
            Math.random() * .5 + "s";

        document.body.appendChild(particle);


        particle.addEventListener(
            "animationend",
            function() {
                particle.remove();
            }
        );

    }

}


/* =========================
   NOTIFICATION
========================= */

function showNotification(text) {

    const notification =
        document.createElement("div");

    notification.textContent = text;

    notification.style.position = "fixed";
    notification.style.bottom = "25px";
    notification.style.left = "50%";
    notification.style.transform =
        "translateX(-50%)";

    notification.style.background =
        "#0d2c25";

    notification.style.color = "white";

    notification.style.padding =
        "13px 20px";

    notification.style.borderRadius =
        "4px";

    notification.style.fontSize =
        "13px";

    notification.style.zIndex = "200";

    notification.style.boxShadow =
        "0 8px 30px rgba(0,0,0,.2)";

    document.body.appendChild(notification);


    setTimeout(function() {

        notification.style.opacity = "0";

        notification.style.transition =
            "opacity .5s";

        setTimeout(function() {
            notification.remove();
        }, 500);

    }, 2500);

}