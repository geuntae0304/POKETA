/**
 * 네비게이션 및 햄버거 메뉴 관련 JavaScript
 * 모바일 메뉴 토글 및 반응형 처리를 담당합니다.
 */

// 네비게이션 메뉴 초기화 함수
function initNavigation() {
    // 햄버거 메뉴 버튼과 네비게이션 메뉴 요소 가져오기
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburgerMenu || !navMenu) return; // 필요한 요소가 없으면 실행하지 않음
    
    // 햄버거 메뉴 클릭 이벤트 처리
    hamburgerMenu.addEventListener('click', function() {
        // 햄버거 메뉴와 네비게이션 메뉴에 active 클래스 토글
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // 화면 크기가 변경될 때 모바일 메뉴 상태 초기화
    window.addEventListener('resize', function() {
        // Bootstrap 5의 lg 중단점(992px)에 맞춤
        if (window.innerWidth > 992 && navMenu.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // 메뉴 항목 클릭 시 모바일 메뉴 닫기
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Bootstrap 5의 lg 중단점(992px)에 맞춤
            if (window.innerWidth <= 992) {
                hamburgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
}

// 외부에서 사용할 수 있도록 함수 내보내기
export { initNavigation };
