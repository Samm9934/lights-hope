// =====================================================================
//  Lights Hope - website built with React + plain JavaScript (no JSX, no build step)
// =====================================================================

// ================= Styles =================
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

const styleTag = document.createElement("style");
styleTag.textContent = css;
document.head.appendChild(styleTag);

// ================= React setup (no JSX, plain JavaScript) =================
const { useState, useEffect, useRef, Fragment } = React;
const h = React.createElement;

// Render a raw SVG icon string
const Icon = ({ name }) =>
  h("span", { style: { display: "flex" }, dangerouslySetInnerHTML: { __html: icons[name] } });

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
  LAK: { rate: 21500, symbol: "₭", flag: "🇱🇦", decimals: 0 },
  THB: { rate: 36, symbol: "฿", flag: "🇹🇭", decimals: 0 },
  USD: { rate: 1, symbol: "$", flag: "🇺🇸", decimals: 2 },
};

function formatPrice(usd, currency) {
  const c = currencies[currency];
  return c.symbol + (usd * c.rate).toLocaleString("en-US", {
    minimumFractionDigits: c.decimals,
    maximumFractionDigits: c.decimals,
  });
}

// Persist state in localStorage
function useStoredState(key, initial) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : initial;
  });
  useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value]);
  return [value, setValue];
}

