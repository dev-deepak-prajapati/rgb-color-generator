const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');

const codeR = document.getElementById('codeR');
const codeG = document.getElementById('codeG');
const codeB = document.getElementById('codeB');

const copyBtnColor = document.getElementById('copyColor');
const showCopyColor = document.getElementById('showCopyColor');
const colorPreview = document.getElementById('colorPreview');

let clipboardColor = '';
let r = 100, g = 100, b = 100;

const updateColor = (red, green, blue) => {
    const newColor = `rgb(${red}, ${green}, ${blue})`;
    clipboardColor = newColor;
    showCopyColor.textContent = newColor;
    colorPreview.style.backgroundColor = newColor;
    
    // Dynamic soft glow around the preview box matching current color
    colorPreview.style.boxShadow = `0 12px 30px -5px rgba(${red}, ${green}, ${blue}, 0.5)`;
};

function copyColorInClipboard() {
    navigator.clipboard.writeText(clipboardColor);
    
    // Smooth button feedback instead of browser alert
    copyBtnColor.textContent = 'Copied!';
    copyBtnColor.style.background = '#22c55e';
    
    setTimeout(() => {
        copyBtnColor.textContent = 'Copy';
        copyBtnColor.style.background = '';
    }, 1500);
}

redSlider.addEventListener('input', (e) => {
    codeR.textContent = e.target.value;
    r = e.target.value;
    updateColor(r, g, b);
});

greenSlider.addEventListener('input', (e) => {
    codeG.textContent = e.target.value;
    g = e.target.value;
    updateColor(r, g, b);
});

blueSlider.addEventListener('input', (e) => {
    codeB.textContent = e.target.value;
    b = e.target.value;
    updateColor(r, g, b);
});

copyBtnColor.addEventListener('click', copyColorInClipboard);

// Initial call
updateColor(r, g, b);
