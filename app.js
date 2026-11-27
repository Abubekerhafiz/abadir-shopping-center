// Abadir Supermarket — Main App
// Cart, search, filters and the Telebirr demo checkout.

// --- State ---
const getCart = () => JSON.parse(localStorage.getItem('abadir_cart')) || {};

const saveCart = (cart) => {
  localStorage.setItem('abadir_cart', JSON.stringify(cart));
  updateBadge();
};

const catLabel = (id) => (CATEGORIES.find(c => c.id === id) || {}).label || id;
const findProduct = (id) => products.find(p => p.id === id);

// --- Badge ---
const updateBadge = () => {
  const el = document.getElementById('badge-count');
  if (!el) return;

  const total = Object.values(getCart()).reduce((a, b) => a + b, 0);
  el.textContent = total;
  el.classList.toggle('show', total > 0);
};

// --- Category tiles + filter chips ---
const renderCategories = () => {
  const grid = document.getElementById('cat-grid');
  const row = document.getElementById('filter-row');
  const active = currentCategory;

  if (grid) {
    grid.innerHTML = CATEGORIES.map(c => `
      <button class="cat-tile${c.id === active ? ' active' : ''}" onclick="filterProducts('${c.id}')" aria-pressed="${c.id === active}">
        <span class="cat-emoji" style="background:${c.tint}" aria-hidden="true">${c.emoji}</span>
        <span class="cat-name">${c.label}</span>
      </button>
    `).join('');
  }

  if (row) {
    row.innerHTML = CATEGORIES.map(c => `
      <button class="chip${c.id === active ? ' active' : ''}" onclick="filterProducts('${c.id}')" aria-pressed="${c.id === active}">
        <span aria-hidden="true">${c.emoji}</span> ${c.label}
      </button>
    `).join('');
  }
};

// --- Product card ---
const priceHtml = (p) => p.was
  ? `<span class="price"><span class="price-was">${p.was.toFixed(2)}</span> ${p.price.toFixed(2)} <small>ETB</small></span>`
  : `<span class="price">${p.price.toFixed(2)} <small>ETB</small></span>`;

const footHtml = (p) => {
  const qty = getCart()[p.id] || 0;
  if (qty === 0) {
    return `
      ${priceHtml(p)}
      <button class="btn-add" onclick="addToCart('${p.id}')" aria-label="Add ${p.name} to basket">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>`;
  }
  return `
    ${priceHtml(p)}
    <span class="qty-mini">
      <button onclick="changeQty('${p.id}', -1)" aria-label="Remove one">−</button>
      <span>${qty}</span>
      <button onclick="changeQty('${p.id}', 1)" aria-label="Add one">+</button>
    </span>`;
};

const cardHtml = (p) => `
  <article class="card" data-id="${p.id}">
    <div class="card-media">
      ${p.img
        ? `<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'${p.emoji}'}))">`
        : `<span aria-hidden="true">${p.emoji}</span>`}
      ${p.was ? `<span class="card-sale">−${Math.round((1 - p.price / p.was) * 100)}%</span>` : ''}
    </div>
    <div class="card-body">
      <h3 class="card-name">${p.name}</h3>
      <div class="card-foot" data-foot="${p.id}">${footHtml(p)}</div>
    </div>
  </article>`;

// --- Search & filter ---
let currentCategory = 'all';
let currentSearch = '';

const PAGE_SIZE = 24;
let visibleCount = PAGE_SIZE;

const renderShop = () => {
  const container = document.getElementById('product-grid');
  if (!container) return;

  const term = currentSearch.toLowerCase();
  const items = products.filter(p =>
    (currentCategory === 'all' || p.category === currentCategory) &&
    (!term || p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term) || catLabel(p.category).toLowerCase().includes(term))
  );

  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="es-icon" aria-hidden="true">🧺</div>
        <h3>No matches found</h3>
        <p>Try a different search term or category.</p>
      </div>`;
  } else {
    const shown = items.slice(0, visibleCount);
    container.innerHTML = shown.map(cardHtml).join('');

    if (items.length > shown.length) {
      container.insertAdjacentHTML('beforeend', `
        <div class="show-more-wrap">
          <button class="show-more" onclick="showMore()">
            Show more <span>${items.length - shown.length} left</span>
          </button>
        </div>`);
    }
  }

  const count = document.getElementById('product-count');
  if (count) count.textContent = `${items.length} item${items.length !== 1 ? 's' : ''}`;
};

const showMore = () => {
  visibleCount += PAGE_SIZE;
  renderShop();
};