// Simple hash router
function useHashRoute() {
  const get = () => location.hash.replace("#", "") || "/";
  const [path, setPath] = useState(get);
  useEffect(() => {
    const onChange = () => { setPath(get()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return path;
}

// ================= Components =================
function Jersey({ color, size = 160 }) {
  return h("svg", { className: "img", width: size, height: size, viewBox: "0 0 200 200" },
    h("path", {
      d: "M60 25 L85 15 Q100 30 115 15 L140 25 L185 55 L165 95 L145 85 L145 185 L55 185 L55 85 L35 95 L15 55 Z",
      fill: color, stroke: "#0d1424", strokeWidth: 2,
    }),
    h("path", { d: "M85 15 Q100 30 115 15 L108 40 L92 40 Z", fill: "#0d1424" }),
    h("line", { x1: 100, y1: 40, x2: 100, y2: 185, stroke: "#cfd6e4", strokeWidth: 2, strokeDasharray: "2 6" }),
    h("path", { d: "M60 25 L15 55 M140 25 L185 55", stroke: "#cfd6e4", strokeWidth: 2 }),
    h("text", {
      x: 100, y: 105, textAnchor: "middle", fontFamily: "Brush Script MT, cursive", fontSize: 26, fill: "#e9edf6",
    }, "Lights")
  );
}

function Header({ path, search, setSearch, cartCount, onCart, currency, setCurrency }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const navLink = (href, label) =>
    h("a", { href: "#" + href, className: path === href ? "active" : "" }, label);

  return h("header", { className: "header" },
    h("a", { href: "#/", className: "logo" }, "Lights", h("br"), "Hope"),
    h("nav", { className: "nav" }, navLink("/streetwear", "Streetwear"), navLink("/new", "New collection")),
    h("div", { className: "header-right" },
      h("div", { className: "search" },
        h("input", {
          type: "text", placeholder: "Search ...", value: search,
          onChange: (e) => {
            setSearch(e.target.value);
            if (path === "/signin") location.hash = "#/";
          },
        }),
        h("button", { "aria-label": "Search" }, h(Icon, { name: "search" }))
      ),
      h("button", { className: "icon-btn cart-btn", "aria-label": "Cart", onClick: onCart },
        h(Icon, { name: "cart" }),
        h("span", { className: "cart-count" }, cartCount)
      ),
      h("a", { href: "#/signin", className: "icon-btn", "aria-label": "Account" }, h(Icon, { name: "user" })),
      h("div", { className: "currency" },
        h("button", {
          className: "currency-btn",
          onClick: (e) => { e.stopPropagation(); setMenuOpen(!menuOpen); },
        }, currency + " " + currencies[currency].flag),
        h("ul", { className: "currency-menu" + (menuOpen ? " open" : "") },
          Object.keys(currencies).map((cur) =>
            h("li", { key: cur, onClick: () => { setCurrency(cur); setMenuOpen(false); } },
              cur + " " + currencies[cur].flag)
          )
        )
      )
    )
  );
}

function Hero() {
  const slides = ["THE NEW BRAND", "STREETWEAR", "NEW COLLECTION", "LIGHTS HOPE", "SHOP NOW"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, [index]); // restarting timer whenever the slide changes (also after dot click)

  return h("section", { className: "hero" },
    h("div", { className: "slides", style: { transform: `translateX(-${index * 100}%)` } },
      slides.map((s) => h("div", { className: "slide", key: s }, s))
    ),
    h("div", { className: "dots" },
      slides.map((_, i) =>
        h("span", { key: i, className: "dot" + (i === index ? " active" : ""), onClick: () => setIndex(i) })
      )
    )
  );
}

function ProductGrid({ list, search, currency, onAdd }) {
  const filtered = list.filter((p) => p.name.toLowerCase().includes(search.trim().toLowerCase()));
  if (!filtered.length) return h("p", { className: "empty" }, "No products found.");
  return h("div", { className: "grid" },
    filtered.map((p) =>
      h("div", { className: "card", key: p.id },
        h(Jersey, { color: p.color }),
        h("h4", null, p.name),
        h("p", { className: "price" }, formatPrice(p.price, currency)),
        h("button", { className: "btn", onClick: () => onAdd(p.id) }, "Add to cart")
      )
    )
  );
}

function HomePage(props) {
  return h(Fragment, null,
    h(Hero),
    h("section", { className: "section" },
      h("div", { className: "section-title" }, "All products"),
      h(ProductGrid, { ...props, list: products })
    )
  );
}

function CategoryPage({ title, category, ...props }) {
  return h("section", { className: "section" },
    h("div", { className: "section-title" },
      h("a", { href: "#/", className: "back-btn", "aria-label": "Back" }, "←"), " ", title
    ),
    h(ProductGrid, { ...props, list: products.filter((p) => p.category === category) })
  );
}

function SignInPage({ toast }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!user.trim() || !pass) return setError("Please enter your user name and password.");
    if (pass.length < 6) return setError("Password must be at least 6 characters.");
    setError("");
    localStorage.setItem("lh_user", user.trim());
    toast(`Welcome, ${user.trim()}!`);
    location.hash = "#/";
  };

  const social = (provider, icon) =>
    h("button", { type: "button", className: "social", onClick: () => toast(`Logging in with ${provider}...`) },
      h(Icon, { name: icon }), ` Login with ${provider === "Apple" ? "Apple ID" : provider}`);

  return h("section", { className: "auth-page" },
    h("form", { className: "auth-card", onSubmit: submit, noValidate: true },
      h("h2", null, "Sign in to Lights Hope"),
      h("label", { htmlFor: "username" }, "User name"),
      h("input", { id: "username", type: "text", autoComplete: "username", value: user, onChange: (e) => setUser(e.target.value) }),
      h("label", { htmlFor: "password" }, "Password"),
      h("input", { id: "password", type: "password", autoComplete: "current-password", value: pass, onChange: (e) => setPass(e.target.value) }),
      h("p", { className: "error" }, error),
      h("button", { className: "btn continue", type: "submit" }, "Continue"),
      h("a", {
        href: "#", className: "forgot",
        onClick: (e) => { e.preventDefault(); toast("Password reset link sent to your email."); },
      }, "Forgot your password?"),
      h("div", { className: "socials" },
        social("Google", "google"),
        social("Facebook", "facebook"),
        social("Apple", "apple")
      )
    )
  );
}

function CartDrawer({ open, onClose, cart, setCart, currency, toast }) {
  const change = (id, delta) =>
    setCart(cart.map((c) => (c.id === id ? { ...c, qty: c.qty + delta } : c)).filter((c) => c.qty > 0));

  const total = cart.reduce((sum, c) => sum + products.find((p) => p.id === c.id).price * c.qty, 0);

  const checkout = () => {
    if (!cart.length) return toast("Your cart is empty");
    setCart([]);
    onClose();
    toast("Thank you for your order!");
  };

  return h(Fragment, null,
    h("aside", { className: "drawer" + (open ? " open" : "") },
      h("div", { className: "drawer-head" },
        h("h3", null, "Your cart"),
        h("button", { className: "close", onClick: onClose }, "×")
      ),
      h("ul", { className: "drawer-list" },
        !cart.length
          ? h("li", { className: "empty" }, "Your cart is empty.")
          : cart.map((c) => {
              const p = products.find((x) => x.id === c.id);
              return h("li", { key: c.id },
                h(Jersey, { color: p.color, size: 50 }),
                h("div", { className: "info" }, p.name, h("br"), h("small", null, formatPrice(p.price, currency))),
                h("div", { className: "qty" },
                  h("button", { onClick: () => change(c.id, -1) }, "-"),
                  " ", c.qty, " ",
                  h("button", { onClick: () => change(c.id, 1) }, "+")
                )
              );
            })
      ),
      h("div", { className: "drawer-foot" },
        h("p", null, "Total: ", h("strong", null, formatPrice(total, currency))),
        h("button", { className: "btn", onClick: checkout }, "Checkout")
      )
    ),
    h("div", { className: "overlay" + (open ? " open" : ""), onClick: onClose })
  );
}

function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([{ from: "bot", text: "Hi! How can we help you today?" }]);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, open]);

  const send = (e) => {
    e.preventDefault();
    const msg = text.trim();
    if (!msg) return;
    setMessages((m) => [...m, { from: "user", text: msg }]);
    setText("");
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: "Thanks for your message! Our team will reply soon." }]);
    }, 700);
  };

  return h(Fragment, null,
    h("button", { className: "chat-btn", "aria-label": "Chat", onClick: () => setOpen(!open) }, h(Icon, { name: "chat" })),
    h("div", { className: "chat-box" + (open ? " open" : "") },
      h("div", { className: "chat-head" },
        "Lights Hope Support",
        h("button", { className: "close", onClick: () => setOpen(false) }, "×")
      ),
      h("div", { className: "chat-body", ref: bodyRef },
        messages.map((m, i) => h("div", { key: i, className: "msg " + m.from }, m.text))
      ),
      h("form", { className: "chat-form", onSubmit: send },
        h("input", {
          type: "text", placeholder: "Type a message...", autoComplete: "off",
          value: text, onChange: (e) => setText(e.target.value),
        }),
        h("button", { className: "btn", type: "submit" }, "Send")
      )
    )
  );
}

