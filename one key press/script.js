document.querySelector('form').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        

        document.getElementById('submitButton').click();
    }
});


document.getElementById('submitButton').addEventListener('click', function () {
    alert('Button clicked!');
});