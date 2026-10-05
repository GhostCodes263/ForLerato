const $=i=>document.getElementById(i);
function enter(){ac();chime();$('intro').classList.add('gone');$('mute').style.display='block';spray(innerWidth/2,innerHeight/2,60);document.body.style.overflow='auto'}
document.body.style.overflow='hidden';$('from').textContent=FROM;
$('moods').innerHTML=MOODS.map((m,i)=>`<button class="mood" onclick="mood(${i})">${m[0]}<small>${m[1]}</small></button>`).join('');
function mood(i){$('mo').textContent=MOODS[i][2];chime();spray(innerWidth/2,300,15)}
let br=true;setInterval(()=>{br=!br;$('bub').classList.toggle('in',!br);$('bub').textContent=br?'Breathe out':'Breathe in'},4000);
$('env').innerHTML=OPEN.map((o,i)=>`<button class="env" onclick="op(this,${i})">💌<br>${o[0]}</button>`).join('');
function op(b,i){b.classList.add('open');b.innerHTML='<b>'+OPEN[i][0]+'</b><br>'+OPEN[i][1];chime();spray(innerWidth/2,innerHeight/2,20)}
let rn=0;function plant(e){const g=$('garden'),r=g.getBoundingClientRect(),s=document.createElement('span');s.textContent='🌹';s.style.left=(e.clientX-r.left-18)+'px';s.style.bottom=(10+Math.random()*60)+'px';g.appendChild(s);chime();$('gr').textContent=COMPS[rn++%COMPS.length]+' 🌹 ×'+rn}
$('gal').innerHTML=CAP.map((c,i)=>`<figure><img src="assets/images/l${i+1}.jpg" alt=""><figcaption>${c}</figcaption></figure>`).join('');
let fv=null;$('fl').innerHTML=Object.keys(FLAV).map(k=>`<button class="opt" onclick="pick(this,'${k}')">${k}</button>`).join('');
function pick(b,k){fv=k;document.querySelectorAll('#fl .opt').forEach(o=>o.classList.remove('on'));b.classList.add('on');$('glass').style.filter='drop-shadow(0 0 16px '+FLAV[k]+')';chime()}
function shake(){if(!fv){$('sk').textContent='Pick a flavour first 😉';return}const g=$('glass');g.classList.add('sh');setTimeout(()=>{g.classList.remove('sh');g.textContent='🥤';$('sk').textContent=fv+' milkshake ready! Our next date, it’s on me. 💖';spray(innerWidth/2,innerHeight/2,30);chime()},1000)}
const N=[262,294,330,392,440,523,587,659];
$('pads').innerHTML=N.map((f,i)=>`<button class="pad" onclick="ac();nt(${f},A.currentTime,.9,.15,'triangle')">${['💃','🕺','🎶','✨','🌹','💖','🥤','🎵'][i]}</button>`).join('');
function party(){ac();$('dancers').classList.add('go');const t=A.currentTime+.05;for(let i=0;i<32;i++){kick(t+i*.5);if(i%2)nt(N[(i*3)%8],t+i*.5+.25,.4,.12,'square')}spray(innerWidth/2,innerHeight/2,80);petal(-20,40);setTimeout(()=>$('dancers').classList.remove('go'),16000)}
let ji=0;function joke(){$('jk').textContent=JOKES[ji++%JOKES.length];chime()}
let ci=0;function comp(){$('cp').textContent=COMPS[ci++%COMPS.length];chime();spray(innerWidth/2,innerHeight/2,12)}
$('pr').innerHTML=['I will listen when you’re ready','I will always be on your side','I will make you laugh','I will celebrate you daily','I will love you through hard days'].map(t=>`<div class="env open" style="width:100%">🌹 ${t}</div>`).join('');
function hug(){$('hg').textContent='Hug delivered. Squeezing back tight. 🤗💖';chime();spray(innerWidth/2,innerHeight/2,100);petal(-20,40)}
