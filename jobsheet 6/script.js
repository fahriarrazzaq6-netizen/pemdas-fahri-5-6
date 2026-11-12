// 1. Animasi Skill Bars saat muncul
const fills = document.querySelectorAll('.fill');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.style.width = e.target.dataset.pct + '%'; io.unobserve(e.target); }
  });
},{threshold:0.5});
fills.forEach(f=>io.observe(f));

// 2. LOGIKA JS WAJIB: Filter Kategori Karya
const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.card');
tabs.forEach(tab=>{
  tab.addEventListener('click', ()=>{
    tabs.forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    cards.forEach(card=>{
      const match = filter === 'all' || card.dataset.cat === filter;
      card.classList.toggle('hide', !match);
    });
  });
});

// 3. LOGIKA JS WAJIB: Validasi Formulir Kontak
const form = document.getElementById('contactForm');
const msg = document.getElementById('msg');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const message = document.getElementById('cf-message').value.trim();

  if(!name || !email || !message){
    msg.textContent = '⚠️ Mohon isi semua field: Nama, Email, dan Pesan!';
    msg.style.color = 'red';
    return;
  }
  if(!email.includes('@') || !email.includes('.')){
    msg.textContent = '⚠️ Format email tidak valid!';
    msg.style.color = 'red';
    return;
  }
  msg.textContent = '✅ Pesan berhasil dikirim! Terima kasih, ' + name + '. Fahri akan segera membalas.';
  msg.style.color = 'green';
  form.reset();
});