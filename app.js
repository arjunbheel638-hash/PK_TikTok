const videos = [
  {user:"@village_boy_786", desc:"Gaon ki subah ka maza hi kuch aur hai 🌾 #village #paktok #desi", music:"Original Sound - Village Vibes", likes:"12.3K", img:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800"},
  {user:"@desi_foodie_pk", desc:"Aaj Desi Chicken Handi banayi 😋 Full recipe chahiye? Comment karo! #food #pakistani", music:"Punjabi Tadka - Trending", likes:"45.7K", img:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800"},
  {user:"@truck_art_pk", desc:"PK Truck Art ka kamaal 🇵🇰❤️ #truckart #pakistan", music:"Truck Horn Bass Mix", likes:"89.1K", img:"https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800"},
  {user:"@mountain_girl", desc:"Hunza Valley views 😍 #hunza #mountains #travel", music:"Nature Sounds", likes:"102K", img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"}
];

const feed = document.getElementById('feed');

videos.forEach(v => {
  feed.innerHTML += `
  <div class="card">
    <img src="${v.img}">
    <div class="right">
      <div class="icon"><div class="profile" style="background-image:url(https://i.pravatar.cc/100?u=${v.user})"><div class="follow-btn" onclick="follow(this)">+</div></div></div>
      <div class="icon" onclick="like(this)"><div class="heart">🤍</div><b>${v.likes}</b></div>
      <div class="icon" onclick="openComments()"><div style="font-size:30px">💬</div><b>2.4K</b></div>
      <div class="icon" onclick="openShare()"><div style="font-size:30px">↗️</div><b>Share</b></div>
      <div class="icon"><div style="width:40px;height:40px;border-radius:50%;background:#333;display:flex;align-items:center;justify-content:center">🎵</div></div>
    </div>
    <div class="bottom">
      <b>${v.user}</b>
      <p>${v.desc}</p>
      <div class="music">♫ ${v.music}</div>
    </div>
  </div>`;
});

function like(el){
  const h = el.querySelector('.heart');
  h.classList.toggle('liked');
  h.innerHTML = h.classList.contains('liked') ? '❤️' : '🤍';
  if(h.classList.contains('liked')){
    h.style.transform='scale(1.5)';
    setTimeout(()=>h.style.transform='scale(1)',200);
  }
}
function follow(btn){btn.innerHTML='✓'; btn.style.background='#fff'; btn.style.color='#000';}
function openComments(){
  document.getElementById('commentList').innerHTML = `
    <div class="comment"><b>@ali_hyder:</b> MashAllah Zabardast ❤️🔥</div>
    <div class="comment"><b>@sana_pk:</b> Village life is best life 🌾</div>
    <div class="comment"><b>@imran:</b> PK Zindabad 🇵🇰</div>`;
  document.getElementById('commentPanel').classList.add('show');
}
function openShare(){document.getElementById('sharePanel').classList.add('show');}
function closeAll(){document.querySelectorAll('.panel').forEach(p=>p.classList.remove('show'));}
function addComment(){
  const inp = document.getElementById('commentInput');
  if(!inp.value.trim()) return;
  const div = document.createElement('div');
  div.className='comment';
  div.innerHTML = `<b>@you:</b> ${inp.value}`;
  document.getElementById('commentList').appendChild(div);
  inp.value='';
}
function shareCopy(){navigator.clipboard.writeText(window.location.href); alert('Link Copied! ✅'); closeAll();}
function shareWA(){window.open('https://wa.me/?text=' + encodeURIComponent(window.location.href)); closeAll();}
