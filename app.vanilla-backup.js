// =====================================================================
//  Lights Hope - whole website built with JavaScript only
// =====================================================================

// ================= Styles (injected by JavaScript) =================
const css = `
* { margin: 0; padding: 0; box-sizing: border-box; }
:root { --navy:#1f3a6e; --navy-dark:#172c55; --navy-light:#34508a; --gray:#e8e8e8; }
body { font-family: "Inter","Segoe UI",Arial,sans-serif; color:#111; background:#fff; }
a { color:inherit; text-decoration:none; }
button { font-family:inherit; cursor:pointer; border:none; background:none; }

.header { position:sticky; top:0; z-index:50; display:flex; align-items:center; gap:32px;
  padding:10px 40px; background:#fff; border-bottom:1px solid #ddd; }
.logo { font-size:18px; line-height:1.1; font-weight:500; }
.nav { display:flex; gap:28px; font-size:14px; font-weight:600; }
.nav a:hover, .nav a.active { color:var(--navy); text-decoration:underline; }
.header-right { margin-left:auto; display:flex; align-items:center; gap:18px; }
.search { display:flex; align-items:center; background:var(--gray); border-radius:20px; padding:4px 10px; }
.search input { border:none; background:transparent; outline:none; width:160px; font-size:13px; }
.icon-btn { position:relative; display:flex; align-items:center; color:#111; }
.cart-btn { background:#ddd; border-radius:8px; padding:5px; }
.cart-count { position:absolute; top:-6px; right:-8px; background:var(--navy); color:#fff;
  font-size:10px; border-radius:10px; padding:1px 5px; }
.currency { position:relative; }
.currency-btn { background:var(--gray); border-radius:6px; padding:4px 8px; font-size:13px; font-weight:600; }
.currency-menu { display:none; position:absolute; right:0; top:110%; list-style:none; background:#fff;
  border:1px solid #ddd; border-radius:6px; box-shadow:0 4px 12px rgba(0,0,0,.1); overflow:hidden; }
.currency-menu.open { display:block; }
.currency-menu li { padding:8px 16px; font-size:13px; cursor:pointer; white-space:nowrap; }
.currency-menu li:hover { background:var(--gray); }

.hero { position:relative; height:380px; overflow:hidden; background:var(--navy); }
.slides { display:flex; height:100%; transition:transform .6s ease; }
.slide { min-width:100%; display:flex; align-items:center; justify-content:center; color:#e9edf6;
  font-family:"Brush Script MT","Segoe Script",cursive; font-size:64px; letter-spacing:2px; }
.slide:nth-child(2) { background:var(--navy-dark); }
.slide:nth-child(3) { background:var(--navy-light); }
.dots { position:absolute; bottom:16px; left:50%; transform:translateX(-50%); display:flex; gap:6px; }
.dot { width:8px; height:8px; border-radius:50%; background:rgba(255,255,255,.5); cursor:pointer; }
.dot.active { background:#fff; }

.section { padding:30px 40px 60px; }
.section-title { display:flex; align-items:center; gap:10px; font-size:15px; font-weight:700; margin-bottom:24px; }
.back-btn { font-size:20px; }
.grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:40px; }
.card { text-align:center; }
.card .img { transition:transform .3s; cursor:pointer; }
.card:hover .img { transform:translateY(-6px); }
.card h4 { font-size:13px; font-weight:500; margin-top:10px; }
.card .price { font-size:13px; color:#666; margin:4px 0 10px; }
.empty { color:#777; }
.btn { background:var(--navy); color:#fff; padding:8px 20px; border-radius:4px; font-size:13px; }
.btn:hover { background:var(--navy-dark); }

.auth-page { min-height:calc(100vh - 60px); background:var(--navy); display:flex; align-items:center;
  justify-content:center; padding:40px 16px; }
.auth-card { width:100%; max-width:380px; padding:36px 28px; border:1px solid rgba(255,255,255,.35);
  border-radius:10px; color:#fff; }
.auth-card h2 { text-align:center; font-weight:500; font-size:18px; margin-bottom:20px; color:#c9d3e8; }
.auth-card label { display:block; font-size:12px; margin:12px 0 4px; }
.auth-card input { width:100%; padding:10px; border:none; border-radius:4px; background:#3b5588; color:#fff; outline:none; }
.auth-card input:focus { box-shadow:0 0 0 2px #8fa6d6; }
.auth-card .error { color:#ffb3b3; font-size:12px; min-height:16px; margin-top:6px; }
.auth-card .continue { display:block; margin:16px auto 6px; background:var(--navy-dark); }
.forgot { display:block; text-align:center; font-size:11px; margin-bottom:18px; }
.forgot:hover { text-decoration:underline; }
.socials { display:flex; flex-wrap:wrap; gap:10px; justify-content:center; }
.social { display:flex; align-items:center; gap:8px; background:#fff; color:#111; padding:6px 12px;
  border-radius:4px; font-size:12px; }
.social:hover { background:#eee; }

.drawer { position:fixed; top:0; right:-360px; width:340px; height:100%; background:#fff; z-index:100;
  display:flex; flex-direction:column; transition:right .3s; box-shadow:-4px 0 12px rgba(0,0,0,.15); }
.drawer.open { right:0; }
.drawer-head, .drawer-foot { padding:16px; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; }
.drawer-foot { border-top:1px solid #eee; border-bottom:none; }
.drawer-list { flex:1; overflow-y:auto; list-style:none; padding:8px 16px; }
.drawer-list li { display:flex; align-items:center; gap:10px; padding:10px 0; border-bottom:1px solid #f2f2f2; font-size:13px; }
.drawer-list li .info { flex:1; }
.qty button { width:22px; height:22px; background:var(--gray); border-radius:4px; }
.close { font-size:24px; line-height:1; }
.overlay { position:fixed; inset:0; background:rgba(0,0,0,.4); z-index:90; display:none; }
.overlay.open { display:block; }

.chat-btn { position:fixed; left:20px; bottom:20px; z-index:60; width:46px; height:46px; border-radius:50%;
  background:#ddd; color:#333; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(0,0,0,.2); }
.chat-box { position:fixed; left:20px; bottom:76px; z-index:60; width:300px; background:#fff; border-radius:10px;
  box-shadow:0 4px 20px rgba(0,0,0,.2); display:none; flex-direction:column; overflow:hidden; }
.chat-box.open { display:flex; }
.chat-head { background:var(--navy); color:#fff; padding:10px 14px; display:flex; justify-content:space-between; align-items:center; font-size:14px; }
.chat-head .close { color:#fff; }
.chat-body { height:240px; overflow-y:auto; padding:12px; display:flex; flex-direction:column; gap:8px; }
.msg { max-width:80%; padding:8px 10px; border-radius:8px; font-size:13px; }
.msg.bot { background:var(--gray); align-self:flex-start; }
.msg.user { background:var(--navy); color:#fff; align-self:flex-end; }
.chat-form { display:flex; border-top:1px solid #eee; }
.chat-form input { flex:1; border:none; padding:10px; outline:none; }
.chat-form .btn { border-radius:0; }

.toast { position:fixed; bottom:24px; left:50%; transform:translateX(-50%) translateY(100px); background:#111;
  color:#fff; padding:10px 18px; border-radius:6px; font-size:13px; transition:transform .3s; z-index:200; }
.toast.show { transform:translateX(-50%) translateY(0); }

@media (max-width:768px) {
  .header { flex-wrap:wrap; padding:10px 16px; gap:12px; }
  .nav { order:3; width:100%; }
  .search input { width:90px; }
  .section { padding:20px 16px 60px; }
  .slide { font-size:40px; }
  .hero { height:240px; }
}`;

