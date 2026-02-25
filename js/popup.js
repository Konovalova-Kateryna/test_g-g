const socialLinks = {
  instagram: {
    title: 'Instagram',
    body: '<p>Підписуйтесь на наш Instagram:<br><a href="https://instagram.com" target="_blank" rel="noopener" style="color:var(--accent2)">@grym.ta.grim</a></p>',
  },
  youtube: {
    title: 'YouTube',
    body: '<p>Дивіться наші відео на YouTube:<br><a href="https://youtube.com" target="_blank" rel="noopener" style="color:var(--accent2)">Гурт «Грим та Грім»</a></p>',
  },
  facebook: {
    title: 'Facebook',
    body: '<p>Стежте за новинами у Facebook:<br><a href="https://facebook.com" target="_blank" rel="noopener" style="color:var(--accent2)">facebook.com/grymtagrym</a></p>',
  },
  tickets: {
  title: 'Квитки',
  body: `
    <p>Оберіть концерт у таблиці нижче та натисніть <strong>«Замовити квиток»</strong>.</p>
    <p>Ви також можете написати нам на 
      <a href="mailto:booking@grym.ua" class="popup-link">booking@grym.ua</a>.
    </p>
  `,
},

};

export function openPopup(key) {
  const d = socialLinks[key];
  if (!d) return;
  document.getElementById('popupTitle').textContent = d.title;
  document.getElementById('popupBody').innerHTML = d.body;
  document.getElementById('mainPopup').classList.add('active');
}

export function closePopup(id) {
  document.getElementById(id).classList.remove('active');
}

export function closePopupOnBg(e) {
  if (e.target === e.currentTarget) e.currentTarget.classList.remove('active');
}

export function openMemberPopup(name, role, bio) {
  console.log("member", name)
  document.getElementById('popupTitle').textContent = `${name} — ${role}`;
  document.getElementById('popupBody').innerHTML = `<p>${bio}</p>`;
  document.getElementById('mainPopup').classList.add('active');
}

export function openTicketPopup(venue, date) {
  document.getElementById('ticketVenue').textContent = venue;
  document.getElementById('ticketDate').textContent = '📅 ' + date;
  document.getElementById('ticketSuccessMsg').classList.remove('show');
  document.getElementById('ticketForm').reset();
  clearErrors('tfg-name', 'tfg-email');
  document.getElementById('ticketPopup').classList.add('active');
}

export function openImgPopup(el) {
  const img = el.querySelector('img');
  document.getElementById('imgPopupImg').src = img.src.replace('w=400', 'w=1200');
  document.getElementById('imgPopupImg').alt = img.alt;
  document.getElementById('imgPopup').classList.add('active');
}

function clearErrors(...ids) {
  ids.forEach(id => document.getElementById(id)?.classList.remove('has-error'));
}

// ESC для закриття попапів
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['mainPopup', 'ticketPopup', 'imgPopup'].forEach(id => closePopup(id));
  }
});

// Робимо функції глобальними для onclick у HTML
window.openPopup        = openPopup;
window.closePopup       = closePopup;
window.closePopupOnBg   = closePopupOnBg;
window.openMemberPopup  = openMemberPopup;
window.openTicketPopup  = openTicketPopup;
window.openImgPopup     = openImgPopup;