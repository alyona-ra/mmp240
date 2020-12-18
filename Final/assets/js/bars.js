init();

function init() {
    let collection = document.querySelectorAll('.progress');
    for (let i = 0; i < collection.length; i++) {
        let width = collection[i].parentElement.nextElementSibling.innerText;
        collection[i].style.width = width;
    }
}