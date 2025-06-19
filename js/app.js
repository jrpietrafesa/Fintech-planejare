function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Remove active class from all menu items
function setActive(element) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    // Add active class to clicked item
    element.classList.add('active');

    // Close sidebar on mobile after selection
    if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('active');
    }
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function (event) {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');

    if (window.innerWidth <= 768 &&
        !sidebar.contains(event.target) &&
        !menuToggle.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});


//Funções de login, recuperação de senha e criação de conta
function forgotPassword() {
    alert('Funcionalidade de recuperação de senha em desenvolvimento');
}

function createAccount() {
    alert('Funcionalidade de criação de conta em desenvolvimento');
}

console.log('Script loaded successfully');
