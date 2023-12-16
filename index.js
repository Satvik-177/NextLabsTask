document.addEventListener("DOMContentLoaded", function () {
    const button1 = document.getElementById("firstbutton");
    const buttons = document.querySelectorAll(".buttons");
    if (button1) {
        button1.addEventListener("click", (e) => {
            const modelPath = "http://127.0.0.1:5500/forms/forms.html";
            window.open(modelPath, "_blank");
            console.log(e);
        });
    } else {
        console.error("Button not found");
    }

    if (buttons.length > 0) {
        buttons.forEach(button => {
            button.addEventListener("click", (e) => {
                const modelPath = "http://127.0.0.1:5500/forms/forms.html";
                window.open(modelPath, "_blank");
                console.log(e);
            });
        });
    } else {
        console.error("No button found");
    }
});

