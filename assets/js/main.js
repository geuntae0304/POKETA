document.getElementById('sendMessageBtn').addEventListener('click', function() {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {

        alert('Message sent successfully!');
        
        const contactModal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
        contactModal.hide();
        
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// 가치 버튼 클릭 이벤트 처리
document.addEventListener('DOMContentLoaded', function() {
    // 가치 버튼과 설명 영역 요소 가져오기
    const valueButtons = document.querySelectorAll('.value-btn');
    const descriptionArea = document.querySelector('.values-description-area');
    const valueDescriptions = document.querySelectorAll('.value-description');
    
    // 각 버튼에 클릭 이벤트 리스너 추가
    valueButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 현재 활성화된 버튼 클래스 제거
            valueButtons.forEach(btn => btn.classList.remove('active'));
            
            // 클릭한 버튼 활성화
            this.classList.add('active');
            
            // 해당 가치 값 가져오기
            const value = this.getAttribute('data-value');
            
            // 설명 영역 데이터 속성 업데이트
            descriptionArea.setAttribute('data-active', value);
            
            // 모든 설명 비활성화
            valueDescriptions.forEach(desc => desc.classList.remove('active'));
            
            // 선택한 가치에 해당하는 설명만 활성화
            const activeDescription = document.querySelector(`.value-description[data-value="${value}"]`);
            if (activeDescription) {
                activeDescription.classList.add('active');
            }
        });
    });
    
    // 페이지 로드 시 첫 번째 버튼 활성화 (이미 HTML에서 active 클래스 추가되어 있음)
    // 첫 번째 설명도 활성화 (이미 HTML에서 active 클래스 추가되어 있음)
});


//헤더 스크롤 효과를 위한 스크립트


        // 헤더 스크롤 효과 구현
        document.addEventListener('DOMContentLoaded', function() {
            const header = document.querySelector('.header');
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
        });