const styleTag = document.createElement("style");
styleTag.textContent = css;
document.head.appendChild(styleTag);
document.title = "Lights Hope";

// ================= Icons =================
const icons = {
  search: `<svg viewBox="0 0 24 24" width="18" height="18"><circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="15" y1="15" x2="21" y2="21" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 7h12l-1 14H7L6 7z" fill="currentColor"/><path d="M9 7a3 3 0 0 1 6 0" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
  user: `<svg viewBox="0 0 24 24" width="22" height="22"><circle cx="12" cy="7" r="5" fill="currentColor"/><path d="M2 23c0-6 4-9 10-9s10 3 10 9z" fill="currentColor"/></svg>`,
  chat: `<svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.4 1.3 4.5 3.4 6L4 21l4.6-2.3c1.1.3 2.2.4 3.4.4 5.5 0 10-3.6 10-8s-4.5-8-10-8z" fill="currentColor"/><circle cx="8" cy="11" r="1.3" fill="#fff"/><circle cx="12" cy="11" r="1.3" fill="#fff"/><circle cx="16" cy="11" r="1.3" fill="#fff"/></svg>`,
  google: `<svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-4z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C41.4 35.2 44 30 44 24c0-1.3-.1-2.7-.4-4z"/></svg>`,
  facebook: `<svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1877F2"/><path d="M13.5 19v-6h2l.3-2.4h-2.3V9.1c0-.7.2-1.2 1.2-1.2h1.2V5.8c-.2 0-1-.1-1.8-.1-1.8 0-3 1.1-3 3.1v1.8H9v2.4h2.1v6z" fill="#fff"/></svg>`,
  apple: `<svg width="16" height="18" viewBox="0 0 24 24"><path fill="#000" d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8s2 .8 3.4.8c1.4 0 2.3-1.3 3.2-2.5 1-1.4 1.4-2.8 1.4-2.9 0 0-2.8-1.1-2.8-4.1zM13.8 4.9c.7-.9 1.2-2.1 1.1-3.3-1 0-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.2 1.1.1 2.3-.6 3-1.5z"/></svg>`,
};

