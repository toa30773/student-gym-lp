'use strict';

// =========================================
// Hamburger menu
// =========================================
const hamburger = document.querySelector('.js-hamburger');
const nav = document.querySelector('.js-nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('is-open');
    nav.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-open');
      nav.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// =========================================
// Counseling form
// =========================================
const form = document.querySelector('.js-counseling-form');

if (form) {
  const requiredFields = form.querySelectorAll('[required]');

  requiredFields.forEach(field => {
    field.addEventListener('input', () => {
      if (field.value.trim()) {
        field.style.borderColor = '';
      }
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    let isValid = true;

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = '#ff4444';
        field.focus();
      } else {
        field.style.borderColor = '';
      }
    });

    if (!isValid) return;

    const section = form.closest('.form-section');
    section.innerHTML = `
      <div class="form-success">
        <p class="form-success__icon">✅</p>
        <p class="form-success__title">ご予約を受け付けました！</p>
        <p class="form-success__text">
          ご入力いただいたメールアドレスに確認メールをお送りしました。<br>
          1営業日以内にスタッフよりご連絡いたします。
        </p>
        <a href="index.html" class="form-success__link">トップページへ戻る</a>
      </div>
    `;
  });
}
