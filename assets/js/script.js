// 햄버거 메뉴 토글 기능
document.addEventListener('DOMContentLoaded', function() {
    // 햄버거 메뉴 버튼과 네비게이션 메뉴 요소 가져오기
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    // 햄버거 메뉴 클릭 이벤트 처리
    hamburgerMenu.addEventListener('click', function() {
        // 햄버거 메뉴와 네비게이션 메뉴에 active 클래스 토글
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // 화면 크기가 변경될 때 모바일 메뉴 상태 초기화
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // 메뉴 항목 클릭 시 모바일 메뉴 닫기
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                hamburgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
});
