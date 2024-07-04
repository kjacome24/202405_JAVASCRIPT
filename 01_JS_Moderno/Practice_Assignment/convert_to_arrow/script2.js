const { colorInput,surpriseImage,toggleButton, resizeButton } = 
{
    colorInput : document.getElementById("colorInput"),
    surpriseImage : document.getElementById("surpriseImage"),
    toggleButton : document.getElementById("toggleButton"),
    resizeButton : document.getElementById("resizeButton"),
}


toggleButton.onclick = () => {
    surpriseImage.style.display = surpriseImage.style.display === "none" ? "block" : "none";
};


resizeButton.onclick = () => {
    surpriseImage.style.width = surpriseImage.style.width === "150px" ? "300px" : "150px";
};