// sidebar.js
document.addEventListener('DOMContentLoaded', () => {
    (async () => {
      /* ─ 1. <header data-include="…"> 들을 모두 불러와 삽입 ─ */
      const jobs = Array.from(document.querySelectorAll('[data-include]'))
        .map(async host => {
          const html = await (await fetch(host.dataset.include)).text();
          host.innerHTML = html;
  
          const want = host.dataset.active
                   || location.pathname.split('/').pop().replace('.html', '');
          const a = host.querySelector(`a[href="/${want}.html"]`);
          if (a) (a.querySelector('li') || a).classList.add('active');
        });
  
      await Promise.all(jobs);   // ⭐ 여기까지 와야 메뉴 DOM 존재
  
      /* ─ 2. 이제 안전하게 요소 찾고 이벤트 연결 ─ */
      const menuToggle     = document.getElementById('menu-icon');
      const mobileSidebar  = document.querySelector('.sidebar');
      const sidebarOverlay = document.getElementById('sidebarOverlay');
      const navItems       = document.querySelectorAll('.nav-menu li');
  
      if (!menuToggle) return;   // 예상치 못한 경우 방어
  
      const toggleMenu = () => {
        mobileSidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
      };
  
      menuToggle.addEventListener('click', toggleMenu);
      sidebarOverlay.addEventListener('click', toggleMenu);
  
      navItems.forEach(item => {
        item.addEventListener('click', () => {
          navItems.forEach(nav => nav.classList.remove('active'));
          item.classList.add('active');
        });
      });
    })();
  });
  