document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.hello-btn');
    if (button) {
        button.addEventListener('click', () => {
            alert('Hello from CSS!');
        });
    }
});
