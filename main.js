const btnSubmit = document.querySelector(".btn-enviar");
btnSubmit.addEventListener("click", (e) => {
    const campos = document.querySelectorAll(".input-text");
    let flag = true;
    campos.forEach(campo => {
        console.log(campo.value);
        if(campo.value === "" && flag) {
            flag = false;
            return;
        } else {
            return;
        }
    })
    console.log(flag);
    flag ? formNotification("success", "Mensaje enviado correctamente!") : formNotification("error", "Atención! Debe llenar todos los campos");
})

const formNotification = (type, text) => {
        const main = document.getElementById("main");
        const notification = document.createElement('P');
        notification.innerText = text;
        notification.classList.add("notification");
        notification.classList.add(type);

        main.appendChild(notification);
    setTimeout(() => {
        const notifDeleted = document.querySelector(".notification");
        notifDeleted.parentElement.removeChild(notifDeleted);
    }, 2000);
}