document.getElementById('yr').textContent=new Date().getFullYear();
document.querySelector('.menu').onclick=()=>document.querySelector('.nav ul').classList.toggle('open');
document.querySelectorAll('.nav ul a').forEach(a=>a.onclick=()=>document.querySelector('.nav ul').classList.remove('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal,.haki').forEach(el=>io.observe(el));
const hk=document.querySelector('.haki');new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&hk.classList.add('on'))).observe(hk);
const b=document.getElementById('bounty'),t=+b.dataset.target,s=performance.now();
(function tick(n){const p=Math.min((n-s)/2200,1);b.textContent=Math.floor(t*(1-Math.pow(1-p,3))).toLocaleString('en-US');if(p<1)requestAnimationFrame(tick)})(s);
