let checkboxState = false;

document.querySelector('input[type=checkbox]').addEventListener('click', agreement);

function agreement() {
    if (checkboxState) document.querySelector('button').classList.add('button-inactive');
    else document.querySelector('button').classList.remove('button-inactive');

    checkboxState = !checkboxState;
}