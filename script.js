const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const products=[
 {n:'Ube Cheese Croissant',c:'croissant',img:'Ube Cheese Croissant.jpg',p:165,d:'A flaky, buttery French croissant filled with a rich purple yam cream and a molten cheese center.'},
 {n:'Ensaimada (Café-Style with Quezo de Bola)',c:'pastry',img:'Ensaimada.jpg',p:145,d:'A rich, brioche-like golden spiral pastry heavily crowned with soft butter, granulated sugar, and grated aged cheese.'},
 {n:'Matcha White Chocolate Cookie',c:'cookies',img:'Matcha White Chocolate Cookie.jpg',p:125,d:'A thick, chewy, premium soft-baked cookie loaded with earthy ceremonial-grade matcha and sweet white chocolate chunks.'},
 {n:'Almond Pain au Chocolat',c:'croissant',img:'Almond Pain au Chocolat.jpg',p:155,d:'A flaky pastry layered with chocolate and topped with toasted almond slices and powdered sugar.'},
 {n:'Burnt Basque Cheesecake Slice',c:'cake',img:'Burnt Basque Cheesecake Slice.jpg',p:185,d:'A rich, crustless, ultra-creamy slice of cheesecake with a caramelized, rustic top that is a massive staple in local third-wave cafes.'},
 {n:'Triple Dark Chocolate Fudge Brownie',c:'cookies',img:'Triple Dark Chocolate Fudge Brownie.jpg',p:135,d:'A dense, fudgy square loaded with local dark chocolate chunks and a shiny, crackled crust.'},
 {n:'Calamansi Meringue Tart',c:'cake',img:'Calamansi Meringue Tart.jpg',p:150,d:'A crisp, buttery shortcrust pastry filled with a zesty, tangy local citrus curd and topped with torched fluffy meringue peaks.'},
 {n:'Buko Pandan Kouign-Amann',c:'pastry',img:'Buko Pandan Kouign-Amann.jpg',p:160,d:'A caramelized, crispy laminated pastry fused with the sweet, aromatic flavor of young coconut and pandan.'},
 {n:'Banana Walnut Loaf Slice',c:'cake',img:'Banana Walnut Loaf Slice.jpg',p:120,d:'A moist, comforting cafe cake slice packed with sweet bananas, toasted walnuts, and a hint of cinnamon.'},
 {n:'Nutella Sea Salt Cruffin',c:'croissant',img:'Nutella Sea Salt Cruffin.jpg',p:150,d:'A hybrid of a croissant and a muffin with a spiraled, flaky exterior, rolled in sugar, and injected with rich Nutella.'},
 {n:'Sans Rival Slice',c:'cake',img:'Sans Rival Slice.jpg',p:175,d:'Layers of crisp meringue, rich French buttercream, and loads of chopped cashews.'},
 {n:'Macau-Style Egg Tart',c:'pastry',img:'Macau-Style Egg Tart.jpg',p:95,d:'A blistered, deeply caramelized, flaky puff pastry shell filled with an ultra-silky, custard center.'},
 {n:'Spanish Latte',c:'drinks',img:'Spanish Latte.jpg',p:150,d:'Currently the reigning king of local cafe culture; espresso combined with fresh milk and sweetened condensed milk for a rich, velvety finish.'},
 {n:'Sea Salt Caramel Latte',c:'drinks',img:'Sea Salt Caramel Latte.jpg',p:160,d:'An iced espresso favorite topped with a savory, fluffy sea salt cream foam.'},
 {n:'Ube Latte / Ube Dirty Matcha',c:'drinks',img:'Ube Latte.jpg',p:170,d:'A visually striking beverage layering earthy matcha or espresso over sweet, creamy purple yam milk.'},
 {n:'Iced Caffe Mocha',c:'drinks',img:'Iced Caffe Mocha.jpg',p:155,d:'A foolproof crowd-pleaser blending bold espresso, chocolate syrup, and cold milk.'},
 {n:'Vietnamese / Strong Iced Coffee (Phin-style or local Robusta brew)',c:'drinks',img:'Vietnamese Iced Coffee.jpg',p:140,d:'Deep, strong coffee blends paired with thick sweet milk, catering to those who love a heavy caffeine kick.'},
 {n:'Matcha Latte',c:'drinks',img:'Matcha Latte.jpg',p:160,d:'Universally popular, especially when paired with sweet cream cold foam or strawberry purée.'},
 {n:'Dark Mocha / Java Chip Frappé',c:'drinks',img:'Java Chip Frappe.jpg',p:175,d:'An indulgent, blended chocolate and coffee drink topped with whipped cream and chocolate drizzle.'},
 {n:'Classic Tablea Hot Chocolate',c:'drinks',img:'Tablea Hot Chocolate.jpg',p:145,d:'Made from locally sourced, traditional ground cacao tablets, offering a deep, earthy, and nostalgic sweetness.'},
 {n:'Mango Fruit Tea / Mango Lemonade',c:'drinks',img:'Mango Fruit Tea.jpg',p:135,d:'Refreshing, fruit-forward cold drinks leveraging the world-famous sweetness of Philippine mangoes.'},
 {n:'Strawberry Matcha / Berry Cheesecake Latte',c:'drinks',img:'Strawberry Matcha.jpg',p:170,d:'Trendy, dessert-inspired sweet milk drinks packed with fruity flavor profiles.'},
 {n:'Brown Sugar Fresh Milk with Pearls',c:'drinks',img:'Brown Sugar Fresh Milk with Pearls.jpg',p:155,d:'A non-coffee staple featuring dark, caramelized brown sugar streaks, fresh milk, and chewy tapioca.'},
 {n:'Classic Cold Brew (with Vanilla Sweet Cream)',c:'drinks',img:'Classic Cold Brew.jpg',p:165,d:'A smooth, low-acidity chilled brew favored by afternoon coffee-run crowds looking for a clean taste.'}
];
const cand=x=>{
  const b=x.img.replace(/\.jpg$/i,''),sep=[' - ','-','_',' ',''],o=[];
  const forms=[x.n,x.n.replace(/\s*\(.*?\)\s*/g,' ')];
  let v=[b];
  forms.forEach(f=>{sep.forEach(c=>v.push(f.replace(/\s*\/\s*/g,c)));v.push(f.split(/\s*\/\s*/)[0])});
  v=[...new Set(v.map(f=>f.replace(/\s+/g,' ').trim()))];
  v.forEach(f=>['jpg','JPG','jpeg','png','PNG','webp'].forEach(e=>o.push(f+'.'+e)));return o};