// ================= Build the page layout =================
document.body.innerHTML = `
  <header class="header">
    <a href="#/" class="logo">Lights<br />Hope</a>
    <nav class="nav">
      <a href="#/streetwear">Streetwear</a>
      <a href="#/new">New collection</a>
    </nav>
    <div class="header-right">
      <div class="search">
        <input type="text" id="searchInput" placeholder="Search ..." />
        <button id="searchBtn" aria-label="Search">${icons.search}</button>
      </div>
      <button class="icon-btn cart-btn" id="cartBtn" aria-label="Cart">
        ${icons.cart}<span class="cart-count" id="cartCount">0</span>
      </button>
      <a href="#/signin" class="icon-btn" aria-label="Account">${icons.user}</a>
      <div class="currency">
        <button class="currency-btn" id="currencyBtn">
          <span id="currencyLabel">LAK</span> <span id="currencyFlag">🇱🇦</span>
        </button>
        <ul class="currency-menu" id="currencyMenu">
          <li data-cur="LAK">LAK 🇱🇦</li>
          <li data-cur="THB">THB 🇹🇭</li>
          <li data-cur="USD">USD 🇺🇸</li>
        </ul>
      </div>
    </div>
  </header>

  <main id="app"></main>

  <aside class="drawer" id="cartDrawer">
    <div class="drawer-head"><h3>Your cart</h3><button class="close" id="closeCart">&times;</button></div>
    <ul class="drawer-list" id="cartList"></ul>
    <div class="drawer-foot">
      <p>Total: <strong id="cartTotal">0</strong></p>
      <button class="btn" id="checkoutBtn">Checkout</button>
    </div>
  </aside>
  <div class="overlay" id="overlay"></div>

  <button class="chat-btn" id="chatBtn" aria-label="Chat">${icons.chat}</button>
  <div class="chat-box" id="chatBox">
    <div class="chat-head">Lights Hope Support <button class="close" id="closeChat">&times;</button></div>
    <div class="chat-body" id="chatBody"><div class="msg bot">Hi! How can we help you today?</div></div>
    <form class="chat-form" id="chatForm">
      <input type="text" id="chatInput" placeholder="Type a message..." autocomplete="off" />
      <button class="btn" type="submit">Send</button>
    </form>
  </div>

  <div class="toast" id="toast"></div>
`;

