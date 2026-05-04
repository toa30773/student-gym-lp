'use strict';

/* ===========================================================
   BODY MAKE STUDIO - main.js
   - Mobile drawer toggle
   - FAQ accordion
   - Counseling form validation
   - News list category filter
   =========================================================== */

document.addEventListener('DOMContentLoaded', function () {
  initDrawer();
  initFaq();
  initForm();
  initNewsFilter();
});

/* -------------------------------
   Drawer (mobile menu)
   ------------------------------- */
function initDrawer() {
  var btn = document.querySelector('.js-menu-btn');
  var drawer = document.querySelector('.js-drawer');
  if (!btn || !drawer) return;

  btn.addEventListener('click', function () {
    var isOpen = drawer.classList.toggle('is-open');
    btn.classList.toggle('is-active', isOpen);
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // close on link click
  drawer.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      drawer.classList.remove('is-open');
      btn.classList.remove('is-active');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* -------------------------------
   FAQ accordion
   ------------------------------- */
function initFaq() {
  var items = document.querySelectorAll('.js-faq-item');
  if (!items.length) return;

  items.forEach(function (item) {
    var btn = item.querySelector('.js-faq-q');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var isOpen = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
}

/* -------------------------------
   Counseling form validation
   ------------------------------- */
function initForm() {
  var form = document.querySelector('.js-form');
  if (!form) return;

  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var telRe = /^[\d\-+()\s]{8,}$/;

  form.addEventListener('submit', function (e) {
    var hasError = false;
    var requiredFields = form.querySelectorAll('.js-required');

    requiredFields.forEach(function (field) {
      var value = field.value.trim();
      var error = form.querySelector('.js-error[data-for="' + field.id + '"]');
      var invalid = false;

      if (!value) {
        invalid = true;
      } else if (field.type === 'email' && !emailRe.test(value)) {
        invalid = true;
      } else if (field.type === 'tel' && !telRe.test(value)) {
        invalid = true;
      }

      if (invalid) {
        hasError = true;
        field.classList.add('form__input--error');
        if (error) error.classList.add('is-show');
      } else {
        field.classList.remove('form__input--error');
        if (error) error.classList.remove('is-show');
      }
    });

    if (hasError) {
      e.preventDefault();
      var firstError = form.querySelector('.form__input--error');
      if (firstError) firstError.focus();
    }
  });

  // clear error on input
  form.querySelectorAll('.js-required').forEach(function (field) {
    field.addEventListener('input', function () {
      if (field.value.trim()) {
        field.classList.remove('form__input--error');
        var error = form.querySelector('.js-error[data-for="' + field.id + '"]');
        if (error) error.classList.remove('is-show');
      }
    });
  });
}

/* -------------------------------
   News list category filter
   ------------------------------- */
function initNewsFilter() {
  var filterBtns = document.querySelectorAll('.js-news-filter');
  var cards = document.querySelectorAll('.js-news-card');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var category = btn.dataset.category;

      filterBtns.forEach(function (b) {
        b.classList.toggle('news-filter__btn--active', b === btn);
      });

      cards.forEach(function (card) {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
