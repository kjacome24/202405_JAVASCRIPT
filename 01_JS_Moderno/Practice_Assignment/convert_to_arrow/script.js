const { colorInput,surpriseImage,toggleButton, resizeButton } = 
{
    colorInput : document.getElementById("colorInput"),
    surpriseImage : document.getElementById("surpriseImage"),
    toggleButton : document.getElementById("toggleButton"),
    resizeButton : document.getElementById("resizeButton"),
}


const toggleImageDisplay = () => {
    surpriseImage.style.display = surpriseImage.style.display === "none" ? "block" : "none";
};

const toggleImageSize = () => {
    surpriseImage.style.width = surpriseImage.style.width === "150px" ? "300px" : "150px";
};

const applyColorbackground = (color) => {
    document.body.style.background = color;
}

const addEventListeners = () => {
    toggleButton.addEventListener("click",toggleImageDisplay);
    resizeButton.addEventListener("click",toggleImageSize)
    colorInput.addEventListener("input",() => applyColorbackground(colorInput.value))
}


////////////////Setting up the listener when the page is loaded
document.addEventListener("DOMContentLoaded",addEventListeners)