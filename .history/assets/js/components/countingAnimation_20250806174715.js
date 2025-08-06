/**
 * 숫자 카운팅 애니메이션 관련 JavaScript
 * index.html 페이지의 데이터 섹션 숫자 카운팅 애니메이션을 담당합니다.
 */

// 숫자 카운팅 애니메이션 초기화 함수
function initCountingAnimation() {
    // 데이터 섹션 관찰 시작
    const dataSection = document.querySelector('.data-section');
    if (!dataSection) return; // 데이터 섹션이 없으면 실행하지 않음
    
    // 인터섹션 옵저버 설정 - 요소가 화면에 보일 때 애니메이션 시작
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCountingAnimation();
                observer.disconnect(); // 한 번만 실행하도록 연결 해제
            }
        });
    }, { threshold: 0.3 }); // 30% 이상 보일 때 실행
    
    
    // 데이터 섹션 관찰 시작
    observer.observe(dataSection);
}

// 숫자 카운팅 애니메이션 함수
function startCountingAnimation() {
    const countingElements = document.querySelectorAll('.counting-animation');
    if (countingElements.length === 0) return; // 카운팅 요소가 없으면 실행하지 않음
    
    // 각 카운팅 요소에 대해 처리
    countingElements.forEach(element => {
        const targetValue = parseInt(element.getAttribute('data-value'));
        const suffix = element.getAttribute('data-suffix') || '';
        let startValue = 0;
        const duration = 2000; // 애니메이션 지속 시간 (밀리초)
        const frameRate = 30; // 초당 프레임 수
        const totalFrames = duration / (1000 / frameRate);
        const increment = targetValue / totalFrames;
        let currentFrame = 0;
        
        
        // 숫자 포맷 함수
        const formatNumber = (num) => {
            if (num >= 1000) {
                return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }
            return num;
        };
        
        // 애니메이션 시작
        const counter = setInterval(() => {
            currentFrame++;
            const newValue = Math.min(Math.floor(increment * currentFrame), targetValue);
            
            // 숫자 업데이트 (suffix는 HTML에서 이미 지정되어 있으므로 여기서는 추가하지 않음)
            element.textContent = formatNumber(newValue);
            newValuew
            
            // 애니메이션 완료 시
            if (currentFrame >= totalFrames) {
                clearInterval(counter);
                element.textContent = formatNumber(targetValue);
            }
        }, 1000 / frameRate);
    });
}

// 외부에서 사용할 수 있도록 함수 내보내기
export { initCountingAnimation };