// ================= Data =================
const products = [
  { id: 1, name: "Lights Hope Jersey Navy", price: 15, category: "streetwear", color: "#1c2a44" },
  { id: 2, name: "Lights Hope Jersey Classic", price: 15, category: "streetwear", color: "#22324f" },
  { id: 3, name: "Lights Hope Jersey Night", price: 15, category: "streetwear", color: "#18243b" },
  { id: 4, name: "Lights Hope Jersey Blue", price: 18, category: "new", color: "#1f3a6e" },
  { id: 5, name: "Lights Hope Jersey Black", price: 18, category: "new", color: "#151515" },
  { id: 6, name: "Lights Hope Jersey Steel", price: 20, category: "new", color: "#3a4a63" },
];

// Exchange rates (base: USD)
const currencies = {
  USD: { rate: 1, symbol: "$", flag: "🇺🇸", decimals: 2 },
  THB: { rate: 36, symbol: "฿", flag: "🇹🇭", decimals: 0 },
  LAK: { rate: 21500, symbol: "₭", flag: "🇱🇦", decimals: 0 },
};

// ================= State =================
let currency = localStorage.getItem("lh_currency") || "LAK";
let cart = JSON.parse(localStorage.getItem("lh_cart") || "[]");
let searchTerm = "";
let sliderTimer = null;

const $ = (sel) => document.querySelector(sel);
const app = $("#app");

// ================= Helpers =================
function formatPrice(usd) {
  const c = currencies[currency];
  return c.symbol + (usd * c.rate).toLocaleString("en-US", {
    minimumFractionDigits: c.decimals,
    maximumFractionDigits: c.decimals,
  });
}

function jerseySVG(color, size = 160) {
  return `
  <svg class="img" width="${size}" height="${size}" viewBox="0 0 200 200">
    <path d="M60 25 L85 15 Q100 30 115 15 L140 25 L185 55 L165 95 L145 85 L145 185 L55 185 L55 85 L35 95 L15 55 Z"
          fill="${color}" stroke="#0d1424" stroke-width="2"/>
    <path d="M85 15 Q100 30 115 15 L108 40 L92 40 Z" fill="#0d1424"/>
    <line x1="100" y1="40" x2="100" y2="185" stroke="#cfd6e4" stroke-width="2" stroke-dasharray="2 6"/>
    <path d="M60 25 L15 55 M140 25 L185 55" stroke="#cfd6e4" stroke-width="2"/>
    <text x="100" y="105" text-anchor="middle" font-family="Brush Script MT, cursive" font-size="26" fill="#e9edf6">Lights</text>
  </svg>`;
}

function showToast(text) {
  const t = $("#toast");
  t.textContent = text;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 2000);
}

function saveCart() {
  localStorage.setItem("lh_cart", JSON.stringify(cart));
  renderCart();
}

// ================= Pages =================
function productGrid(list) {
  const filtered = list.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
  if (!filtered.length) return `<p class="empty">No products found.</p>`;
  return `<div class="grid">${filtered.map((p) => `
    <div class="card">
      ${jerseySVG(p.color)}
      <h4>${p.name}</h4>
      <p class="price">${formatPrice(p.price)}</p>
      <button class="btn add-btn" data-id="${p.id}">Add to cart</button>
    </div>`).join("")}</div>`;
}

