/**
 * 비디오 카드 효과 관련 JavaScript
 * index.html 페이지의 비디오 카드 크기 조절 및 재생 효과를 담당합니다.
 */

// 비디오 카드 초기화 함수
function initVideoCards() {
    // 비디오 카드 요소들 가져오기
    const videoItems = document.querySelectorAll('.video-item');
    if (videoItems.length === 0) return; // 비디오 카드가 없으면 실행하지 않음
    
    // 모든 비디오 카드의 높이를 동일하게 맞추는 함수
    function equalizeVideoHeights() {
        // 첫 번째 비디오 카드의 높이 가져오기
        const firstVideoItem = document.getElementById('video-1');
        if (!firstVideoItem) return;
        
        const firstVideoHeight = firstVideoItem.offsetHeight;
        
        // 모든 비디오 카드에 동일한 높이 적용
        videoItems.forEach(item => {
            item.style.height = `${firstVideoHeight}px`;
            
            // 비디오 요소에도 동일한 높이 적용
            const videoWrapper = item.querySelector('.video-wrapper');
            if (videoWrapper) {
                videoWrapper.style.height = '100%';
            }
        });
    }
    
    // 페이지 로드 후 및 리사이즈 시 높이 동기화
    window.addEventListener('load', equalizeVideoHeights);
    window.addEventListener('resize', equalizeVideoHeights);
    
    // 각 비디오 카드 클릭 이벤트 리스너
    videoItems.forEach(item => {
        const video = item.querySelector('video');
        if (!video) return;
        
        // 초기 상태 설정 - 활성화된 카드만 비디오 재생
        if (item.classList.contains('active')) {
            video.play();
            video.loop = true;
        } else {
            video.pause();
            video.currentTime = 0;
            video.loop = false;
        }
        
        // 클릭 이벤트 리스너 추가
        item.addEventListener('click', function() {
            // 이미 활성화된 카드면 아무 작업도 하지 않음
            if (this.classList.contains('active')) return;
            
            // 현재 활성화된 카드 찾기
            const activeItem = document.querySelector('.video-item.active');
            if (activeItem) {
                const activeVideo = activeItem.querySelector('video');
                
                // 현재 활성화된 카드의 비디오 일시정지
                if (activeVideo) {
                    activeVideo.pause();
                    activeVideo.currentTime = 0;
                    activeVideo.loop = false;
                }
                
                // 현재 활성화된 카드의 active 클래스 제거
                activeItem.classList.remove('active');
            }
            
            // 클릭한 카드에 active 클래스 추가
            this.classList.add('active');
            
            // 클릭한 카드의 비디오 재생
            if (video) {
                video.play();
                video.loop = true;
            }
            
            // 카드 크기 조정
            videoItems.forEach(card => {
                // 기본 크기로 초기화
                card.classList.remove('col-lg-6');
                card.classList.remove('col-lg-3');
                
                // 활성화된 카드는 크게, 나머지는 작게 설정
                if (card === this) {
                    card.classList.add('col-lg-6');
                } else {
                    card.classList.add('col-lg-3');
                }
            });
            
            // 높이 동기화 다시 적용
            setTimeout(equalizeVideoHeights, 100);
        });
    });
}

// 외부에서 사용할 수 있도록 함수 내보내기
export { initVideoCards };