function Toast({ message }) {
  return h("div", { className: "toast" + (message ? " show" : "") }, message);
}

// ================= App =================
function App() {
  const path = useHashRoute();
  const [currency, setCurrency] = useStoredState("lh_currency_v2", "LAK");
  const [cart, setCart] = useStoredState("lh_cart", []);
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const toastTimer = useRef(null);

  const toast = (msg) => {
    setToastMsg(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastMsg(""), 2000);
  };

  const addToCart = (id) => {
    setCart((prev) => {
      const found = prev.find((c) => c.id === id);
      return found
        ? prev.map((c) => (c.id === id ? { ...c, qty: c.qty + 1 } : c))
        : [...prev, { id, qty: 1 }];
    });
    toast("Added to cart");
  };

  const shared = { search, currency, onAdd: addToCart };
  let page;
  if (path === "/streetwear") page = h(CategoryPage, { ...shared, title: "Streetwear", category: "streetwear" });
  else if (path === "/new") page = h(CategoryPage, { ...shared, title: "New collection", category: "new" });
  else if (path === "/signin") page = h(SignInPage, { toast });
  else page = h(HomePage, shared);

  return h(Fragment, null,
    h(Header, {
      path, search, setSearch, currency, setCurrency,
      cartCount: cart.reduce((n, c) => n + c.qty, 0),
      onCart: () => setCartOpen(true),
    }),
    h("main", null, page),
    h(CartDrawer, { open: cartOpen, onClose: () => setCartOpen(false), cart, setCart, currency, toast }),
    h(Chat),
    h(Toast, { message: toastMsg })
  );
}

// ================= Start =================
ReactDOM.createRoot(document.getElementById("root")).render(h(App));
