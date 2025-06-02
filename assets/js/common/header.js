/**
 * 헤더 스크롤 효과 관련 JavaScript
 * 스크롤 시 헤더를 숨기거나 표시하는 기능을 담당합니다.
 */

// 헤더 스크롤 효과 초기화 함수
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return; // 헤더가 없으면 실행하지 않음
    
    let lastScrollTop = 0; // 마지막 스크롤 위치 저장 변수
    let scrollThreshold = 50; // 스크롤 감지 임계값
    let scrollDelta = 5; // 최소 스크롤 거리 (작은 움직임 무시)
    let ticking = false; // 스크롤 이벤트 스로틀링을 위한 변수
    
    // 스크롤 이벤트 처리 함수
    function handleScroll() {
        // 현재 스크롤 위치 가져오기
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 스크롤 방향 감지 (최소 스크롤 거리 이상일 때만 처리)
        if (Math.abs(lastScrollTop - scrollTop) <= scrollDelta) {
            ticking = false;
            return;
        }
        
        // 스크롤 방향에 따른 헤더 표시/숨김 처리
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            // 아래로 스크롤 - 헤더 숨기기
            header.classList.add('hide');
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
        ticking = false;
    }
    
    // 스크롤 이벤트 리스너 추가 (스로틀링 적용)
    window.addEventListener('scroll', function() {
        if (!ticking) {
            // requestAnimationFrame을 사용하여 성능 최적화
            window.requestAnimationFrame(function() {
                handleScroll();
            });
            ticking = true;
        }
    }, { passive: true }); // passive: true로 설정하여 성능 향상
}

// 외부에서 사용할 수 있도록 함수 내보내기
export { initHeaderScroll };
