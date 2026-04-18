function openModal(type){

let content = "";

if(type === "ms"){
content = `
<h2>Microsoft Data Centers</h2>
<p>LOD 400 BIM execution models, clash-free coordination.</p>
<img src="images/projects/dc.png">
`;
}

if(type === "hp"){
content = `
<h2>Magdy Yacoub Hospital</h2>
<p>X-ray rooms electrical design & coordination.</p>
<img src="images/projects/hospital.png">
`;
}

document.getElementById("modal-body").innerHTML = content;
document.getElementById("modal").style.display = "flex";
}

function closeModal(){
document.getElementById("modal").style.display = "none";
}
