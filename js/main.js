'use strict';

/* ===========================================================
   BODY MAKE STUDIO - メインスクリプト
   全ページ共通で読み込まれる。対象要素が存在しないページでは
   各 init 関数が早期 return するため副作用なし。
   =========================================================== */

document.addEventListener('DOMContentLoaded', function () {
  initDrawer();     // ハンバーガーメニュー（スマホ用）
  initFaq();        // FAQアコーディオン
  initForm();       // カウンセリングフォームのバリデーション
  initNewsFilter(); // ニュース一覧のカテゴリーフィルター
});

/* ----------------------------------------------------------
   ドロワーメニュー（スマホ用ハンバーガーメニュー）
   .js-menu-btn クリックで .js-drawer を開閉する。
   ドロワー内のリンクをクリックしたら自動で閉じる。
   ---------------------------------------------------------- */
function initDrawer() {
  var btn = document.querySelector('.js-menu-btn');
  var drawer = document.querySelector('.js-drawer');
  if (!btn || !drawer) return; // 要素がないページはスキップ

  btn.addEventListener('click', function () {
    var isOpen = drawer.classList.toggle('is-open');
    btn.classList.toggle('is-active', isOpen); // ✕ アイコンへのアニメーション切り替え
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // ドロワー内リンクを押したらメニューを自動で閉じる
  drawer.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      drawer.classList.remove('is-open');
      btn.classList.remove('is-active');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ----------------------------------------------------------
   FAQアコーディオン
   .js-faq-item クリックで is-open をトグルし、回答欄を開閉する。
   ---------------------------------------------------------- */
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

/* ----------------------------------------------------------
   カウンセリングフォームのバリデーション
   .js-required が付いた入力欄を送信時に検証する。
   エラー時は送信を止め、最初のエラー欄にフォーカスを移す。
   入力中はリアルタイムでエラー表示を消す。
   ---------------------------------------------------------- */
function initForm() {
  var form = document.querySelector('.js-form');
  if (!form) return;

  // メールアドレスと電話番号の形式チェック用正規表現
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var telRe = /^[\d\-+()\s]{8,}$/;

  form.addEventListener('submit', function (e) {
    var hasError = false;
    var requiredFields = form.querySelectorAll('.js-required');

    requiredFields.forEach(function (field) {
      var value = field.value.trim();
      var error = form.querySelector('.js-error[data-for="' + field.id + '"]');
      var invalid = false;

      // 空欄・メール形式・電話番号形式をそれぞれチェック
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

    // エラーがあれば送信を止め、最初のエラー欄にフォーカス
    if (hasError) {
      e.preventDefault();
      var firstError = form.querySelector('.form__input--error');
      if (firstError) firstError.focus();
    }
  });

  // 入力するたびにエラー表示をリセット（入力中の赤枠を消す）
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

/* ----------------------------------------------------------
   ニュース一覧カテゴリーフィルター
   .js-news-filter ボタンのクリックで data-category が一致する
   .js-news-card だけを表示し、それ以外を非表示にする。
   ---------------------------------------------------------- */
function initNewsFilter() {
  var filterBtns = document.querySelectorAll('.js-news-filter');
  var cards = document.querySelectorAll('.js-news-card');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var category = btn.dataset.category;

      // クリックしたボタンだけアクティブ状態にする
      filterBtns.forEach(function (b) {
        b.classList.toggle('news-filter__btn--active', b === btn);
      });

      // 選択カテゴリーが一致するカードだけ表示（「すべて」は全表示）
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
