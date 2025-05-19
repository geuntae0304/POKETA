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
    
    // 헤더 스크롤 효과 구현
    const header = document.querySelector('.header');
    let lastScrollTop = 0; // 마지막 스크롤 위치 저장 변수
    
    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', function() {
        // 현재 스크롤 위치 가져오기
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 스크롤 방향 감지
        if (scrollTop > lastScrollTop) {
            // 아래로 스크롤 - 헤더 숨기기
            if (scrollTop > 50) { // 스크롤이 어느 정도 내려갔을 때만 숨기기 적용
                header.classList.add('hide');
            }
        } else {
            // 위로 스크롤 - 헤더 나타나기
            header.classList.remove('hide');
        }
        
        // 맨 위에 있을 때는 헤더 항상 표시
        if (scrollTop <= 10) {
            header.classList.remove('hide');
        }
        
        // 현재 스크롤 위치 저장 (다음 이벤트와 비교하기 위함)
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});
