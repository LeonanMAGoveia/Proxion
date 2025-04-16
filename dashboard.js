const toggleMenuBtn = document.getElementById('toggle-menu-btn');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// Toggle do menu em telas menores
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click');
}