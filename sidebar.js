

// 네비게이션 메뉴 클릭 이벤트
document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-menu li');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });


});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-icon');
    const mobileSidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    function toggleMenu() {
        mobileSidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
    }

    menuToggle.addEventListener('click', toggleMenu);
    sidebarOverlay.addEventListener('click', toggleMenu);
});