function showHide() {
    let dropdownMenu = document.getElementById('select');
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display = 'block';
    }
    else {
        dropdownMenu.style.display = 'none';
    }
}

function hideAfterSelection() {
    let dropdownMenu = document.getElementById('select');
    dropdownMenu.style.display = 'none';
}