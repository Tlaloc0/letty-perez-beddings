/* Letty Pérez Beddings — interactions */

// Número de WhatsApp para recibir pedidos (formato internacional, solo dígitos, p. ej. "5215512345678").
// Si se deja vacío, WhatsApp pedirá elegir el contacto al enviar.
const WHATSAPP_NUMBER = "";

const COLLECTIONS = { premium: "Premium Bedding", down: "Goose Down Feather", towel: "Towel Series", linen: "Ropa de cama" };

// Catálogo. Productos con `variants` muestran selector de talla.
const PRODUCTS = [
  { id: "pd", c: "premium", name: "Duvet Premium", tag: "Microfibra 400 g/m²",
    variants: [
      { k: "King", size: "280 x 240 cm", price: 2519.24, img: "pd-king" },
      { k: "Queen", size: "230 x 240 cm", price: 2016.00, img: "pd-queen" },
      { k: "Individual", size: "180 x 230 cm", price: 1653.75, img: "pd-ind" },
    ] },
  { id: "pp-king", c: "premium", name: "Almohada King Size", meta: "Microfibra 1,300 g · 50 x 90 cm", price: 655.20, img: "pp-king" },
  { id: "pp-std", c: "premium", name: "Almohada Standard", meta: "Microfibra 1,050 g · 50 x 70 cm", price: 614.88, img: "pp-std" },
  { id: "pp-euro", c: "premium", name: "Almohada Euro", meta: "Microfibra 1,200 g · 60 x 60 cm", price: 635.04, img: "pp-euro" },
  { id: "pp-accent", c: "premium", name: "Almohada Accent", meta: "Microfibra 650 g · 30 x 50 cm", price: 544.32, img: "pp-accent" },
  { id: "pp-lumbar", c: "premium", name: "Almohada Lumbar", meta: "Microfibra 900 g · 30 x 90 cm", price: 599.76, img: "pp-lumbar" },
  { id: "dd", c: "down", name: "Duvet de Plumón", tag: "50% plumón · 233 TC",
    variants: [
      { k: "King", size: "280 x 240 cm", price: 2935.30, img: "dd-king" },
      { k: "Queen", size: "230 x 240 cm", price: 2470.10, img: "dd-queen" },
    ] },
  { id: "dp-king", c: "down", name: "Almohada King de Plumón", meta: "Relleno 1,600 g · 50 x 90 cm", price: 753.48, img: "dp-king" },
  { id: "dp-std", c: "down", name: "Almohada Standard de Plumón", meta: "Relleno 1,200 g · 50 x 70 cm", price: 614.38, img: "dp-std" },
  { id: "dp-euro", c: "down", name: "Almohada Euro de Plumón", meta: "Relleno 1,200 g · 60 x 60 cm", price: 666.79, img: "dp-euro" },
  { id: "dp-accent", c: "down", name: "Almohada Accent de Plumón", meta: "Relleno 600 g · 30 x 50 cm", price: 405.72, img: "dp-accent" },
  { id: "t-full", c: "towel", name: "Toalla de cuerpo completo", meta: "Terry 600–700 GSM · 160 x 80 cm", price: 644.11, img: "t-full" },
  { id: "t-half", c: "towel", name: "Toalla de medio cuerpo", meta: "Terry 600–700 GSM · 140 x 70 cm", price: 571.54, img: "t-half" },
  { id: "t-pool", c: "towel", name: "Toalla de piscina", meta: "Rayas · 150 x 80 cm", price: 665.28, img: "t-pool" },
  { id: "t-hand", c: "towel", name: "Toalla de mano", meta: "Terry 600–700 GSM · 75 x 35 cm", price: 183.46, img: "t-hand" },
  { id: "t-face", c: "towel", name: "Toalla de cara", meta: "Terry 600–700 GSM · 33 x 33 cm", price: 112.90, img: "t-face" },
  { id: "t-mat", c: "towel", name: "Tapete de baño", meta: "Terry · 60 x 40 cm", price: 239.90, img: "t-mat" },
  // Ropa de cama: sin fotografía, se dibuja a escala con `art` y `d` (ancho, largo, alto en cm).
  { id: "lc-protector", c: "linen", art: "protector", name: "Protector de colchón", tag: "Tejido de punto",
    variants: [
      { k: "King", size: "180 x 200 x 30 cm", price: 498.96, d: [180, 200, 30] },
      { k: "Queen", size: "150 x 200 x 30 cm", price: 430.92, d: [150, 200, 30] },
      { k: "Individual", size: "120 x 200 x 30 cm", price: 385.56, d: [120, 200, 30] },
    ] },
  { id: "lc-cover", c: "linen", art: "cover", name: "Funda de duvet", tag: "100% algodón · 200 TC",
    variants: [
      { k: "King", size: "280 x 250 cm", price: 1054.87, d: [280, 250] },
      { k: "Queen", size: "230 x 240 cm", price: 858.31, d: [230, 240] },
    ] },
  { id: "lc-sheet", c: "linen", art: "sheet", name: "Sábana plana",
    variants: [
      { k: "King", size: "250 x 280 cm", price: 725.76, d: [250, 280] },
      { k: "Queen", size: "230 x 260 cm", price: 639.58, d: [230, 260] },
      { k: "Individual", size: "200 x 230 cm", price: 503.50, d: [200, 230] },
    ] },
  { id: "lc-case", c: "linen", art: "case", name: "Funda de almohada", tag: "Línea High End",
    variants: [
      { k: "King", size: "50 x 90 cm", price: 163.30, d: [90, 50] },
      { k: "Standard", size: "50 x 70 cm", price: 145.15, d: [70, 50] },
    ] },
];

