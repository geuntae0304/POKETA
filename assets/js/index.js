/**
 * index.html 페이지의 메인 JavaScript 파일
 * 필요한 모든 모듈을 가져와 초기화합니다.
 */

// 필요한 모듈 가져오기
import { initHeaderScroll } from './common/header.js';
import { initNavigation } from './common/navigation.js';
import { initVideoCards } from './components/videoCards.js';
import { initTestimonialCards } from './components/testimonialCards.js';
import { initCountingAnimation } from './components/countingAnimation.js';
// 검은색 동그라미 기능 제거
import { initContactForm } from './components/contactForm.js';

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 공통 기능 초기화
    initHeaderScroll();
    initNavigation();
    
    // 페이지 특정 기능 초기화
    initVideoCards();
    initTestimonialCards();
    initCountingAnimation();
    // 검은색 동그라미 기능 제거
    initContactForm();
    
    // AOS 초기화 확인
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
});
