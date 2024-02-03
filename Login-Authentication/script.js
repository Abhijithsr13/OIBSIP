document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
    const securedPage = document.getElementById('securedPage');
    const signupBtn = document.getElementById('signupBtn');
    const signinBtn = document.getElementById('signinBtn');
    const nameField = document.getElementById('nameField');
    const title = document.getElementById('title');
    const backToSignupBtn = document.getElementById('backToSignupBtn'); 

    // Mock user data 
    const userData = {};

    function registerUser() {
        const regUsername = document.getElementById('regUsername').value;
        const regEmail = document.getElementById('regEmail').value;
        const regPassword = document.getElementById('regPassword').value;

        if (!regUsername || !regEmail || !regPassword) {
            alert('Please fill in all the required fields.');
            return;
        }
    
    
        // Check if username already exists
        if (userData[regUsername]) {
            alert('Username already exists. Please choose a different username.');
            return;
        }

        // Store user information
        userData[regUsername] = {
            email: regEmail,
            password: regPassword
        };

        showSecuredPage();
    }

    function showSecuredPage() {
      
        if (registrationForm) registrationForm.style.display = 'none';
        if (loginForm) loginForm.style.display = 'none';

      
        if (securedPage) securedPage.style.display = 'block';
 
        window.location.href = 'secured-page.html';
    }

    signinBtn.onclick = function () {
        nameField.style.maxHeight = "0";
        title.innerHTML = "Sign In";
        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");

      
        if (loginForm) loginForm.style.display = 'block';
        if (registrationForm) registrationForm.style.display = 'none';
        if (securedPage) securedPage.style.display = 'none';
    }

    signupBtn.onclick = function () {
        nameField.style.maxHeight = "60px";
        title.innerHTML = "Sign Up";
        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");

        if (registrationForm) registrationForm.style.display = 'block';
        if (loginForm) loginForm.style.display = 'none';
        if (securedPage) securedPage.style.display = 'none';
    }


    if (signupBtn) signupBtn.addEventListener('click', registerUser);

    if (backToSignupBtn) backToSignupBtn.addEventListener('click', function () { 
        if (registrationForm) registrationForm.style.display = 'block';
        if (loginForm) loginForm.style.display = 'none';
        if (securedPage) securedPage.style.display = 'none';
    });
    backToSignupBtn.onclick = function () {
        nameField.style.maxHeight = "60px";
        title.innerHTML = "Sign Up";
        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");
    }
    const loginBtn = document.getElementById('loginBtn');

if (loginBtn) {
    loginBtn.addEventListener('click', function () {
        const loginUsername = document.getElementById('loginUsername').value;
        const loginPassword = document.getElementById('loginPassword').value;

        if (!loginUsername || !loginPassword) {
            alert('Please fill in all the required fields.');
            return;
        }

        alert('Login successful!');
    });
}
});