function homePage() {
  const slides = ["THE NEW BRAND", "STREETWEAR", "NEW COLLECTION", "LIGHTS HOPE", "SHOP NOW"];
  return `
    <section class="hero">
      <div class="slides" id="slides">${slides.map((s) => `<div class="slide">${s}</div>`).join("")}</div>
      <div class="dots" id="dots"></div>
    </section>
    <section class="section">
      <div class="section-title">All products</div>
      ${productGrid(products)}
    </section>`;
}

function categoryPage(title, category) {
  return `
    <section class="section">
      <div class="section-title"><a href="#/" class="back-btn" aria-label="Back">&larr;</a> ${title}</div>
      ${productGrid(products.filter((p) => p.category === category))}
    </section>`;
}

function signInPage() {
  return `
    <section class="auth-page">
      <form class="auth-card" id="loginForm" novalidate>
        <h2>Sign in to Lights Hope</h2>
        <label for="username">User name</label>
        <input id="username" type="text" autocomplete="username" />
        <label for="password">Password</label>
        <input id="password" type="password" autocomplete="current-password" />
        <p class="error" id="loginError"></p>
        <button class="btn continue" type="submit">Continue</button>
        <a href="#" class="forgot" id="forgot">Forgot your password?</a>
        <div class="socials">
          <button type="button" class="social" data-provider="Google">${icons.google} Login with Google</button>
          <button type="button" class="social" data-provider="Facebook">${icons.facebook} Login with Facebook</button>
          <button type="button" class="social" data-provider="Apple">${icons.apple} Login with Apple ID</button>
        </div>
      </form>
    </section>`;
}

// ================= Router =================
const routes = {
  "/": homePage,
  "/streetwear": () => categoryPage("Streetwear", "streetwear"),
  "/new": () => categoryPage("New collection", "new"),
  "/signin": signInPage,
};

function render() {
  const path = location.hash.replace("#", "") || "/";
  clearInterval(sliderTimer);
  app.innerHTML = (routes[path] || homePage)();

  document.querySelectorAll(".nav a").forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === "#" + path)
  );

  if (path === "/" || !routes[path]) initSlider();
  if (path === "/signin") initLogin();
  bindAddButtons();
  window.scrollTo(0, 0);
}

// ================= Slider =================
function initSlider() {
  const slides = $("#slides");
  const dotsBox = $("#dots");
  const count = slides.children.length;
  let index = 0;

  dotsBox.innerHTML = Array.from({ length: count },
    (_, i) => `<span class="dot${i === 0 ? " active" : ""}" data-i="${i}"></span>`).join("");

  function go(i) {
    index = (i + count) % count;
    slides.style.transform = `translateX(-${index * 100}%)`;
    dotsBox.querySelectorAll(".dot").forEach((d, n) => d.classList.toggle("active", n === index));
  }
  function restart() {
    clearInterval(sliderTimer);
    sliderTimer = setInterval(() => go(index + 1), 4000);
  }

  dotsBox.addEventListener("click", (e) => {
    if (e.target.dataset.i !== undefined) { go(+e.target.dataset.i); restart(); }
  });
  restart();
}

// ================= Login =================
function initLogin() {
  const form = $("#loginForm");
  const error = $("#loginError");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = $("#username").value.trim();
    const pass = $("#password").value;
    if (!user || !pass) return (error.textContent = "Please enter your user name and password.");
    if (pass.length < 6) return (error.textContent = "Password must be at least 6 characters.");
    error.textContent = "";
    localStorage.setItem("lh_user", user);
    showToast(`Welcome, ${user}!`);
    location.hash = "#/";
  });

  $("#forgot").addEventListener("click", (e) => {
    e.preventDefault();
    showToast("Password reset link sent to your email.");
  });

  form.querySelectorAll(".social").forEach((btn) =>
    btn.addEventListener("click", () => showToast(`Logging in with ${btn.dataset.provider}...`))
  );
}

