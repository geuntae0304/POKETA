/**
 * 가치 버튼 효과 관련 JavaScript
 * ourstory.html 페이지의 가치 버튼 클릭 및 설명 표시 효과를 담당합니다.
 */

// 가치 버튼 초기화 함수
function initValueCards() {
    // 가치 버튼 요소들 가져오기
    const valueButtons = document.querySelectorAll('.value-btn');
    if (valueButtons.length === 0) return; // 버튼이 없으면 실행하지 않음
    
    // 가치 설명 영역
    const valuesDescriptionArea = document.querySelector('.values-description-area');
    const valueDescriptions = document.querySelectorAll('.value-description');
    
    // 각 버튼에 클릭 이벤트 추가
    valueButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 모든 버튼에서 active 클래스 제거
            valueButtons.forEach(btn => btn.classList.remove('active'));
            
            // 클릭된 버튼에 active 클래스 추가
            this.classList.add('active');
            
            // 선택된 가치 값 가져오기
            const selectedValue = this.getAttribute('data-value');
            
            // 설명 영역의 data-active-value 속성 업데이트
            if (valuesDescriptionArea) {
                valuesDescriptionArea.setAttribute('data-active-value', selectedValue);
            }
            
            // 모든 설명 숨기기
            valueDescriptions.forEach(desc => {
                desc.classList.remove('active');
            });
            
            // 선택된 가치에 해당하는 설명만 표시
            const selectedDescription = document.querySelector(`.value-description[data-value="${selectedValue}"]`);
            if (selectedDescription) {
                selectedDescription.classList.add('active');
            }
        });
    });
    
    // 페이지 로드 시 첫 번째 버튼이 기본적으로 활성화되도록 설정
    // 이미 HTML에서 첫 번째 버튼에 active 클래스를 추가했지만, 설명 표시를 위해 클릭 이벤트 시뮬레이션
    if (valueButtons.length > 0) {
        // 첫 번째 버튼의 data-value 가져오기
        const firstValue = valueButtons[0].getAttribute('data-value');
        
        // 첫 번째 설명 활성화
        if (valuesDescriptionArea) {
            valuesDescriptionArea.setAttribute('data-active-value', firstValue);
        }
        
        const firstDescription = document.querySelector(`.value-description[data-value="${firstValue}"]`);
        if (firstDescription) {
            // 모든 설명 비활성화
            valueDescriptions.forEach(desc => {
                desc.classList.remove('active');
            });
            
            // 첫 번째 설명 활성화
            firstDescription.classList.add('active');
        }
    }
}

// 외부에서 사용할 수 있도록 함수 내보내기
export { initValueCards };
