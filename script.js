//event listener untuk membuka popup aside
document.getElementById('openAside').addEventListener('click', function() {
    document.getElementById('asidePopup').classList.add('active');
});

//event listener untuk menutup popup aside
document.getElementById('closeAside').addEventListener('click', function() {
    document.getElementById('asidePopup').classList.remove('active');
});