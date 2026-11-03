document.querySelector('.menu').onclick=()=>document.querySelector('.nav ul').classList.toggle('open');
document.querySelectorAll('.nav ul a').forEach(a=>a.onclick=()=>document.querySelector('.nav ul').classList.remove('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal,.haki').forEach(el=>io.observe(el));
const hk=document.querySelector('.haki');new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&hk.classList.add('on'))).observe(hk);
const b=document.getElementById('bounty'),t=+b.dataset.target,s=performance.now();
(function tick(n){const p=Math.min((n-s)/2200,1);b.textContent=Math.floor(t*(1-Math.pow(1-p,3))).toLocaleString('en-US');if(p<1)requestAnimationFrame(tick)})(s);

(function(){const r=document.querySelector('.route'),p=document.getElementById('sea'),sh=document.querySelector('.ship'),sv=document.querySelector('.route-svg');
const red=matchMedia('(prefers-reduced-motion: reduce)').matches;let len=0,cur=0,tgt=0,last=0,dir=1,vert=true,W=0,H=0;
function build(){W=r.clientWidth;H=r.clientHeight;vert=H>W;let d='';const n=8;
if(vert){const a=W/2-14;d='M'+W/2+' 0';for(let i=1;i<=n;i++){const y=H*i/n,c=y-H/n/2;d+=' Q'+(W/2+(i%2?a:-a))+' '+c+' '+W/2+' '+y}}
else{const a=H/2-8;d='M0 '+H/2;for(let i=1;i<=n;i++){const x=W*i/n,c=x-W/n/2;d+=' Q'+c+' '+(H/2+(i%2?a:-a))+' '+x+' '+H/2}}
sv.setAttribute('viewBox','0 0 '+W+' '+H);p.setAttribute('d',d);len=p.getTotalLength();}
function prog(){const m=document.documentElement.scrollHeight-innerHeight;return m>0?Math.min(Math.max(scrollY/m,0),1):0}
function draw(){const L=cur*len,pt=p.getPointAtLength(L),q=p.getPointAtLength(Math.min(L+1,len)),q0=p.getPointAtLength(Math.max(L-1,0));
let ang=Math.atan2(q.y-q0.y,q.x-q0.x)*180/Math.PI;const s=sh.clientWidth;let flip=1;
if(dir<0){ang+=180;}if(Math.abs(ang%360)>90&&Math.abs(ang%360)<270){flip=-1;ang+=180}
sh.style.transform='translate('+(pt.x-s/2)+'px,'+(pt.y-s*0.75)+'px) rotate('+(ang*0.4)+'deg) scaleX('+flip+')';}
function loop(){const d=tgt-cur;if(Math.abs(d)>0.0005){cur+=red?d:d*0.12;draw();requestAnimationFrame(loop)}else{cur=tgt;draw();running=false}}
let running=false;function onS(){const n=prog();if(n!==last){dir=n>last?1:-1;last=n}tgt=n;if(!running){running=true;requestAnimationFrame(loop)}}
build();cur=tgt=last=prog();draw();addEventListener('scroll',onS,{passive:true});addEventListener('resize',()=>{build();draw()});})();
