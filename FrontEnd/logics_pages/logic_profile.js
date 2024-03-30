const fileSelectBtn = document.getElementById('file-select-button');
const fileInput = document.getElementById('file-input');

fileSelectBtn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', () => {
    if (e.target.files.length === 0){
        fileSelectBtn.nextElementSibling.textContent = "Ninguna imagen elegida"
        return;
    }
    fileSelectBtn.nextElementSibling.textContent = e.target.files[0].name;
});