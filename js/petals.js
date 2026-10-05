const cv=document.getElementById('petals'),x=cv.getContext('2d');let ps=[];
function rs(){cv.width=innerWidth;cv.height=innerHeight}rs();onresize=rs;
function petal(y,n){for(let i=0;i<(n||1);i++)ps.push({x:Math.random()*cv.width,y:y??-20,r:5+Math.random()*7,vy:.6+Math.random()*1.2,vx:(Math.random()-.5)*.8,a:Math.random()*6,s:.02+Math.random()*.04,al:.8})}
function spray(px,py,n){for(let i=0;i<n;i++){const a=Math.random()*6.28,v=2+Math.random()*5;ps.push({x:px,y:py,r:5+Math.random()*7,vy:Math.sin(a)*v,vx:Math.cos(a)*v,a:0,s:.1,al:1,g:.1})}}
setInterval(()=>petal(),700);
(function l(){x.clearRect(0,0,cv.width,cv.height);ps=ps.filter(p=>p.y<cv.height+20&&p.al>.03);ps.forEach(p=>{p.x+=p.vx+Math.sin(p.a)*.6;p.y+=p.vy;if(p.g){p.vy+=p.g;p.al-=.012}p.a+=p.s;x.globalAlpha=p.al;x.fillStyle='#c1121f';x.beginPath();x.ellipse(p.x,p.y,p.r,p.r*1.6,p.a,0,6.28);x.fill()});requestAnimationFrame(l)})();
