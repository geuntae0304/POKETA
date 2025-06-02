/**
 * 리뷰/테스티모니얼 카드 효과 관련 JavaScript
 * index.html 페이지의 리뷰 카드 효과를 담당합니다.
 */

// 테스티모니얼 카드 초기화 함수
function initTestimonialCards() {
    // 모든 리뷰 카드 요소 가져오기
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    if (testimonialItems.length === 0) return; // 리뷰 카드가 없으면 실행하지 않음
    
    // 각 카드에 클릭 이벤트 리스너 추가
    testimonialItems.forEach(item => {
        item.addEventListener('click', function() {
            // 현재 활성화된 카드 찾기
            const activeItem = document.querySelector('.testimonial-item.active');
            if (activeItem) {
                // 현재 활성화된 카드의 active 클래스 제거
                activeItem.classList.remove('active');
            }
            
            // 클릭한 카드에 active 클래스 추가
            this.classList.add('active');
            
            // 카드 ID 가져오기
            const id = this.id;
            
            // 카드 크기 조정
            testimonialItems.forEach(card => {
                // 기본 크기로 초기화
                card.classList.remove('col-lg-6');
                card.classList.remove('col-lg-3');
                
                // 활성화된 카드는 크게, 나머지는 작게 설정
                if (card.id === id) {
                    card.classList.add('col-lg-6');
                } else {
                    card.classList.add('col-lg-3');
                }
            });
        });
    });
}

// 외부에서 사용할 수 있도록 함수 내보내기
export { initTestimonialCards };
