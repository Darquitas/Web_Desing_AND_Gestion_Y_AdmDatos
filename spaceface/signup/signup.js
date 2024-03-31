// script.js


function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateSignUp() {
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var birthdate = document.getElementById('birthdate').value;

    // Validaciones
    if (name === '') {
        alert('Please enter your name.');
        return false;
    }
    
    if (lastName === '') {
        alert('Please enter your last name.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (password.length < 7) {
        alert('Password must be at least 7 characters long.');
        return false;
    }

    if (birthdate === '') {
        alert('Please enter your birthdate.');
        return false;
    }

    // Crear un objeto de usuario
    var newUser = {
        name: name,
        lastName: lastName,
        email: email,
        password: password,
        birthdate: birthdate
    };



    // Si todas las validaciones pasan, el formulario se puede enviar
    alert('Valid form. Sending data...');

    // Limpiar el formulario
    clearForm();


    return true;

   
}



// Función para limpiar el formulario después de enviar los datos
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('birthdate').value = '';
}



// Llamar a la fn de validación
document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateSignUp();
});

