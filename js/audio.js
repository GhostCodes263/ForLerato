let A,mg,on=true;
function ac(){if(!A){A=new(window.AudioContext||window.webkitAudioContext)();mg=A.createGain();mg.gain.value=.5;mg.connect(A.destination);pad()}if(A.state=='suspended')A.resume()}
function nt(f,t,d,v=.1,ty='sine'){const o=A.createOscillator(),g=A.createGain();o.type=ty;o.frequency.value=f;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.03);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(mg);o.start(t);o.stop(t+d)}
function pad(){const ch=[[196,247,294,392],[220,262,330,440],[175,220,262,349],[165,196,247,330]];let b=0;(function l(){const t=A.currentTime+.1,c=ch[b++%4];c.forEach((f,i)=>{nt(f,t+i*.6,2.6,.06);nt(f*2,t+i*.6+.3,1.6,.03)});setTimeout(l,2600)})()}
function chime(){if(!A)return;const t=A.currentTime;[880,1109,1319].forEach((f,i)=>nt(f,t+i*.08,.9,.08))}
function kick(t){const o=A.createOscillator(),g=A.createGain();o.frequency.setValueAtTime(150,t);o.frequency.exponentialRampToValueAtTime(40,t+.15);g.gain.setValueAtTime(.5,t);g.gain.exponentialRampToValueAtTime(.001,t+.2);o.connect(g);g.connect(mg);o.start(t);o.stop(t+.25)}
function togg(){on=!on;mg.gain.value=on?.5:0;document.getElementById('mute').textContent=on?'🔊':'🔇'}
