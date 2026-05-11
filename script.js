function openProject(page){
    window.location.href = page;
}

window.addEventListener("load", function () {

    document.addEventListener("click", function (e) {

        if (e.target.tagName === "IMG" && e.target.closest(".slider")) {

            let popup = document.getElementById("imgPopup");

            if (!popup) {
                popup = document.createElement("div");
                popup.id = "imgPopup";

                popup.style.position = "fixed";
                popup.style.top = "0";
                popup.style.left = "0";
                popup.style.width = "100%";
                popup.style.height = "100%";
                popup.style.background = "rgba(0,0,0,0.95)";
                popup.style.display = "flex";
                popup.style.alignItems = "center";
                popup.style.justifyContent = "center";
                popup.style.zIndex = "99999";

                const img = document.createElement("img");
                img.id = "imgPopupImg";
                img.style.maxWidth = "95%";
                img.style.maxHeight = "95%";
                img.style.borderRadius = "12px";

                popup.appendChild(img);
                document.body.appendChild(popup);

                popup.addEventListener("click", function () {
                    popup.remove();
                });
            }

            document.getElementById("imgPopupImg").src = e.target.src;
        }

    });

});