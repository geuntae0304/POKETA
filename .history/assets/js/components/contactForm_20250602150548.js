/**
 * 연락처 모달 폼 제출 처리 관련 JavaScript
 * 연락처 모달 폼 제출 및 유효성 검사를 담당합니다.
 */

// 연락처 폼 초기화 함수
function initContactForm() {
    // 폼 제출 버튼 가져오기
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    if (!sendMessageBtn) return; // 버튼이 없으면 실행하지 않음
    
    // 폼 제출 버튼에 클릭 이벤트 추가
    sendMessageBtn.addEventListener('click', function() {
        // 폼 데이터 가져오기
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // 간단한 유효성 검사
        if (name && email && message) {
            // 성공 메시지 표시
            alert('메시지가 성공적으로 전송되었습니다!');
            
            // 모달 닫기
            const contactModal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
            if (contactModal) {
                contactModal.hide();
            }
            
            // 폼 초기화
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.reset();
            }
        } else {
            // 오류 메시지 표시
            alert('모든 필드를 입력해주세요.');
        }
    });
}

// 외부에서 사용할 수 있도록 함수 내보내기
export { initContactForm };
