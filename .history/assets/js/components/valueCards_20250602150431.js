/**
 * 가치 카드 효과 관련 JavaScript
 * ourstory.html 페이지의 가치 카드 플립 및 호버 효과를 담당합니다.
 */

// 가치 카드 초기화 함수
function initValueCards() {
    // 가치 카드 요소들 가져오기
    const valueCards = document.querySelectorAll('.value-card');
    if (valueCards.length === 0) return; // 카드가 없으면 실행하지 않음
    
    // 모바일용 설명 텍스트 관련
    const defaultMobileDesc = document.getElementById('default-value-mobile');
    
    // 각 카드에 클릭 이벤트 추가 (모바일용)
    valueCards.forEach(card => {
        // 터치 이벤트를 위한 플립 토글 기능 (모바일용)
        card.addEventListener('touchstart', function(e) {
            // 터치 이벤트에서는 카드 플립 수동 토글
            const inner = this.querySelector('.value-card-inner');
            inner.style.transform = inner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
            
            // 모바일용 설명 텍스트 업데이트
            const value = this.getAttribute('data-value');
            updateMobileDescription(value);
            
            e.preventDefault(); // 기본 동작 방지
        });
        
        // 클릭 이벤트 (데스크탑용)
        card.addEventListener('click', function() {
            // 모바일용 설명 텍스트 업데이트
            const value = this.getAttribute('data-value');
            updateMobileDescription(value);
        });
    });
    
    // 호버 시 간단한 확대 효과만 적용
    valueCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // 카드가 플립되지 않았을 때만 확대 효과 적용
            const inner = this.querySelector('.value-card-inner');
            if (inner.style.transform !== 'rotateY(180deg)') {
                this.style.transform = 'scale3d(1.05, 1.05, 1.05)';
            }
        });
        
        // 마우스가 카드를 떠날 때 원래 상태로 복구
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale3d(1, 1, 1)';
            
            // 배경 그라디언트 복구
            const front = this.querySelector('.value-card-front');
            front.style.background = getCardGradient(this.getAttribute('data-value'));
        });
    });
    
    // 모바일용 설명 텍스트 업데이트 함수
    function updateMobileDescription(value) {
        // 모바일용 설명 텍스트 업데이트
        if (window.innerWidth <= 768) {
            const allMobileDescs = document.querySelectorAll('.value-mobile-description p');
            allMobileDescs.forEach(desc => {
                desc.classList.remove('active');
                desc.classList.add('hidden');
            });
            
            // 선택된 가치에 해당하는 설명 텍스트 표시
            const cardBack = document.querySelector(`.value-card[data-value="${value}"] .value-card-back p`);
            if (cardBack && defaultMobileDesc) {
                defaultMobileDesc.textContent = cardBack.textContent;
                defaultMobileDesc.classList.remove('hidden');
                defaultMobileDesc.classList.add('active');
            }
        }
    }
    
    // 카드 가치별 그라디언트 반환 함수
    function getCardGradient(value) {
        switch(value) {
            case 'transparency':
                return 'linear-gradient(135deg, rgba(100, 182, 255, 0.2), rgba(108, 216, 255, 0.4))';
            case 'personalization':
                return 'linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(255, 184, 184, 0.4))';
            case 'playfulness':
                return 'linear-gradient(135deg, rgba(255, 209, 102, 0.2), rgba(255, 243, 196, 0.4))';
            case 'sustainability':
                return 'linear-gradient(135deg, rgba(6, 214, 160, 0.2), rgba(165, 248, 231, 0.4))';
            default:
                return 'linear-gradient(135deg, rgba(31, 33, 36, 0.2), rgba(31, 33, 36, 0.4))';
        }
    }
}

// 외부에서 사용할 수 있도록 함수 내보내기
export { initValueCards };