// ================= Cart =================
function bindAddButtons() {
  document.querySelectorAll(".add-btn").forEach((btn) =>
    btn.addEventListener("click", () => {
      const id = +btn.dataset.id;
      const item = cart.find((c) => c.id === id);
      item ? item.qty++ : cart.push({ id, qty: 1 });
      saveCart();
      showToast("Added to cart");
    })
  );
}

function renderCart() {
  $("#cartCount").textContent = cart.reduce((n, c) => n + c.qty, 0);

  const list = $("#cartList");
  list.innerHTML = !cart.length
    ? `<li class="empty">Your cart is empty.</li>`
    : cart.map((c) => {
        const p = products.find((x) => x.id === c.id);
        return `
          <li>
            ${jerseySVG(p.color, 50)}
            <div class="info">${p.name}<br /><small>${formatPrice(p.price)}</small></div>
            <div class="qty">
              <button data-act="dec" data-id="${p.id}">-</button> ${c.qty}
              <button data-act="inc" data-id="${p.id}">+</button>
            </div>
          </li>`;
      }).join("");

  const total = cart.reduce((sum, c) => sum + products.find((p) => p.id === c.id).price * c.qty, 0);
  $("#cartTotal").textContent = formatPrice(total);
}

$("#cartList").addEventListener("click", (e) => {
  const { act, id } = e.target.dataset;
  if (!act) return;
  const item = cart.find((c) => c.id === +id);
  item.qty += act === "inc" ? 1 : -1;
  cart = cart.filter((c) => c.qty > 0);
  saveCart();
});

function toggleCart(open) {
  $("#cartDrawer").classList.toggle("open", open);
  $("#overlay").classList.toggle("open", open);
}
$("#cartBtn").addEventListener("click", () => toggleCart(true));
$("#closeCart").addEventListener("click", () => toggleCart(false));
$("#overlay").addEventListener("click", () => toggleCart(false));
$("#checkoutBtn").addEventListener("click", () => {
  if (!cart.length) return showToast("Your cart is empty");
  cart = [];
  saveCart();
  toggleCart(false);
  showToast("Thank you for your order!");
});

// ================= Currency =================
function setCurrency(cur) {
  currency = cur;
  localStorage.setItem("lh_currency", cur);
  $("#currencyLabel").textContent = cur;
  $("#currencyFlag").textContent = currencies[cur].flag;
  render();
  renderCart();
}

$("#currencyBtn").addEventListener("click", (e) => {
  e.stopPropagation();
  $("#currencyMenu").classList.toggle("open");
});
$("#currencyMenu").addEventListener("click", (e) => {
  if (e.target.dataset.cur) setCurrency(e.target.dataset.cur);
  $("#currencyMenu").classList.remove("open");
});
document.addEventListener("click", () => $("#currencyMenu").classList.remove("open"));

// ================= Search =================
function doSearch() {
  searchTerm = $("#searchInput").value.trim();
  if (location.hash === "#/signin") location.hash = "#/";
  else render();
}
$("#searchInput").addEventListener("input", doSearch);
$("#searchBtn").addEventListener("click", doSearch);

// ================= Chat =================
$("#chatBtn").addEventListener("click", () => $("#chatBox").classList.toggle("open"));
$("#closeChat").addEventListener("click", () => $("#chatBox").classList.remove("open"));
$("#chatForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = $("#chatInput");
  const text = input.value.trim();
  if (!text) return;
  const body = $("#chatBody");
  const msg = document.createElement("div");
  msg.className = "msg user";
  msg.textContent = text;
  body.appendChild(msg);
  input.value = "";
  body.scrollTop = body.scrollHeight;
  setTimeout(() => {
    body.insertAdjacentHTML("beforeend", `<div class="msg bot">Thanks for your message! Our team will reply soon.</div>`);
    body.scrollTop = body.scrollHeight;
  }, 700);
});

// ================= Start =================
window.addEventListener("hashchange", render);
setCurrency(currency);
