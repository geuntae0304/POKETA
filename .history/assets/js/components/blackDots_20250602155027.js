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
            
            // 클릭된 점이 있는 카드 찾기
            const card = this.closest('.card');
            if (!card) return;
            
            // 해당 카드의 상세 정보 찾기
            const cardDetail = card.querySelector('.card-detail');
            if (!cardDetail) return;
            
            // 상세 정보 표시 상태 토글
            const isActive = cardDetail.classList.contains('active');
            
            // 모든 카드의 상세 정보 숨기기
            const allCardDetails = document.querySelectorAll('.card-detail');
            allCardDetails.forEach(detail => {
                detail.classList.remove('active');
            });
            
            // 토글 상태가 아닐 경우에만 활성화
            if (!isActive) {
                cardDetail.classList.add('active');
            }
        });
    });
    
    // 닫기 버튼 클릭 이벤트 처리
    const closeButtons = document.querySelectorAll('.detail-close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // 가장 가까운 card-detail 찾기
            const cardDetail = this.closest('.card-detail');
            if (cardDetail) {
                cardDetail.classList.remove('active');
            }
        });
    });
    
    // 문서 클릭 시 모든 카드 상세 정보 숨기기
    document.addEventListener('click', function(e) {
        // 클릭된 요소가 검은 점이나 카드 상세 정보가 아닌 경우에만 처리
        if (!e.target.closest('.black-dot') && !e.target.closest('.card-detail')) {
            const allCardDetails = document.querySelectorAll('.card-detail');
            allCardDetails.forEach(detail => {
                detail.classList.remove('active');
            });
        }
    });
}

// 외부에서 사용할 수 있도록 함수 내보내기
export { initBlackDots };
