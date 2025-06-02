/**
 * 검은 점 호버 및 클릭 효과 관련 JavaScript
 * index.html 페이지의 카드에 있는 검은 점 호버 및 클릭 효과를 담당합니다.
 */

// 검은 점 효과 초기화 함수
function initBlackDots() {
    // 검은 점 요소들 가져오기
    const blackDots = document.querySelectorAll('.black-dot');
    if (blackDots.length === 0) return; // 검은 점이 없으면 실행하지 않음
    
    // 각 검은 점에 이벤트 리스너 추가
    blackDots.forEach(dot => {
        // 호버 효과
        dot.addEventListener('mouseenter', function() {
            const card = this.closest('.card');
            if (card) {
                card.classList.add('dot-hovered');
            }
        });
        
        dot.addEventListener('mouseleave', function() {
            const card = this.closest('.card');
            if (card) {
                card.classList.remove('dot-hovered');
            }
        });
        
        // 클릭 효과 - 상세 정보 표시
        dot.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 동작 방지
            e.stopPropagation(); // 이벤트 버블링 방지
            
            // 클릭된 점의 데이터 속성 가져오기
            const dotId = this.getAttribute('data-dot-id');
            if (!dotId) return;
            
            // 모든 점 정보 숨기기
            const allDotInfos = document.querySelectorAll('.dot-info');
            allDotInfos.forEach(info => {
                info.classList.remove('active');
            });
            
            // 해당 점의 정보 표시
            const dotInfo = document.querySelector(`.dot-info[data-dot-id="${dotId}"]`);
            if (dotInfo) {
                dotInfo.classList.add('active');
            }
        });
    });
    
    // 문서 클릭 시 모든 점 정보 숨기기
    document.addEventListener('click', function(e) {
        // 클릭된 요소가 검은 점이나 점 정보가 아닌 경우에만 처리
        if (!e.target.closest('.black-dot') && !e.target.closest('.dot-info')) {
            const allDotInfos = document.querySelectorAll('.dot-info');
            allDotInfos.forEach(info => {
                info.classList.remove('active');
            });
        }
    });
}

// 외부에서 사용할 수 있도록 함수 내보내기
export { initBlackDots };
