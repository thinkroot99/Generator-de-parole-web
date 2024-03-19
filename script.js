function generatePassword(length, includeSpecialChars) {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    if (includeSpecialChars) {
        charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }
    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}

function validateForm() {
    const length = parseInt(document.getElementById('length').value);
    const numPasswords = parseInt(document.getElementById('num_passwords').value);

    if (isNaN(length) || length < 8) {
        document.getElementById('feedback').innerText = 'Lungimea parolei trebuie să fie de cel puțin 8 caractere.';
        return false;
    }

    if (isNaN(numPasswords) || numPasswords < 1) {
        document.getElementById('feedback').innerText = 'Numărul de parole trebuie să fie un număr întreg pozitiv.';
        return false;
    }

    return true;
}

function generatePasswords() {
    if (!validateForm()) {
        return;
    }

    const length = parseInt(document.getElementById('length').value);
    const includeSpecialChars = document.getElementById('special_chars').checked;
    const numPasswords = parseInt(document.getElementById('num_passwords').value);
    let passwordsHTML = '<h2>Parole Generate:</h2><ul>';

    for (let i = 0; i < numPasswords; i++) {
        const password = generatePassword(length, includeSpecialChars);
        passwordsHTML += `<li>${password}</li>`;
    }

    passwordsHTML += '</ul>';
    document.getElementById('passwords').innerHTML = passwordsHTML;
    document.getElementById('feedback').innerText = ''; // Clear feedback
}