// Medidas para la guía a escala (w × h en cm, horizontal).
const SIZES = {
  duvet: { scale: 1, items: [
    { n: "King", w: 280, h: 240 }, { n: "Queen", w: 230, h: 240 }, { n: "Individual", w: 180, h: 230 } ] },
  pillow: { scale: 3, items: [
    { n: "King", w: 90, h: 50 }, { n: "Lumbar", w: 90, h: 30 }, { n: "Standard", w: 70, h: 50 },
    { n: "Euro", w: 60, h: 60 }, { n: "Accent", w: 50, h: 30 } ] },
  towel: { scale: 1.6, items: [
    { n: "Cuerpo completo", w: 160, h: 80 }, { n: "Piscina", w: 150, h: 80 }, { n: "Medio cuerpo", w: 140, h: 70 },
    { n: "Mano", w: 75, h: 35 }, { n: "Tapete de baño", w: 60, h: 40 }, { n: "Cara", w: 33, h: 33 } ] },
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const money = n => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(n);
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";

/* ---------------- Shop grid ---------------- */
const grid = $("#grid");

// Dibujo de línea de la pieza, a escala dentro de su producto (todas las tallas comparten escala).
function artSVG(p, v) {
  const maxW = Math.max(...p.variants.map(x => x.d[0])), maxH = Math.max(...p.variants.map(x => x.d[1]));
  const s = Math.min(64 / maxW, 66 / maxH);
  const w = v.d[0] * s, h = v.d[1] * s, x = 50 - w / 2, y = 50 - h / 2;
  let extra = "";
  if (p.art === "protector") extra = `<rect x="${x + 3.5}" y="${y + 3.5}" width="${w - 7}" height="${h - 7}" rx="2" class="art__fine" stroke-dasharray="1.2 1.2"/>`;
  if (p.art === "sheet") extra = `<line x1="${x}" x2="${x + w}" y1="${y + 4}" y2="${y + 4}" class="art__fine"/><line x1="${x}" x2="${x + w}" y1="${y + 5.6}" y2="${y + 5.6}" class="art__fine"/>`;
  if (p.art === "cover") for (let bx = x + 5; bx < x + w - 3; bx += 6) extra += `<circle cx="${bx}" cy="${y + h - 3}" r=".8" class="art__fine"/>`;
  if (p.art === "case") extra = `<line x1="${x + w - 7}" x2="${x + w - 7}" y1="${y}" y2="${y + h}" class="art__fine"/>`;
  return `<svg class="card__art" viewBox="0 0 100 110" role="img" aria-label="${p.name} ${v.k}, ${v.size}">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${p.art === "protector" ? 3 : .6}" class="art__piece"/>${extra}
    <text x="50" y="100" text-anchor="middle" class="art__label">${v.size.replace(/ x /g, " × ")}</text></svg>`;
}

function mediaHTML(p, v) {
  return p.art ? artSVG(p, v) : `<img src="img/${v.img}.jpg" alt="${p.name}" loading="lazy">`;
}

function cardHTML(p) {
  const v = p.variants ? p.variants[0] : p;
  const meta = p.variants ? [p.tag, v.size].filter(Boolean).join(" · ") : p.meta;
  const chips = p.variants
    ? `<div class="chips" role="group" aria-label="Talla">${p.variants.map((x, i) =>
        `<button type="button" class="chip" data-v="${i}" aria-pressed="${i === 0}">${x.k}</button>`).join("")}</div>`
    : "";
  return `
  <article class="card" data-c="${p.c}" data-id="${p.id}">
    <div class="card__media${p.art ? " card__media--art" : ""}" data-cursor="Añadir">
      ${mediaHTML(p, v)}
      <span class="card__tag">${COLLECTIONS[p.c]}</span>
      <button type="button" class="card__add">Añadir a la bolsa</button>
    </div>
    <div class="card__body">
      <div class="card__row">
        <h3 class="card__name">${p.name}</h3>
        <span class="card__price">${money(v.price)}</span>
      </div>
      <p class="card__meta">${meta}</p>
      ${chips}
    </div>
  </article>`;
}

grid.innerHTML = PRODUCTS.map(cardHTML).join("");

const counts = { all: PRODUCTS.length };
PRODUCTS.forEach(p => counts[p.c] = (counts[p.c] || 0) + 1);
$("#cAll").textContent = counts.all;
$("#cPremium").textContent = counts.premium;
$("#cDown").textContent = counts.down;
$("#cTowel").textContent = counts.towel;
$("#cLinen").textContent = counts.linen;

const selected = {}; // product id -> variant index

grid.addEventListener("click", e => {
  const card = e.target.closest(".card");
  if (!card) return;
  const p = PRODUCTS.find(x => x.id === card.dataset.id);

  const chip = e.target.closest(".chip");
  if (chip) {
    const i = +chip.dataset.v; selected[p.id] = i;
    const v = p.variants[i];
    $$(".chip", card).forEach(c => c.setAttribute("aria-pressed", c === chip));
    $(".card__price", card).textContent = money(v.price);
    $(".card__meta", card).textContent = [p.tag, v.size].filter(Boolean).join(" · ");
    if (p.art) { $(".card__art", card).outerHTML = artSVG(p, v); return; }
    const img = $(".card__media img", card);
    img.style.opacity = 0;
    setTimeout(() => { img.src = `img/${v.img}.jpg`; img.onload = () => img.style.opacity = 1; }, 220);
    return;
  }
  if (e.target.closest(".card__add") || e.target.closest(".card__media")) addToBag(p, selected[p.id] || 0);
});

function setFilter(f) {
  $$(".filter").forEach(b => {
    const on = b.dataset.f === f;
    b.classList.toggle("is-active", on); b.setAttribute("aria-selected", on);
  });
  const cards = $$(".card");
  cards.forEach(c => c.hidden = !(f === "all" || c.dataset.c === f));
  if (hasGsap && !reduced) {
    gsap.fromTo(cards.filter(c => !c.hidden), { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: .7, stagger: .05, ease: "power3.out", clearProps: "transform,opacity" });
    ScrollTrigger.refresh();
  }
}
$$(".filter").forEach(b => b.addEventListener("click", () => setFilter(b.dataset.f)));
$$("[data-filter]").forEach(a => a.addEventListener("click", () => setFilter(a.dataset.filter)));

/* ---------------- Bag ---------------- */
const STORE_KEY = "lp-bag-v2"; // v2: precios actualizados
let bag = [];
try { bag = JSON.parse(localStorage.getItem(STORE_KEY)) || []; } catch (_) { bag = []; }
const save = () => { try { localStorage.setItem(STORE_KEY, JSON.stringify(bag)); } catch (_) {} };

function addToBag(p, vi) {
  const v = p.variants ? p.variants[vi] : p;
  const key = p.variants ? `${p.id}-${v.k}` : p.id;
  const name = p.variants ? `${p.name} ${v.k}` : p.name;
  const detail = p.variants ? v.size : p.meta;
  const line = bag.find(x => x.key === key);
  if (line) line.q++;
  else bag.push({ key, name, detail, price: v.price, img: v.img, pid: p.id, vi, c: p.c, q: 1 });
  save(); renderBag();
  const count = $("#bagCount");
  count.classList.remove("bump"); void count.offsetWidth; count.classList.add("bump");
  toast(`${name} añadido a tu bolsa`);
}

function renderBag() {
  const q = bag.reduce((s, x) => s + x.q, 0);
  const total = bag.reduce((s, x) => s + x.q * x.price, 0);
  $("#bagCount").textContent = q;
  $("#bagTotal").textContent = money(total);
  $("#bagEmpty").hidden = bag.length > 0;
  $("#bagFoot").hidden = bag.length === 0;
  const thumb = x => {
    const p = PRODUCTS.find(y => y.id === x.pid);
    return p && p.art ? `<span class="bag__art">${artSVG(p, p.variants[x.vi])}</span>` : `<img src="img/${x.img}.jpg" alt="">`;
  };
  $("#bagItems").innerHTML = bag.map(x => `
    <li class="bag__item" data-key="${x.key}">
      ${thumb(x)}
      <div>
        <h3>${x.name}</h3>
        <p>${COLLECTIONS[x.c]} · ${x.detail}</p>
        <div class="qty">
          <button type="button" data-a="dec" aria-label="Quitar uno">−</button>
          <span>${x.q}</span>
          <button type="button" data-a="inc" aria-label="Agregar uno">+</button>
        </div>
      </div>
      <div class="bag__line">
        <b>${money(x.q * x.price)}</b>
        <button type="button" class="bag__rm" data-a="rm">Quitar</button>
      </div>
    </li>`).join("");

  const msg = ["Hola Letty, me gustaría hacer este pedido:", ""]
    .concat(bag.map(x => `• ${x.q} × ${x.name} (${x.detail}) — ${money(x.q * x.price)}`))
    .concat(["", `Total: ${money(total)} MXN`]).join("\n");
  $("#bagSend").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

$("#bagItems").addEventListener("click", e => {
  const b = e.target.closest("button[data-a]"); if (!b) return;
  const key = b.closest(".bag__item").dataset.key;
  const i = bag.findIndex(x => x.key === key);
  if (b.dataset.a === "inc") bag[i].q++;
  if (b.dataset.a === "dec") bag[i].q--;
  if (b.dataset.a === "rm" || bag[i].q < 1) bag.splice(i, 1);
  save(); renderBag();
});

const bagEl = $("#bag"), scrim = $("#scrim");
let lastFocus = null;
function openBag() {
  lastFocus = document.activeElement;
  scrim.hidden = false; requestAnimationFrame(() => scrim.classList.add("is-on"));
  bagEl.classList.add("is-open"); bagEl.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  $("#bagClose").focus();
}
function closeBag() {
  scrim.classList.remove("is-on"); setTimeout(() => scrim.hidden = true, 500);
  bagEl.classList.remove("is-open"); bagEl.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
  if (lastFocus) lastFocus.focus();
}
$("#bagOpen").addEventListener("click", openBag);
$("#bagClose").addEventListener("click", closeBag);
$("#bagShop").addEventListener("click", closeBag);
scrim.addEventListener("click", closeBag);
addEventListener("keydown", e => { if (e.key === "Escape" && bagEl.classList.contains("is-open")) closeBag(); });

let toastT;
function toast(text) {
  const t = $("#toast"); t.textContent = text; t.classList.add("is-on");
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("is-on"), 2200);
}
renderBag();

/* ---------------- Size guide ---------------- */
const svg = $("#sizesSvg"), list = $("#sizesList"), readout = $("#sizesReadout");
let kind = "duvet", active = 0;
const NS = "http://www.w3.org/2000/svg";

function drawSizes() {
  const set = SIZES[kind], s = set.scale;
  const ox = 30, oy = 280; // bottom-left origin
  svg.innerHTML = "";
  // axis ticks every 20 / 10 cm
  const step = kind === "duvet" ? 40 : kind === "pillow" ? 10 : 20;
  const maxW = Math.max(...set.items.map(i => i.w)), maxH = Math.max(...set.items.map(i => i.h));
  for (let x = 0; x <= maxW; x += step) {
    const l = document.createElementNS(NS, "line");
    l.setAttribute("x1", ox + x * s); l.setAttribute("x2", ox + x * s); l.setAttribute("y1", oy); l.setAttribute("y2", oy + 4);
    l.setAttribute("class", "sz-tick"); svg.appendChild(l);
    const t = document.createElementNS(NS, "text");
    t.setAttribute("x", ox + x * s); t.setAttribute("y", oy + 12); t.setAttribute("text-anchor", "middle");
    t.setAttribute("class", "sz-axis"); t.textContent = x; svg.appendChild(t);
  }
  for (let y = 0; y <= maxH; y += step) {
    const t = document.createElementNS(NS, "text");
    t.setAttribute("x", ox - 5); t.setAttribute("y", oy - y * s + 2); t.setAttribute("text-anchor", "end");
    t.setAttribute("class", "sz-axis"); t.textContent = y; svg.appendChild(t);
  }
  const unit = document.createElementNS(NS, "text");
  unit.setAttribute("x", ox + maxW * s); unit.setAttribute("y", oy + 22); unit.setAttribute("text-anchor", "end");
  unit.setAttribute("class", "sz-axis"); unit.textContent = "cm"; svg.appendChild(unit);

  // draw inactive first, active last so it sits on top
  const order = set.items.map((it, i) => i).sort((a, b) => (a === active) - (b === active));
  order.forEach(i => {
    const it = set.items[i], on = i === active;
    const r = document.createElementNS(NS, "rect");
    r.setAttribute("x", ox); r.setAttribute("y", oy - it.h * s);
    r.setAttribute("width", it.w * s); r.setAttribute("height", it.h * s);
    r.setAttribute("class", "sz-rect" + (on ? " is-on" : ""));
    svg.appendChild(r);
    if (on) {
      const t = document.createElementNS(NS, "text");
      t.setAttribute("x", ox + it.w * s - 4); t.setAttribute("y", oy - it.h * s + 10); t.setAttribute("text-anchor", "end");
      t.setAttribute("class", "sz-label is-on"); t.textContent = it.n; svg.appendChild(t);
    }
  });
  const it = set.items[active];
  readout.textContent = `${it.n} · ${it.w} × ${it.h} cm · ${(it.w * it.h / 10000).toFixed(2)} m²`;
}

function renderSizeList() {
  list.innerHTML = SIZES[kind].items.map((it, i) =>
    `<li><button type="button" data-i="${i}" aria-pressed="${i === active}"><span class="n">${it.n}</span><span class="d">${it.w} × ${it.h} cm</span></button></li>`).join("");
  drawSizes();
}
list.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  active = +b.dataset.i;
  $$("button", list).forEach(x => x.setAttribute("aria-pressed", x === b));
  drawSizes();
});
$$(".seg__b").forEach(b => b.addEventListener("click", () => {
  kind = b.dataset.kind; active = 0;
  $$(".seg__b").forEach(x => { x.classList.toggle("is-active", x === b); x.setAttribute("aria-selected", x === b); });
  renderSizeList();
}));
renderSizeList();