const pic=x=>`<img src="images/${encodeURI(cand(x)[0])}" alt="${x.n}" data-i="0" loading="lazy" onerror="nextImg(this)">`;
function nextImg(el){const x=products.find(p=>p.n===el.alt);if(!x){el.remove();return}
  const c=cand(x),i=+el.dataset.i+1;
  if(i>=c.length){el.onerror=null;console.warn('No image found for "'+x.n+'". Tried in images/: '+c.join(' | '));el.remove();return}
  el.dataset.i=i;el.src='images/'+encodeURI(c[i])}
const cats=[['all','All products'],['Cakes','Cakes & Tarts'],['pastry','Pastries'],['croissant','Croissants'],['cookies','Cookies & Brownies'],['drinks','Drinks']];
let filter='all';

function renderFilters(){
  $('#filters').innerHTML='<h3>Products we bake daily</h3>'+cats.map(([k,l])=>`<button data-k="${k}" aria-pressed="${k===filter}">${l}</button>`).join('');
}
function renderGrid(){
  const list=products.filter(x=>filter==='all'||x.c===filter);
  $('#grid').innerHTML=list.map(x=>`<article class="item">
    <span class="dot">${pic(x)}</span>
    <h3>${x.n}</h3><small>${x.d}</small><span class="price">₱${x.p}</span>
    <button class="pill solid" data-add="${x.n}">Add to cart</button></article>`).join('');
}
function renderAll(){renderFilters();renderGrid()}
$('#filters').addEventListener('click',e=>{const b=e.target.closest('[data-k]');if(!b)return;filter=b.dataset.k;renderAll()});

let tt;
function toast(msg,ms){const t=$('#toast');t.textContent=msg;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),ms||1800)}
$('#grid').addEventListener('click',e=>{const b=e.target.closest('[data-add]');if(b)toast(b.dataset.add+' added to your cart')});

/* any link with data-f opens the menu filtered */
document.addEventListener('click',e=>{const a=e.target.closest('[data-f]');if(!a)return;filter=a.dataset.f;renderAll();window.scrollTo(0,0)});

/* routing */
function route(){
  const h=(location.hash||'#home').slice(1);
  const id=['home','bakery','about','contact'].includes(h)?h:'home';
  $$('.page').forEach(p=>p.classList.toggle('show',p.id===id));
  $$('nav a').forEach(a=>a.classList.remove('on'));
  const cur=$$('nav a').find(a=>a.dataset.p===id&&!a.classList.contains('only-m'));
  if(cur&&!(id==='bakery'&&filter==='drinks'))cur.classList.add('on');
  $('#nav').classList.remove('open');$('#burger').setAttribute('aria-expanded','false');
  window.scrollTo(0,0);
}
window.addEventListener('hashchange',route);
$('#burger').addEventListener('click',()=>{const o=$('#nav').classList.toggle('open');$('#burger').setAttribute('aria-expanded',o)});

/* form */
$('#form').addEventListener('submit',e=>{
  e.preventDefault();
  const n=$('#n').value.trim(),em=$('#e').value.trim(),m=$('#m').value.trim();
  if(!n||!m||!/^\S+@\S+\.\S+$/.test(em)){$('#err').textContent='Please add your name, a valid email and a message.';return}
  $('#err').textContent='';e.target.reset();toast('Message sent. We’ll reply soon!',2400);
});

renderAll();route();
