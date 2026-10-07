/* Adds "sakuracat" (with a video preview) to the Vibe Coding folder.
   Include once, just before </body>:  <script src="vibe-sakuracat.js"></script>
   Needs these files next to index.html:  videos/sakuracat.mp4  videos/sakuracat-poster.jpg */
(function(){
var NAME='sakuracat',URL='https://catpybara.vercel.app/',COLOR='#e58fb0',
VIDEO='videos/sakuracat.mp4',POSTER='videos/sakuracat-poster.jpg',
DESC='A cozy desktop-style web app with a cat and a capybara, a music player, polaroids, a clock and a dock of mini apps.';
var grid=document.getElementById('grid'),pv=document.getElementById('pv');
if(!grid||!pv)return;
var still=matchMedia('(prefers-reduced-motion:reduce)').matches;
function folder(c){return'<svg viewBox="0 0 96 80" aria-hidden="true"><path d="M4 10a6 6 0 016-6h24l8 8h44a6 6 0 016 6v54a6 6 0 01-6 6H10a6 6 0 01-6-6z" fill="'+c+'" opacity=".75"/><path d="M4 26a6 6 0 016-6h76a6 6 0 016 6v46a6 6 0 01-6 6H10a6 6 0 01-6-6z" fill="'+c+'"/></svg>'}
function activeTab(){var t=document.querySelector('.tab[aria-selected="true"]');return t&&t.dataset.k}
var btn;
function select(){
 grid.querySelectorAll('.fd').forEach(function(f){f.setAttribute('aria-pressed',f===btn)});
 pv.innerHTML='<div class="shot" style="--c:'+COLOR+'55"><b>'+NAME+'</b>'
  +'<video class="ss" style="object-position:center" src="'+VIDEO+'" poster="'+POSTER+'" '+(still?'controls':'autoplay')+' muted loop playsinline preload="metadata" aria-label="Screen recording of '+NAME+'"></video></div>'
  +'<div class="pt"><h3>'+NAME+'</h3><p>'+DESC+'</p>'
  +'<a class="o" href="'+URL+'" target="_blank" rel="noopener noreferrer">Open site ↗</a> '
  +'<a class="o" style="margin-left:14px" href="'+VIDEO+'" target="_blank" rel="noopener noreferrer">Watch recording ↗</a></div>';
 pv.scrollTop=0;
 var v=pv.querySelector('video');if(v){v.muted=true;var p=v.play&&v.play();if(p&&p.catch)p.catch(function(){v.controls=true})}
}
function add(){
 if(activeTab()!=='vibe'||grid.querySelector('[data-sc]'))return;
 btn=document.createElement('button');btn.className='fd';btn.dataset.sc='1';
 btn.innerHTML=folder(COLOR)+'<span>'+NAME+'</span>';
 btn.onclick=btn.onmouseenter=btn.onfocus=select;
 grid.appendChild(btn);
}
new MutationObserver(add).observe(grid,{childList:true});
add();
})();
