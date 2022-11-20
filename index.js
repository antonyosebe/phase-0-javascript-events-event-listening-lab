function clickAlert() {
    return alert('I was clicked!');
}

function addingEventListener() {
    const input = document.getElementById('button');

    input.addEventListener('click', clickAlert);
}