// 年号（フッター）
document.addEventListener('DOMContentLoaded', () => {
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();
});

// モバイルナビ開閉
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');
if (toggle && menu){
toggle.addEventListener('click', () => {
const open = menu.classList.toggle('open');
toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
}

// ふわっと表示：IntersectionObserver
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('is-visible');
observer.unobserve(entry.target);
}
})
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));