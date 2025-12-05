
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const registerCard = document.getElementById('register-card');
const loginCard = document.getElementById('login-card');
const showLoginLink = document.getElementById('show-login');
const showRegisterLink = document.getElementById('show-register');

const popupOverlay = document.getElementById('popup-overlay');
const popupHeader = document.getElementById('popup-header');
const popupMessage = document.getElementById('popup-message');
const closePopupButton = document.getElementById('close-popup');


function simpleHash(password) {
    let hash = 0;
    if (password.length === 0) return hash;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; 
    }
    return hash.toString();
}

function showPopup(header, message) {
    popupHeader.textContent = header;
    popupMessage.textContent = message;
    popupOverlay.classList.remove('hidden');
}

function hidePopup() {
    popupOverlay.classList.add('hidden');
}

loginCard.classList.add('hidden');
registerCard.classList.remove('hidden');

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerCard.classList.add('hidden');
    loginCard.classList.remove('hidden');
});

showRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginCard.classList.add('hidden');
    registerCard.classList.remove('hidden');
});

closePopupButton.addEventListener('click', hidePopup);

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const usernameInput = document.getElementById('reg-username');
    const passwordInput = document.getElementById('reg-password');

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    
    const users = JSON.parse(localStorage.getItem('users')) || [];

 
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        showPopup(
            "❌ Registration Failed",
            "A user with this username already exists. Please choose a different one."
        );
        return;
    }

    
    const hashedPassword = simpleHash(password);
    const newUser = {
        username: username,
        password: hashedPassword 
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

   
    showPopup(
        "✅ Registration Successful!",
        `Welcome, ${username}! You can now log in.`
    );
    
    usernameInput.value = '';
    passwordInput.value = '';
    showLoginLink.click();
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const usernameInput = document.getElementById('login-username');
    const passwordInput = document.getElementById('login-password');

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const inputHashedPassword = simpleHash(password);

    const authenticatedUser = users.find(user => 
        user.username === username && user.password === inputHashedPassword
    );

    if (authenticatedUser) {
       
        showPopup(
            "🎉 Login Success!",
            `Redirection to instagram`
           
        );
 
        usernameInput.value = '';
        passwordInput.value = '';
        window.location.href="https://www.instagram.com/yogeshchauhan9991/";
    } else {
        
        showPopup(
            "🛑 Invalid Credentials",
            "Incorrect username or password. Please try again or register."
        );
    }
});