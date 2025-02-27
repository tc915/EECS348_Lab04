const textColorInput = document.getElementById("text_color_input");
const borderColorInput = document.getElementById("border_color_input");
const borderWidthInput = document.getElementById("border_width_input");
const paragraph = document.querySelector('p');

const textColorDisplay = document.createElement("span");
textColorDisplay.className = "value_display";
textColorInput.parentNode.appendChild(textColorDisplay);

const borderColorDisplay = document.createElement("span");
borderColorDisplay.className = "value_display";
borderColorInput.parentNode.appendChild(borderColorDisplay);

const borderWidthDisplay = document.createElement("span");
borderWidthDisplay.className = "value_display";
borderWidthInput.parentNode.appendChild(borderWidthDisplay);

function updateStyles() {
    const textColor = textColorInput.value;
    paragraph.style.color = textColor;
    textColorDisplay.textContent = `Current: ${textColor}`;

    const borderColor = borderColorInput.value;
    paragraph.style.borderColor = borderColor;
    borderColorDisplay.textContent = `Current: ${borderColor}`;

    const borderWidth = borderWidthInput.value + 'px';
    paragraph.style.borderWidth = borderWidth;
    borderWidthDisplay.textContent = `Current: ${borderWidth}`;
}

textColorInput.addEventListener("input", updateStyles);
borderColorInput.addEventListener("input", updateStyles);
borderWidthInput.addEventListener("input", updateStyles);

updateStyles();