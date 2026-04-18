function openModal(type){
    let content = "";

    if(type === "addin1"){
        content = `
        <h2>ToolBox Add-in</h2>
        <p>Automates Revit workflows and improves productivity.</p>
        <img src="images/addins/toolbox.png">
        <button onclick="window.open('https://youtube.com')">Watch Demo</button>
        `;
    }

    if(type === "dynamo1"){
        content = `
        <h2>Dynamo Script</h2>
        <p>Automates shop drawing generation.</p>
        <img src="images/dynamo/script1.png">
        `;
    }

    if(type === "dc"){
        content = `
        <h2>Microsoft Data Centers</h2>
        <p>LOD 400 BIM execution models & coordination.</p>
        <img src="images/projects/dc.png">
        `;
    }

    if(type === "hospital"){
        content = `
        <h2>Magdy Yacoub Hospital</h2>
        <p>Electrical systems for X-ray rooms.</p>
        <img src="images/projects/hospital.png">
        `;
    }

    document.getElementById("modal-body").innerHTML = content;
    document.getElementById("modal").style.display = "flex";
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}