/* ---------------- Manifesto words ---------------- */
const mani = $("#manifesto");
mani.innerHTML = mani.textContent.trim().split(/\s+/).map(w => `<span class="w">${w}</span>`).join(" ");
const words = $$(".w", mani);

/* ---------------- Nav state ---------------- */
const nav = $("#nav");
let lastY = scrollY;
addEventListener("scroll", () => {
  const y = scrollY;
  nav.classList.toggle("is-solid", y > 40);
  nav.classList.toggle("is-hidden", y > lastY && y > 400 && !bagEl.classList.contains("is-open"));
  lastY = y;
}, { passive: true });

/* ---------------- Motion ---------------- */
const loader = $("#loader");

if (!hasGsap || reduced) {
  loader.classList.add("is-done");
  document.documentElement.classList.add("no-anim");
  $$(".num__v").forEach(n => n.textContent = (+n.dataset.count).toLocaleString("es-MX"));
} else {
  gsap.registerPlugin(ScrollTrigger);

  // Preloader → hero
  const counter = { v: 0 };
  const intro = gsap.timeline();
  gsap.set(".hero .word", { yPercent: 110 });
  gsap.set(".hero__media", { clipPath: "inset(50% 50% 50% 50%)" });
  gsap.set([".hero__meta", ".hero__foot"], { opacity: 0, y: 20 });
  intro
    .to(counter, { v: 100, duration: 1.1, ease: "power2.inOut",
      onUpdate: () => $("#loaderCount").textContent = String(Math.round(counter.v)).padStart(3, "0") })
    .to(loader, { yPercent: -100, duration: .9, ease: "expo.inOut" })
    .set(loader, { display: "none" })
    .to(".hero .word", { yPercent: 0, duration: 1.2, stagger: .08, ease: "expo.out" }, "-=.45")
    .to(".hero__media", { clipPath: innerWidth > 760 ? "inset(0% 18% 0% 18%)" : "inset(0% 6% 0% 6%)", duration: 1.4, ease: "expo.inOut" }, "<.1")
    .to([".hero__meta", ".hero__foot"], { opacity: 1, y: 0, duration: .9, stagger: .1, ease: "power3.out" }, "<.5")
    .add(() => { gsap.set(".hero__media", { clearProps: "clipPath" }); setupHeroScroll(); });

  function setupHeroScroll() {
    gsap.fromTo(".hero__media", { clipPath: innerWidth > 760 ? "inset(0% 18% 0% 18%)" : "inset(0% 6% 0% 6%)" }, {
      clipPath: "inset(0% 0% 0% 0%)", ease: "none",
      scrollTrigger: { trigger: ".hero__media", start: "top 70%", end: "bottom 30%", scrub: true }
    });
    gsap.to(".hero__media img", { yPercent: -14, ease: "none",
      scrollTrigger: { trigger: ".hero__media", start: "top bottom", end: "bottom top", scrub: true } });
    gsap.to(".hero__title--ital", { xPercent: -6, ease: "none",
      scrollTrigger: { trigger: ".hero__media", start: "top 60%", end: "bottom top", scrub: true } });
  }

  // Manifesto word lighting
  ScrollTrigger.create({
    trigger: mani, start: "top 80%", end: "bottom 45%", scrub: true,
    onUpdate: self => {
      const lit = Math.round(self.progress * words.length);
      words.forEach((w, i) => w.classList.toggle("on", i < lit));
    }
  });

  // Collections — horizontal on desktop
  const mm = gsap.matchMedia();
  mm.add("(min-width: 901px)", () => {
    const track = $("#collectionsTrack");
    const dist = () => track.scrollWidth - innerWidth;
    const tween = gsap.to(track, {
      x: () => -dist(), ease: "none",
      scrollTrigger: { trigger: "#collectionsPin", pin: true, scrub: 1, end: () => "+=" + dist(), invalidateOnRefresh: true }
    });
    $$(".chapter__img img").forEach(img => {
      gsap.fromTo(img, { scale: 1.3 }, { scale: 1, ease: "none",
        scrollTrigger: { trigger: img.parentElement, containerAnimation: tween, start: "left right", end: "center center", scrub: true } });
    });
    $$(".chapter__body").forEach(b => {
      gsap.from(b.children, { y: 40, opacity: 0, stagger: .06, ease: "power3.out", duration: 1,
        scrollTrigger: { trigger: b, containerAnimation: tween, start: "left 75%" } });
    });
  });
  mm.add("(max-width: 900px)", () => {
    $$(".chapter__img img").forEach(img => gsap.fromTo(img, { scale: 1.25 }, { scale: 1, ease: "none",
      scrollTrigger: { trigger: img, start: "top bottom", end: "bottom center", scrub: true } }));
  });

  // Spreads — curtain reveal
  $$(".spread").forEach(sp => {
    const fig = $(".spread__img", sp), img = $("img", fig);
    const tl = gsap.timeline({ scrollTrigger: { trigger: sp, start: "top 75%" } });
    tl.fromTo(fig, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut" })
      .fromTo(img, { scale: 1.35 }, { scale: 1.08, duration: 1.8, ease: "expo.out" }, "<")
      .from($(".spread__text", sp).children, { y: 36, opacity: 0, duration: 1, stagger: .07, ease: "power3.out" }, "<.3");
    gsap.to(img, { yPercent: -6, ease: "none", scrollTrigger: { trigger: sp, start: "top bottom", end: "bottom top", scrub: true } });
  });

  // Numbers
  $$(".num__v").forEach(n => {
    const o = { v: 0 }, end = +n.dataset.count;
    gsap.to(o, { v: end, duration: 2, ease: "power3.out",
      scrollTrigger: { trigger: n, start: "top 85%", once: true },
      onUpdate: () => n.textContent = Math.round(o.v).toLocaleString("es-MX") });
  });

  // Shop cards and generic reveals
  ScrollTrigger.batch(".card", {
    start: "top 90%", once: true,
    onEnter: els => gsap.from(els, { y: 50, opacity: 0, duration: 1, stagger: .08, ease: "power3.out", clearProps: "transform,opacity" })
  });
  $$(".display, .eyebrow").forEach(el => {
    if (el.closest(".hero, .collections, .spread")) return;
    gsap.from(el, { y: 40, opacity: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
  });
  gsap.fromTo(".cta__img img", { scale: 1.2 }, { scale: 1, ease: "none",
    scrollTrigger: { trigger: ".cta", start: "top bottom", end: "bottom bottom", scrub: true } });
  gsap.from(".foot__word", { yPercent: 60, opacity: 0, duration: 1.4, ease: "expo.out",
    scrollTrigger: { trigger: ".foot__word", start: "top 95%" } });

  // Cursor
  if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const cur = $("#cursor"), lab = $("#cursorLabel");
    const xTo = gsap.quickTo(cur, "x", { duration: .45, ease: "power3" });
    const yTo = gsap.quickTo(cur, "y", { duration: .45, ease: "power3" });
    addEventListener("pointermove", e => { xTo(e.clientX); yTo(e.clientY); }, { passive: true });
    document.addEventListener("pointerover", e => {
      const t = e.target.closest("[data-cursor]");
      if (t && !e.target.closest("button")) { lab.textContent = t.dataset.cursor; cur.classList.add("is-on"); }
      else cur.classList.remove("is-on");
    });
  }

  addEventListener("load", () => ScrollTrigger.refresh());
}
