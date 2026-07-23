// Abadir Market - Main App
// Nothing fancy, just works.

// --- State ---
const getCart = () => JSON.parse(localStorage.getItem('abadir_cart')) || {};

const saveCart = (cart) => {
  localStorage.setItem('abadir_cart', JSON.stringify(cart));
  updateBadge();
};

// --- Badge ---
const updateBadge = () => {
  const el = document.getElementById('badge-count');
  if (!el) return;
  
  const total = Object.values(getCart()).reduce((a, b) => a + b, 0);
  el.textContent = total;
  el.style.display = total > 0 ? 'inline-flex' : 'none';
};

// --- Product Count ---
const updateProductCount = (count) => {
  const el = document.getElementById('product-count');
  if (el) {
    el.textContent = `${count} item${count !== 1 ? 's' : ''}`;
  }
};

// --- Render Shop ---
const renderShop = (items) => {
  const container = document.getElementById('product-grid');
  if (!container) return;
  
  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 80px 24px;">
        <p style="color: var(--text-muted); font-size: 1.1rem;">No matches found.</p>
        <p style="color: var(--text-light); font-size: 0.9rem; margin-top: 8px;">Try a different search term.</p>
      </div>
    `;
    updateProductCount(0);
    return;
  }
  
  container.innerHTML = items.map((p, i) => `
    <article class="product-card" style="animation: fade-in 0.4s ease ${i * 0.05}s both;">
      <div class="product-image-wrapper">
        <img src="${p.img}" alt="${p.name}" class="product-image" loading="lazy">
        <span class="product-category-badge">${p.category}</span>
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <div class="product-meta">
          <span class="product-price">${p.price.toFixed(2)} <span>ETB</span></span>
          <button class="btn-add" onclick="addToCart('${p.id}', this)" aria-label="Add to basket">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `).join('');
  
  updateProductCount(items.length);
};

// --- Search & Filter ---
const handleSearch = (input) => {
  const term = input.value.toLowerCase().trim();
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(term) || 
    p.category.toLowerCase().includes(term)
  );
  renderShop(filtered);
};

const filterProducts = (category) => {
  // Update pills
  document.querySelectorAll('.pill').forEach(pill => {
    pill.classList.remove('active');
    const pillCategory = pill.textContent.toLowerCase().trim();
    if ((category === '' && pillCategory.includes('everything')) ||
        (category !== '' && pillCategory.includes(category))) {
      pill.classList.add('active');
    }
  });
  
  const filtered = category === '' 
    ? products 
    : products.filter(p => p.category.toLowerCase() === category);
  
  renderShop(filtered);
  
  // Scroll to products
  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// --- Add to Cart ---
const addToCart = (id, btn) => {
  const cart = getCart();
  cart[id] = (cart[id] || 0) + 1;
  saveCart(cart);
  
  // Button feedback
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  `;
  btn.style.background = '#16a34a';
  
  setTimeout(() => {
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    `;
    btn.style.background = '';
  }, 1000);
};

// --- Cart Page ---
let extrasTotal = 0;

const renderCart = () => {
  const cart = getCart();
  const container = document.getElementById('cart-container');
  if (!container) return;
  
  const ids = Object.keys(cart);
  const summary = document.querySelector('.cart-summary');
  
  if (ids.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <h3>Your basket is empty</h3>
        <p>Time to fix that.</p>
        <a href="index.html" class="btn-checkout" style="max-width: 280px; margin: 24px auto 0;">Browse products</a>
      </div>
    `;
    if (summary) {
      summary.style.opacity = '0.5';
      summary.style.pointerEvents = 'none';
    }
    updateTotals(0);
    return;
  }
  
  if (summary) {
    summary.style.opacity = '1';
    summary.style.pointerEvents = 'auto';
  }
  
  let subtotal = 0;
  
  container.innerHTML = ids.map(id => {
    const p = products.find(x => x.id === id);
    if (!p) return '';
    
    const qty = cart[id];
    const itemTotal = p.price * qty;
    subtotal += itemTotal;
    
    return `
      <div class="cart-item">
        <img src="${p.img}" alt="${p.name}" class="cart-item-image">
        <div class="cart-item-details">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">${p.price.toFixed(2)} ETB each</div>
        </div>
        <div class="cart-item-actions">
          <div class="quantity-control">
            <button class="qty-btn" onclick="changeQty('${id}', -1)">−</button>
            <span class="qty-value">${qty}</span>
            <button class="qty-btn" onclick="changeQty('${id}', 1)">+</button>
          </div>
          <div class="cart-item-total">${itemTotal.toFixed(2)} ETB</div>
          <button class="remove-btn" onclick="removeItem('${id}')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
  
  updateTotals(subtotal);
};

const updateTotals = (subtotal) => {
  const subtotalEl = document.getElementById('subtotal-amount');
  const totalEl = document.getElementById('final-total');
  const taxEl = document.getElementById('tax-display');
  const extrasRow = document.querySelector('.extras-row');
  const extrasEl = document.getElementById('extras-amount');
  
  if (subtotalEl) subtotalEl.textContent = `${subtotal.toFixed(2)} ETB`;
  
  const total = subtotal + extrasTotal;
  if (totalEl) totalEl.textContent = `${total.toFixed(2)} ETB`;
  
  if (extrasRow) {
    extrasRow.style.display = extrasTotal > 0 ? 'flex' : 'none';
  }
  if (extrasEl) extrasEl.textContent = `${extrasTotal.toFixed(2)} ETB`;
  
  if (taxEl && subtotal > 0) {
    const tax = subtotal - (subtotal / 1.12);
    taxEl.textContent = `Includes 12% VAT: ${tax.toFixed(2)} ETB`;
  } else if (taxEl) {
    taxEl.textContent = '';
  }
};

const changeQty = (id, delta) => {
  const cart = getCart();
  cart[id] += delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart(cart);
  renderCart();
};

const removeItem = (id) => {
  const cart = getCart();
  delete cart[id];
  saveCart(cart);
  renderCart();
};

// --- Extras ---
const setupExtras = () => {
  const ecoBag = document.getElementById('eco-bag');
  const priority = document.getElementById('priority');
  
  const updateExtras = () => {
    extrasTotal = 0;
    if (ecoBag?.checked) extrasTotal += 15;
    if (priority?.checked) extrasTotal += 50;
    
    const subtotal = Object.entries(getCart()).reduce((sum, [id, qty]) => {
      const p = products.find(x => x.id === id);
      return sum + (p ? p.price * qty : 0);
    }, 0);
    
    updateTotals(subtotal);
  };
  
  ecoBag?.addEventListener('change', updateExtras);
  priority?.addEventListener('change', updateExtras);
};

// --- Payment Modal ---
let serverOtp = 0;
let currentStep = 1;

const openModal = () => {
  if (Object.keys(getCart()).length === 0) {
    showToast('Your basket is empty');
    return;
  }
  
  const modal = document.getElementById('modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Reset
  currentStep = 1;
  updateSteps();
  document.getElementById('view-phone').style.display = 'block';
  document.getElementById('view-otp').style.display = 'none';
  document.getElementById('view-success').style.display = 'none';
  document.getElementById('input-phone').value = '';
  document.querySelectorAll('.otp-digit').forEach(input => input.value = '');
  
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
    step.classList.remove('active', 'completed');
    if (idx + 1 < currentStep) step.classList.add('completed');
    if (idx + 1 === currentStep) step.classList.add('active');
  });
};

const formatPhoneInput = (el) => {
  // Remove non-digits
  el.value = el.value.replace(/\D/g, '');
  // Limit to 9 digits
  if (el.value.length > 9) el.value = el.value.slice(0, 9);
};

const sendOtp = () => {
  const phone = document.getElementById('input-phone').value;
  if (phone.length < 9) {
    showToast('Enter a valid phone number');
    return;
  }
  
  const btn = document.getElementById('btn-get');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  
  setTimeout(() => {
    btn.textContent = 'Send code';
    btn.disabled = false;
    
    serverOtp = Math.floor(10000 + Math.random() * 90000);
    
    // Show fake SMS
    showTelebirrSms(serverOtp);
    
    // Move to next step
    currentStep = 2;
    updateSteps();
    document.getElementById('view-phone').style.display = 'none';
    document.getElementById('view-otp').style.display = 'block';
    document.getElementById('phone-display').textContent = '+251 ' + phone;
    
    // Focus first OTP input
    setTimeout(() => document.querySelector('.otp-digit')?.focus(), 100);
  }, 800);
};

// --- Fake Telebirr SMS ---
const showTelebirrSms = (code) => {
  const container = document.getElementById('sms-container');
  
  const sms = document.createElement('div');
  sms.className = 'sms-notification';
  sms.innerHTML = `
    <div class="sms-header">
      <div class="sms-app-icon">📱</div>
      <div class="sms-sender-info">
        <div class="sms-sender">Telebirr</div>
        <div class="sms-time">now</div>
      </div>
    </div>
    <div class="sms-body">
      Your Telebirr verification code is <strong>${code}</strong>. Valid for 5 minutes. Do not share this code with anyone.
    </div>
  `;
  
  container.appendChild(sms);
  
  // Play subtle notification sound (optional, using Audio API)
  // const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmFgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
  // audio.volume = 0.3;
  // audio.play().catch(() => {});
  
  // Remove after 8 seconds
  setTimeout(() => {
    sms.style.animation = 'sms-slide-out 0.3s ease forwards';
    setTimeout(() => sms.remove(), 300);
  }, 8000);
};

// Add slide-out animation
const smsStyle = document.createElement('style');
smsStyle.textContent = `
  @keyframes sms-slide-out {
    to {
      opacity: 0;
      transform: translateX(100px);
    }
  }
`;
document.head.appendChild(smsStyle);

// --- OTP Input Handling ---
const setupOtpInputs = () => {
  const inputs = document.querySelectorAll('.otp-digit');
  
  inputs.forEach((input, idx) => {
    input.addEventListener('input', (e) => {
      // Only allow numbers
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 1);
      
      // Move to next input
      if (e.target.value && idx < inputs.length - 1) {
        inputs[idx + 1].focus();
      }
      
      // Auto-submit on last digit
      if (idx === inputs.length - 1 && e.target.value) {
        const code = Array.from(inputs).map(i => i.value).join('');
        if (code.length === 5) {
          setTimeout(() => verifyOtp(code), 200);
        }
      }
    });
    
    input.addEventListener('keydown', (e) => {
      // Backspace to previous
      if (e.key === 'Backspace' && !e.target.value && idx > 0) {
        inputs[idx - 1].focus();
      }
    });
    
    input.addEventListener('paste', (e) => {
      e.preventDefault();
      const paste = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 5);
      paste.split('').forEach((char, i) => {
        if (inputs[i]) inputs[i].value = char;
      });
      if (inputs[paste.length - 1]) inputs[paste.length - 1].focus();
    });
  });
};

const verifyOtp = (code) => {
  const userCode = code || Array.from(document.querySelectorAll('.otp-digit')).map(i => i.value).join('');
  
  if (parseInt(userCode) !== serverOtp) {
    showToast('Wrong code. Try again.');
    document.querySelectorAll('.otp-digit').forEach(i => {
      i.style.borderColor = '#dc2626';
      setTimeout(() => i.style.borderColor = '', 500);
    });
    return;
  }
  
  // Success
  currentStep = 3;
  updateSteps();
  document.getElementById('view-otp').style.display = 'none';
  document.getElementById('view-success').style.display = 'block';
  
  const total = document.getElementById('final-total').textContent;
  document.getElementById('paid-amount').textContent = total;
  
  // Generate random ref
  document.getElementById('ref-number').textContent = '#ABD-' + Math.floor(10000 + Math.random() * 90000);
  
  // Clear cart
  localStorage.removeItem('abadir_cart');
  updateBadge();
};

const resendCode = () => {
  document.querySelector('.btn-text').textContent = 'Sending...';
  setTimeout(() => {
    serverOtp = Math.floor(10000 + Math.random() * 90000);
    showTelebirrSms(serverOtp);
    document.querySelector('.btn-text').textContent = "Didn't get it? Resend";
    showToast('New code sent');
  }, 1000);
};

// --- Toast Notification ---
const showToast = (message) => {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(-100px);
    background: #1a1a1a;
    color: white;
    padding: 12px 24px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 500;
    z-index: 1000;
    opacity: 0;
    transition: all 0.3s ease;
  `;
  
  document.body.appendChild(toast);
  
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(-100px)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
};

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  updateBadge();
  
  if (document.getElementById('product-grid')) {
    renderShop(products);
  }
  
  if (document.getElementById('cart-container')) {
    renderCart();
    setupExtras();
    setupOtpInputs();
  }
  
  // Close modal on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