const filterProducts = (category) => {
  currentCategory = category;
  visibleCount = PAGE_SIZE;
  renderCategories();
  renderShop();
  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// --- Cart operations ---
const refreshFoot = (id) => {
  const p = findProduct(id);
  const foot = document.querySelector(`[data-foot="${id}"]`);
  if (p && foot) foot.innerHTML = footHtml(p);
};

const addToCart = (id, btn) => {
  const cart = getCart();
  cart[id] = (cart[id] || 0) + 1;
  saveCart(cart);
  refreshFoot(id);
  showToast('Added to basket');
};

const changeQty = (id, delta) => {
  const cart = getCart();
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart(cart);

  if (document.getElementById('product-grid')) refreshFoot(id);
  if (document.getElementById('cart-container')) renderCart();
};

const removeItem = (id) => {
  const cart = getCart();
  delete cart[id];
  saveCart(cart);
  renderCart();
};

// --- Cart page ---
let extrasTotal = 0;

const cartSubtotal = () =>
  Object.entries(getCart()).reduce((sum, [id, qty]) => {
    const p = findProduct(id);
    return sum + (p ? p.price * qty : 0);
  }, 0);

const renderCart = () => {
  const cart = getCart();
  const container = document.getElementById('cart-container');
  if (!container) return;

  const ids = Object.keys(cart);
  const checkoutBtn = document.getElementById('checkout-btn');
  const extras = document.getElementById('cart-extras');

  if (ids.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="ce-icon" aria-hidden="true">🛒</div>
        <h3>Your basket is empty</h3>
        <p>Time to fix that.</p>
        <a href="index.html" class="btn btn-primary">Browse products</a>
      </div>`;
    if (extras) extras.hidden = true;
    if (checkoutBtn) checkoutBtn.disabled = true;
    updateTotals(0);
    const c = document.getElementById('items-count');
    if (c) c.textContent = '';
    return;
  }

  if (extras) extras.hidden = false;
  if (checkoutBtn) checkoutBtn.disabled = false;

  let subtotal = 0;

  container.innerHTML = ids.map(id => {
    const p = findProduct(id);
    if (!p) return '';

    const qty = cart[id];
    const itemTotal = p.price * qty;
    subtotal += itemTotal;

    return `
      <div class="cart-row">
        <div class="cart-thumb" aria-hidden="true">${p.img ? `<img src="${p.img}" alt="">` : p.emoji}</div>
        <div class="cart-info">
          <div class="cart-name">${p.name}</div>
          <div class="cart-unit">${p.price.toFixed(2)} ETB each</div>
        </div>
        <div class="cart-controls">
          <div class="qty">
            <button onclick="changeQty('${id}', -1)" aria-label="Decrease quantity">−</button>
            <span class="qty-n">${qty}</span>
            <button onclick="changeQty('${id}', 1)" aria-label="Increase quantity">+</button>
          </div>
          <div class="cart-line-total">${itemTotal.toFixed(2)} ETB</div>
          <button class="cart-remove" onclick="removeItem('${id}')">Remove</button>
        </div>
      </div>`;
  }).join('');

  const count = document.getElementById('items-count');
  const totalUnits = Object.values(cart).reduce((a, b) => a + b, 0);
  if (count) count.textContent = `${totalUnits} item${totalUnits !== 1 ? 's' : ''}`;

  updateTotals(subtotal);
};

const updateTotals = (subtotal) => {
  const subtotalEl = document.getElementById('subtotal-amount');
  const totalEl = document.getElementById('final-total');
  const extrasRow = document.getElementById('extras-row');
  const extrasEl = document.getElementById('extras-amount');
  const vatEl = document.getElementById('vat-note');

  const total = subtotal + extrasTotal;

  if (subtotalEl) subtotalEl.textContent = `${subtotal.toFixed(2)} ETB`;
  if (extrasRow) extrasRow.hidden = extrasTotal === 0;
  if (extrasEl) extrasEl.textContent = `${extrasTotal.toFixed(2)} ETB`;
  if (totalEl) totalEl.textContent = `${total.toFixed(2)} ETB`;

  if (vatEl) {
    vatEl.textContent = subtotal > 0
      ? `Includes 12% VAT: ${(subtotal - subtotal / 1.12).toFixed(2)} ETB`
      : '';
  }
};

const setupExtras = () => {
  const ecoBag = document.getElementById('eco-bag');

  const updateExtras = () => {
    extrasTotal = 0;
    if (ecoBag?.checked) extrasTotal += 15;
    updateTotals(cartSubtotal());
  };

  ecoBag?.addEventListener('change', updateExtras);
};

// --- Payment modal ---
let serverOtp = 0;
let currentStep = 1;

const setView = (name) => {
  ['phone', 'otp', 'success'].forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (el) el.hidden = v !== name;
  });
};

const openModal = () => {
  if (Object.keys(getCart()).length === 0) {
    showToast('Your basket is empty');
    return;
  }

  const modal = document.getElementById('modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  currentStep = 1;
  updateSteps();
  setView('phone');
  document.getElementById('input-phone').value = '';
  document.querySelectorAll('.otp-digit').forEach(input => {
    input.value = '';
    input.classList.remove('err');
  });

  setTimeout(() => document.getElementById('input-phone')?.focus(), 100);
};

const closeModal = () => {
  document.getElementById('modal')?.classList.remove('active');
  document.body.style.overflow = '';
};

const closeModalOnOverlay = (e) => {
  if (e.target === e.currentTarget) closeModal();
};

const updateSteps = () => {
  document.querySelectorAll('.step').forEach((step, idx) => {
    const n = idx + 1;
    step.classList.toggle('active', n === currentStep);
    step.classList.toggle('done', n < currentStep);
  });
};

const sendOtp = () => {
  const phone = document.getElementById('input-phone').value.replace(/\D/g, '');
  if (phone.length < 9) {
    showToast('Enter a valid phone number');
    return;
  }

  const btn = document.getElementById('btn-get');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Send code';
    btn.disabled = false;

    serverOtp = Math.floor(10000 + Math.random() * 90000);
    showTelebirrSms(serverOtp);

    currentStep = 2;
    updateSteps();
    setView('otp');
    document.getElementById('phone-display').textContent = '+251 ' + phone;

    setTimeout(() => document.querySelector('.otp-digit')?.focus(), 100);
  }, 800);
};

// --- Fake Telebirr SMS ---
const showTelebirrSms = (code) => {
  const container = document.getElementById('sms-container');
  if (!container) return;

  const sms = document.createElement('div');
  sms.className = 'sms-toast';
  sms.innerHTML = `
    <div class="sms-head">
      <div class="sms-app" aria-hidden="true">💬</div>
      <div>
        <div class="sms-app-name">Telebirr</div>
        <div class="sms-time">now</div>
      </div>
    </div>
    <div class="sms-body">
      Your Telebirr verification code is <span class="sms-code">${code}</span>.
      Valid for 5 minutes. Do not share this code with anyone.
    </div>`;

  container.appendChild(sms);

  setTimeout(() => {
    sms.classList.add('out');
    setTimeout(() => sms.remove(), 300);
  }, 8000);
};

// --- OTP input handling ---
const setupOtpInputs = () => {
  const inputs = document.querySelectorAll('.otp-digit');

  inputs.forEach((input, idx) => {
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 1);
      e.target.classList.remove('err');

      if (e.target.value && idx < inputs.length - 1) inputs[idx + 1].focus();

      if (idx === inputs.length - 1 && e.target.value) {
        const code = Array.from(inputs).map(i => i.value).join('');
        if (code.length === 5) setTimeout(() => verifyOtp(code), 200);
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !e.target.value && idx > 0) inputs[idx - 1].focus();
    });

    input.addEventListener('paste', (e) => {
      e.preventDefault();
      const paste = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 5);
      paste.split('').forEach((char, i) => { if (inputs[i]) inputs[i].value = char; });
      if (inputs[paste.length - 1]) inputs[paste.length - 1].focus();
    });
  });
};

const verifyOtp = (code) => {
  const userCode = code || Array.from(document.querySelectorAll('.otp-digit')).map(i => i.value).join('');

  if (parseInt(userCode) !== serverOtp) {
    showToast('Wrong code. Try again.');
    document.querySelectorAll('.otp-digit').forEach(i => {
      i.classList.add('err');
      setTimeout(() => i.classList.remove('err'), 600);
    });
    return;
  }

  currentStep = 3;
  updateSteps();
  setView('success');

  document.getElementById('paid-amount').textContent = document.getElementById('final-total').textContent;
  document.getElementById('ref-number').textContent = '#ABD-' + Math.floor(10000 + Math.random() * 90000);

  localStorage.removeItem('abadir_cart');
  updateBadge();
};

const resendCode = () => {
  const btn = document.querySelector('.text-btn');
  if (btn) {
    btn.textContent = 'Sending…';
    btn.disabled = true;
  }
  setTimeout(() => {
    serverOtp = Math.floor(10000 + Math.random() * 90000);
    showTelebirrSms(serverOtp);
    if (btn) {
      btn.textContent = "Didn't get it? Resend";
      btn.disabled = false;
    }
    showToast('New code sent');
  }, 1000);
};

// --- Toast ---
const showToast = (message) => {
  document.querySelector('.toast')?.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.setAttribute('role', 'status');

  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2200);
};

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  updateBadge();

  const stat = document.getElementById('stat-products');
  if (stat) stat.textContent = products.length;

  const search = document.getElementById('search-input');
  if (search) {
    renderCategories();
    renderShop();
    search.addEventListener('input', () => {
      currentSearch = search.value;
      visibleCount = PAGE_SIZE;
      renderShop();
    });
  }

  if (document.getElementById('cart-container')) {
    renderCart();
    setupExtras();
    setupOtpInputs();
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
