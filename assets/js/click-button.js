document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.hello-btn');
    if (button) {
        button.addEventListener('click', function() {
            alert('Hello from CSS!');
        });
    }
});
