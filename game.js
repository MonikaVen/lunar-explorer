'use strict';
const missions=[
{id:'luna9',name:'Luna 9',year:1966,group:'early',nation:'Soviet Union',kind:'Robotic soft landing',lat:7.08,lon:-64.37,place:'Oceanus Procellarum',discovery:'First images from the lunar surface',description:'The first spacecraft to achieve a survivable soft landing on the Moon and transmit panoramic images.',q:'What made Luna 9 historic?',options:['First humans on the Moon','First successful lunar soft landing','First far-side sample return'],a:1,icon:'◈'},
{id:'surveyor1',name:'Surveyor 1',year:1966,group:'early',nation:'United States',kind:'Robotic soft landing',lat:-2.47,lon:-43.34,place:'Oceanus Procellarum',discovery:'Demonstrated safe robotic landing',description:'Surveyor 1 showed that a spacecraft could land safely on lunar soil and take surface photographs.',q:'What did Surveyor 1 help verify?',options:['The surface could support landers','The Moon has oceans','The far side is always dark'],a:0,icon:'⌑'},
{id:'apollo11',name:'Apollo 11',year:1969,group:'apollo',nation:'United States',kind:'Crewed landing',lat:.67416,lon:23.47314,place:'Sea of Tranquility',discovery:'First humans walked on the Moon',description:'Neil Armstrong and Buzz Aldrin explored the lunar surface while Michael Collins orbited above. Apollo 11 also planted the first US flag on the Moon.',photo:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Buzz_salutes_the_U.S._Flag.jpg?width=640',photoCaption:'Apollo 11 photograph of the first US flag on the Moon.',q:'Who were the two people who walked on the Moon during Apollo 11?',options:['Armstrong and Aldrin','Armstrong and Collins','Aldrin and Gagarin'],a:0,icon:'⚑'},
{id:'apollo12',name:'Apollo 12',year:1969,group:'apollo',nation:'United States',kind:'Crewed precision landing',lat:-3.0128,lon:-23.4219,place:'Oceanus Procellarum',discovery:'Precision landing near Surveyor 3',description:'Astronauts landed close to the earlier Surveyor 3 spacecraft and brought back some of its components.',q:'Which older spacecraft did Apollo 12 visit?',options:['Luna 9','Surveyor 3','Chang’e 4'],a:1,icon:'⚑'},
{id:'luna16',name:'Luna 16',year:1970,group:'apollo',nation:'Soviet Union',kind:'Robotic sample return',lat:-.68,lon:56.30,place:'Mare Fecunditatis',discovery:'First robotic lunar sample return',description:'Luna 16 drilled into lunar soil and returned material to Earth without astronauts.',q:'What made Luna 16 special?',options:['Its crew landed','It returned lunar samples robotically','It visited the far side'],a:1,icon:'◈'},
{id:'apollo14',name:'Apollo 14',year:1971,group:'apollo',nation:'United States',kind:'Crewed landing',lat:-3.64589,lon:-17.47194,place:'Fra Mauro',discovery:'Lunar highlands geology',description:'Alan Shepard and Edgar Mitchell explored Fra Mauro and collected geological samples. A US flag was planted at the site.',q:'Where did Apollo 14 land?',options:['Fra Mauro','Mare Crisium','Von Kármán'],a:0,icon:'⚑'},
{id:'apollo15',name:'Apollo 15',year:1971,group:'apollo',nation:'United States',kind:'Crewed landing + rover',lat:26.13239,lon:3.63330,place:'Hadley–Apennine',discovery:'First crewed Lunar Roving Vehicle',description:'Apollo 15 astronauts drove the first Lunar Roving Vehicle, extending their geological exploration range.',q:'What new vehicle did Apollo 15 use?',options:['A helicopter','A lunar rover','A submarine'],a:1,icon:'⚑'},
{id:'apollo16',name:'Apollo 16',year:1972,group:'apollo',nation:'United States',kind:'Crewed landing + rover',lat:-8.9734,lon:15.5011,place:'Descartes Highlands',discovery:'Explored lunar highlands using a rover',description:'John Young and Charles Duke landed in the Descartes Highlands and planted an American flag.',q:'Which lunar region did Apollo 16 investigate?',options:['Descartes Highlands','Mare Crisium','Oceanus Procellarum'],a:0,icon:'⚑'},
{id:'apollo17',name:'Apollo 17',year:1972,group:'apollo',nation:'United States',kind:'Crewed landing + rover',lat:20.1911,lon:30.7723,place:'Taurus–Littrow',discovery:'Final Apollo crewed lunar landing',description:'Apollo 17 featured geologist Harrison Schmitt and remains the most recent human landing on the Moon.',q:'What was unique about Harrison Schmitt?',options:['He was a trained geologist','He piloted the first rover','He built Surveyor 1'],a:0,icon:'⚑'},
{id:'change4',name:'Chang’e 4',year:2019,group:'modern',nation:'China',kind:'Far-side robotic landing',lat:-45.46,lon:177.59,place:'Von Kármán crater',discovery:'First soft landing on the lunar far side',description:'Chang’e 4 and the Yutu-2 rover explored the far side, using a relay spacecraft to communicate with Earth.',q:'Why did Chang’e 4 need a relay satellite?',options:['The Moon blocked a direct Earth radio link','Its rover was underwater','The near side lacks sunlight'],a:0,icon:'◇'},
{id:'chandrayaan3',name:'Chandrayaan-3',year:2023,group:'modern',nation:'India',kind:'Robotic lander + rover',lat:-69.3741,lon:32.32,place:'Southern high latitudes',discovery:'India’s first successful lunar landing',description:'Vikram landed at high southern latitude and deployed the Pragyan rover to investigate the surface.',q:'Which rover explored the surface for Chandrayaan-3?',options:['Yutu-2','Pragyan','Sojourner'],a:1,icon:'◇'},
{id:'slim',name:'SLIM',year:2024,group:'modern',nation:'Japan',kind:'Precision lunar landing',lat:-13.316,lon:25.251,place:'Shioli crater vicinity',discovery:'High-precision landing demonstration',description:'Japan’s SLIM demonstrated precision navigation, though its final landing orientation limited initial solar power.',q:'Which technology was central to SLIM?',options:['Precision landing navigation','Deep-sea sonar','Human life support'],a:0,icon:'◇'},
{id:'change6',name:'Chang’e 6',year:2024,group:'modern',nation:'China',kind:'Far-side robotic sample return',lat:-41.6385,lon:-153.9852,place:'Apollo basin',discovery:'First sample return from lunar far side',description:'Chang’e 6 collected samples on the far side and returned them to Earth for scientific analysis.',q:'What was the historic first achieved by Chang’e 6?',options:['First Moon landing','First far-side lunar sample return','First crewed far-side walk'],a:1,icon:'◇'},
{id:'blueghost',name:'Blue Ghost 1',year:2025,group:'modern',nation:'United States',kind:'Commercial robotic landing',lat:18.562,lon:61.810,place:'Mare Crisium',discovery:'Commercial science payload delivery',description:'Firefly Aerospace landed Blue Ghost in Mare Crisium and operated ten NASA science and technology payloads.',q:'What was Blue Ghost 1 delivering?',options:['Ten NASA science and technology payloads','Astronauts','A lunar train'],a:0,icon:'◇'}
];
const $=id=>document.getElementById(id), TAU=Math.PI*2;
const state={mission:'apollo11',mode:'map',visited:new Set(),answered:new Set(),achievements:new Set(),landingWins:0,roverWins:0,xp:0,proximityMission:null,openArtifact:null};
let __memoryStore={};
function safeStorageGet(key){try{return localStorage.getItem(key)}catch{return Object.prototype.hasOwnProperty.call(__memoryStore,key)?__memoryStore[key]:null}}
function safeStorageSet(key,val){try{localStorage.setItem(key,val)}catch{__memoryStore[key]=String(val)}}
try{let s=JSON.parse(safeStorageGet('lunarExplorerV1')||'{}');state.visited=new Set(s.visited||[]);state.answered=new Set(s.answered||[]);state.achievements=new Set(s.achievements||[]);state.landingWins=s.landingWins||0;state.roverWins=s.roverWins||0;}catch{}
function save(){safeStorageSet('lunarExplorerV1',JSON.stringify({visited:[...state.visited],answered:[...state.answered],achievements:[...state.achievements],landingWins:state.landingWins,roverWins:state.roverWins}));}
let toastTimer;function toast(s){$('toast').textContent=s;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),3200)}
const achievements=[{id:'observer',icon:'☾',name:'Lunar Observer',desc:'Explore 5 landing sites'},{id:'historian',icon:'✧',name:'Mission Historian',desc:'Answer 5 field questions'},{id:'pilot',icon:'⌁',name:'Lunar Pilot',desc:'Land safely'},{id:'scientist',icon:'⚗',name:'Lunar Scientist',desc:'Collect 5 surface samples'},{id:'pioneer',icon:'✦',name:'Lunar Pioneer',desc:'Explore every mission site'},{id:'explorer',icon:'✵',name:'Lunar Explorer',desc:'Earn the other five badges'}];
function award(id){if(!state.achievements.has(id)){state.achievements.add(id);toast('✦ New badge: '+achievements.find(b=>b.id===id).name);}}
function checkAwards(){if(state.visited.size>=5)award('observer');if(state.answered.size>=5)award('historian');if(state.landingWins>=1)award('pilot');if(state.roverWins>=1)award('scientist');if(state.visited.size>=missions.length)award('pioneer');if(['observer','historian','pilot','scientist','pioneer'].every(x=>state.achievements.has(x)))award('explorer');save();updateUI()}
function updateUI(){state.xp=state.visited.size*100+state.answered.size*60+state.landingWins*250+state.roverWins*250;$('score').textContent='✦ '+state.xp+' XP';$('badgeCount').textContent='◇ '+state.achievements.size+' badges';$('doneCount').textContent=state.visited.size+'/'+missions.length;$('questCount').textContent=state.answered.size+state.landingWins+state.roverWins;$('playMission').textContent='▶ Play '+missions.find(m=>m.id===state.mission).name+' challenge';$('visitBtn').textContent=state.visited.has(state.mission)?'✓ Site explored':'Mark site explored ↗';renderList();renderBadges();}
function renderList(){let list=$('missionList');list.replaceChildren();missions.filter(m=>$('era').value==='all'||m.group===$('era').value).forEach(m=>{let b=document.createElement('button');b.dataset.mid=m.id;b.className='mitem '+(state.mission===m.id?'selected ':'')+(state.proximityMission===m.id?'nearby':'');b.innerHTML=`<span class="symbol ${state.visited.has(m.id)?'complete':''}">${state.visited.has(m.id)?'✓':m.icon}</span><span><b>${m.name}</b><small>${m.year} · ${m.nation}</small></span>`;b.onclick=()=>selectMission(m.id,true);list.append(b)})}

function ensureMissionPhoto(){
 let wrap=$('missionPhotoWrap');
 if(!wrap){wrap=document.createElement('div');wrap.id='missionPhotoWrap';wrap.className='archivephoto hidden';wrap.innerHTML='<img id="missionPhoto" alt="Mission reference photo" loading="lazy"><span id="missionPhotoCaption"></span>';$('missionDesc').after(wrap);}
 return wrap;
}
function updateMissionPhoto(m){
 const wrap=ensureMissionPhoto(),img=$('missionPhoto'),cap=$('missionPhotoCaption');
 if(m.photo){wrap.classList.remove('hidden');img.src=m.photo;img.alt=m.name+' historical photo';cap.textContent=m.photoCaption||'Historical mission photo';}
 else{wrap.classList.add('hidden');img.removeAttribute('src');cap.textContent='';}
 let steps=$('missionFootstepsWrap');
 if(!steps){steps=document.createElement('div');steps.id='missionFootstepsWrap';steps.className='archivephoto hidden';steps.innerHTML='<img id="missionFootstepsImg" alt="Close-up illustration of Apollo-style lunar boot impressions"><span>First footsteps: detailed bootprint PNG reconstruction</span>';wrap.after(steps);}
 steps.classList.toggle('hidden',m.id!=='apollo11');
 if(m.id==='apollo11')$('missionFootstepsImg').src='assets/first-footsteps.png';
}
function drawNationFlag(ctx,nation,x,y,d){
 ctx.save();ctx.translate(x,y);const s=Math.max(.82,d);ctx.scale(s,s);ctx.strokeStyle='#e5eaf0';ctx.lineWidth=1.4;ctx.beginPath();ctx.moveTo(0,12);ctx.lineTo(0,-14);ctx.stroke();
 if(nation==='United States'){ctx.fillStyle='#fafafa';ctx.fillRect(1,-14,23,14);for(let k=0;k<7;k++){ctx.fillStyle=k%2===0?'#c64b4c':'#fff';ctx.fillRect(1,-14+k*2,23,2)}ctx.fillStyle='#315888';ctx.fillRect(1,-14,10,8);}
 else if(nation==='China'){ctx.fillStyle='#d23535';ctx.fillRect(1,-14,23,14);ctx.fillStyle='#ffd84f';ctx.beginPath();ctx.arc(6,-9,2.1,0,TAU);ctx.fill();}
 else if(nation==='India'){ctx.fillStyle='#f7f7f7';ctx.fillRect(1,-14,23,14);ctx.fillStyle='#ef9634';ctx.fillRect(1,-14,23,4.7);ctx.fillStyle='#3d9b4b';ctx.fillRect(1,-4.7,23,4.7);ctx.strokeStyle='#2e5fb5';ctx.lineWidth=1;ctx.beginPath();ctx.arc(12.5,-7,1.7,0,TAU);ctx.stroke();}
 else if(nation==='Japan'){ctx.fillStyle='#fbfbfb';ctx.fillRect(1,-14,23,14);ctx.fillStyle='#cf4347';ctx.beginPath();ctx.arc(12.5,-7,3.4,0,TAU);ctx.fill();}
 else {ctx.fillStyle='#fafafa';ctx.fillRect(1,-14,23,14);ctx.fillStyle='#9aa7b8';ctx.fillRect(1,-14,23,4);}
 ctx.restore();
}

function selectMission(id,turn){state.mission=id;let m=missions.find(m=>m.id===id);$('missionYear').textContent=m.year+' · '+m.nation.toUpperCase();$('missionName').textContent=m.name;$('missionType').textContent=m.kind.toUpperCase();$('missionDesc').textContent=m.description;$('missionLocation').textContent=m.place;$('missionCoords').textContent=Math.abs(m.lat).toFixed(3)+'° '+(m.lat>=0?'N':'S')+' · '+Math.abs(m.lon).toFixed(3)+'° '+(m.lon>=0?'E':'W');$('missionDiscovery').textContent=m.discovery;$('artIcon').textContent=m.icon;updateMissionPhoto(m);$('question').textContent=m.q;$('answers').replaceChildren();$('feedback').textContent=state.answered.has(id)?'✓ Correct answer already recorded':'';m.options.forEach((option,i)=>{let b=document.createElement('button');b.className='answer';b.textContent=String.fromCharCode(65+i)+'. '+option;b.disabled=state.answered.has(id);if(state.answered.has(id)&&i===m.a)b.classList.add('correct');b.onclick=()=>{if(i===m.a){state.answered.add(id);$('feedback').textContent='✓ Correct! +60 XP';selectMission(id,false);checkAwards();}else{b.classList.add('wrong');$('feedback').textContent='Not quite. Try another answer.'}};$('answers').append(b)});if(turn){rotTarget=m.lon*Math.PI/180;tiltTarget=m.lat*Math.PI/180*.28;}updateUI()}
$('playMission').onclick=()=>{const m=missions.find(x=>x.id===state.mission);const mode=(m.kind.toLowerCase().includes('rover')||m.kind.toLowerCase().includes('sample')||m.id==='apollo15'||m.id==='apollo16'||m.id==='apollo17')?'rover':'landing';setMode(mode);if(mode==='landing'){resetFlight();$('flightStatus').textContent=m.name.toUpperCase()+' · LANDING CHALLENGE';}else{resetRover();$('roverStatus').textContent=m.name+': exit the lander, board the rover, collect Moon sample rocks, land on the exact crater target, dig a soil sample, and return to base.';}toast('Mission launched: '+m.name+' · '+(mode==='landing'?'Landing lab':'Surface expedition'));};
$('visitBtn').onclick=()=>{if(!state.visited.has(state.mission)){state.visited.add(state.mission);toast('Landing site discovered · +100 XP');checkAwards();}else toast('You have already explored this site.')};$('era').onchange=renderList;
function renderBadges(){$('badgeGrid').innerHTML=achievements.map(b=>`<div class="badgeCard ${state.achievements.has(b.id)?'':'locked'}"><div class="medal">${b.icon}</div><b>${b.name}</b><small>${b.desc}</small></div>`).join('')}
function setMode(m){state.mode=m;document.querySelectorAll('.mode').forEach(b=>b.classList.toggle('active',b.dataset.mode===m));document.querySelectorAll('.view').forEach(v=>v.classList.toggle('hidden',v.id!==m+'View'));if(m==='landing'&&!flight.running&&!flight.ended)paintFlight();if(m==='rover')paintRover();if(m==='map')drawMoon();}
document.querySelectorAll('.mode').forEach(b=>b.onclick=()=>setMode(b.dataset.mode));
// Procedural lunar globe with orthographic projection and site picking
const moon=$('moonCanvas'),mc=moon.getContext('2d');let rot=0,rotTarget=0,tilt=.14,tiltTarget=.14,zoom=1,drag=false,previousX=0,previousY=0,lastProjected=[];
let showGrid=true,showFlags=true;const flags=missions.filter(m=>m.nation!=='Soviet Union');
const coord=(v,p,n)=>Math.abs(v).toFixed(4)+'° '+(v>=0?p:n);
let craters=Array.from({length:420},(_,i)=>{let u=Math.sin(i*94.37)*43758.5453;u-=Math.floor(u);let v=Math.sin(i*37.11+1)*31237.13;v-=Math.floor(v);return{lat:Math.asin(u*2-1),lon:v*TAU-Math.PI,r:2+Math.pow((i*17%97)/97,3)*28};});
// Authentic NASA LRO global color mosaic (NASA/SVS CGI Moon Kit, 2025).
// Falls back to generated relief if online imagery is unavailable or CORS is denied.
let lunarPixels=null, lunarWidth=0,lunarHeight=0, lunarFrame=0;
const lunarPhoto=new Image();lunarPhoto.crossOrigin='anonymous';
lunarPhoto.onload=()=>{try{const c=document.createElement('canvas');c.width=lunarPhoto.naturalWidth;c.height=lunarPhoto.naturalHeight;const context=c.getContext('2d',{willReadFrequently:true});context.drawImage(lunarPhoto,0,0);lunarPixels=context.getImageData(0,0,c.width,c.height).data;lunarWidth=c.width;lunarHeight=c.height;}catch(error){lunarPixels=null;console.info('Moon imagery unavailable for pixel mapping; fallback globe active.');}};
lunarPhoto.src='data:image/gif;base64,R0lGODlhAQABAAAAACw=';
const textureCanvas=document.createElement('canvas');textureCanvas.width=320;textureCanvas.height=320;const textureCtx=textureCanvas.getContext('2d');
function paintRealMoon(cx,cy,R){
 const size=320,out=textureCtx.createImageData(size,size),pix=out.data;
 const cosT=Math.cos(tilt),sinT=Math.sin(tilt),sinR=Math.sin(rot),cosR=Math.cos(rot);
 for(let yy=0;yy<size;yy++){const Y=1-(yy+.5)*2/size;for(let xx=0;xx<size;xx++){
  const X=((xx+.5)*2/size)-1,rr=X*X+Y*Y;if(rr>=1)continue;
  const Z=Math.sqrt(1-rr),lat=Math.asin(Math.max(-1,Math.min(1,Y*cosT+Z*sinT)));
  const q=Z*cosT-Y*sinT,lo=rot+Math.atan2(X,q);
  let u=((lo/(2*Math.PI)+.5)%1+1)%1,v=.5-lat/Math.PI;
  const tx=Math.min(lunarWidth-1,Math.floor(u*lunarWidth)),ty=Math.min(lunarHeight-1,Math.max(0,Math.floor(v*lunarHeight)));
  const source=(ty*lunarWidth+tx)*4, dest=(yy*size+xx)*4, light=.42+.60*Math.max(0,X*(-.38)+Y*.48+Z*.79);
  pix[dest]=lunarPixels[source]*light;pix[dest+1]=lunarPixels[source+1]*light;pix[dest+2]=lunarPixels[source+2]*light;pix[dest+3]=255;
 }}textureCtx.putImageData(out,0,0);mc.drawImage(textureCanvas,cx-R,cy-R,R*2,R*2);
}
function makeStars(count){return Array.from({length:count},()=>({x:Math.random(),y:Math.random(),a:.10+Math.random()*.55,s:.8+Math.random()*1.5}));}
let mapStars=makeStars(140),surfaceStars=makeStars(120);
function resizeCanvas(c){let r=c.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2),w=Math.max(1,Math.round(r.width*d)),h=Math.max(1,Math.round(r.height*d));if(c.width!==w||c.height!==h){c.width=w;c.height=h;}return{w,h,d}}
function sphere(lat,lon,cx,cy,R){let dl=lon-rot,cl=Math.cos(lat),x=cl*Math.sin(dl),y=Math.sin(lat)*Math.cos(tilt)-cl*Math.cos(dl)*Math.sin(tilt),z=Math.sin(lat)*Math.sin(tilt)+cl*Math.cos(dl)*Math.cos(tilt);return{x:cx+x*R,y:cy-y*R,z}}
function drawMoon(){if(state.mode!=='map')return;rot+=(rotTarget-rot)*.09;tilt+=(tiltTarget-tilt)*.09;let {w,h,d}=resizeCanvas(moon),cx=w*.49,cy=h*.49,R=Math.min(w*.35,h*.43)*zoom;mc.clearRect(0,0,w,h);mapStars.forEach(s=>{mc.fillStyle=`rgba(230,241,255,${s.a})`;mc.fillRect(s.x*w,s.y*h,s.s*d,s.s*d)});let glow=mc.createRadialGradient(cx,cy,R*.65,cx,cy,R*1.4);glow.addColorStop(0,'#8194aa55');glow.addColorStop(1,'#8194aa00');mc.fillStyle=glow;mc.beginPath();mc.arc(cx,cy,R*1.4,0,TAU);mc.fill();let grad=mc.createRadialGradient(cx-R*.3,cy-R*.35,R*.1,cx+R*.28,cy+R*.05,R*1.25);grad.addColorStop(0,'#d5d9d6');grad.addColorStop(.40,'#a8aeb0');grad.addColorStop(.75,'#676f77');grad.addColorStop(1,'#283341');mc.fillStyle=grad;mc.beginPath();mc.arc(cx,cy,R,0,TAU);mc.fill();mc.save();mc.beginPath();mc.arc(cx,cy,R,0,TAU);mc.clip();if(lunarPixels){paintRealMoon(cx,cy,R)}else craters.forEach(c=>{let p=sphere(c.lat,c.lon,cx,cy,R);if(p.z<0)return;let rr=c.r*d*zoom*(.25+.75*p.z);mc.beginPath();mc.ellipse(p.x,p.y,rr,rr*.8,0,0,TAU);mc.fillStyle='rgba(40,51,58,.20)';mc.fill();mc.strokeStyle='rgba(248,246,233,.27)';mc.lineWidth=Math.max(.6,d);mc.stroke();});for(let i=-75;showGrid&&i<=75;i+=15){mc.strokeStyle='#d2f3ff29';mc.beginPath();let started=false;for(let j=-180;j<=180;j+=2){let p=sphere(i*Math.PI/180,j*Math.PI/180,cx,cy,R);if(p.z>0){if(!started){mc.moveTo(p.x,p.y);started=true}else mc.lineTo(p.x,p.y)}else started=false}mc.stroke()}if(showGrid){for(let j=-180;j<180;j+=30){mc.beginPath();let open=false;for(let i=-90;i<=90;i+=2){const p=sphere(i*Math.PI/180,j*Math.PI/180,cx,cy,R);if(p.z>0){if(!open){mc.moveTo(p.x,p.y);open=true}else mc.lineTo(p.x,p.y)}else open=false;}mc.strokeStyle='#d2f3ff21';mc.lineWidth=.8*d;mc.stroke();}}mc.restore();lastProjected=[];missions.forEach(m=>{let p=sphere(m.lat*Math.PI/180,m.lon*Math.PI/180,cx,cy,R);if(p.z<.03)return;lastProjected.push({m,x:p.x,y:p.y});let chosen=m.id===state.mission,done=state.visited.has(m.id);mc.beginPath();mc.arc(p.x,p.y,(chosen?7:4)*d,0,TAU);mc.fillStyle=done?'#85f4d8':'#ffd58b';mc.fill();mc.lineWidth=chosen?3*d:1.5*d;mc.strokeStyle=chosen?'#ffffff':'#151b25';mc.stroke();if(chosen){mc.strokeStyle='#80f4df88';mc.beginPath();mc.arc(p.x,p.y,15*d,0,TAU);mc.stroke()}mc.fillStyle='#f1f6f8';mc.font=`${chosen?'bold ':''}${Math.max(10,11*d)}px system-ui`;mc.fillText(m.name,p.x+11*d,p.y-7*d)});if(showFlags){flags.forEach(m=>{const p=sphere(m.lat*Math.PI/180,m.lon*Math.PI/180,cx,cy,R);if(p.z<=.02)return;drawNationFlag(mc,m.nation,p.x+8*d,p.y-9*d,d);});} $('sideLabel').textContent=Math.cos(rot)>=0?'NEAR SIDE':'FAR SIDE';}
moon.addEventListener('pointerdown',e=>{drag=true;previousX=e.clientX;previousY=e.clientY;moon.setPointerCapture(e.pointerId)});moon.addEventListener('pointermove',e=>{if(!drag)return;let r=moon.getBoundingClientRect();rotTarget+=(e.clientX-previousX)/r.width*4;tiltTarget=Math.max(-1.2,Math.min(1.2,tiltTarget+(e.clientY-previousY)/r.height*2));previousX=e.clientX;previousY=e.clientY});moon.addEventListener('pointerup',e=>{if(!drag)return;drag=false;let r=moon.getBoundingClientRect(),x=(e.clientX-r.left)*(moon.width/r.width),y=(e.clientY-r.top)*(moon.height/r.height);let closest=lastProjected.map(p=>({...p,d:Math.hypot(p.x-x,p.y-y)})).sort((a,b)=>a.d-b.d)[0];if(closest&&closest.d<25*(moon.width/r.width))selectMission(closest.m.id,false);else{const nx=(x-moon.width*.49)/(Math.min(moon.width*.35,moon.height*.43)*zoom),ny=-(y-moon.height*.49)/(Math.min(moon.width*.35,moon.height*.43)*zoom);if(nx*nx+ny*ny<=1){const nz=Math.sqrt(Math.max(0,1-nx*nx-ny*ny)),lat=Math.asin(ny*Math.cos(tilt)+nz*Math.sin(tilt)),lon=rot+Math.atan2(nx,nz*Math.cos(tilt)-ny*Math.sin(tilt));const deg=((lon*180/Math.PI+540)%360)-180;$('cursorCoords').textContent=coord(lat*180/Math.PI,'N','S')+' · '+coord(deg,'E','W');}}});moon.addEventListener('wheel',e=>{e.preventDefault();zoom=Math.max(.75,Math.min(1.32,zoom+(e.deltaY<0?.08:-.08)))},{passive:false});$('gridToggle').onclick=()=>{showGrid=!showGrid;$('gridToggle').textContent='Grid '+(showGrid?'ON':'OFF')};$('flagToggle').onclick=()=>{showFlags=!showFlags;$('flagToggle').textContent='Flags '+(showFlags?'ON':'OFF')};$('nearBtn').onclick=()=>{rotTarget=0;tiltTarget=.14};$('farBtn').onclick=()=>{rotTarget=Math.PI;tiltTarget=.14};$('resetMap').onclick=()=>{rotTarget=0;tiltTarget=.14;zoom=1};
// Landing flight dynamics use lunar gravity in meters/sec^2; visual altitude is compressed.
const land=$('landingCanvas'),lc=land.getContext('2d');let flight={running:false,ended:false,x:0,vx:0,h:180,vy:8,fuel:100,clock:0,thrust:false,left:false,right:false,last:0};const gravity=1.62;
function resetFlight(){Object.assign(flight,{running:false,ended:false,x:-18,vx:0,h:100,vy:7,fuel:100,clock:0,thrust:false,left:false,right:false,last:0});$('flightStatus').textContent='READY TO DESCEND';$('startFlight').textContent='▶ Begin descent';paintFlight()}
function startFlight(){if(flight.ended)resetFlight();flight.running=true;flight.last=performance.now();$('startFlight').textContent='⏸ Pause descent';$('flightStatus').textContent='DESCENDING · USE THRUST TO BRAKE'}
$('startFlight').onclick=()=>{if(flight.running){flight.running=false;$('startFlight').textContent='▶ Resume descent'}else startFlight()};$('resetFlight').onclick=resetFlight;
function triggerSecretReturnAnimation(){
 if(state.mode!=='rover'||eva.returnPhase||eva.complete)return;
 eva.sampleCount=SAMPLE_ROCK_IDS.length;
 eva.craterSpot=true;
 eva.soil=true;
 eva.returnPhase='boarding';
 eva.returnTime=0;
 eva.vehicle='inside';
 eva.x=EVA_BASE;
 eva.roverX=Math.max(EVA_BASE+24, Math.min(eva.roverX,EVA_BASE+78));
 evaStatus('Samples delivered! Astronaut boarding the lander for the return flight.');
 updateSampleReveal();
 toast('Return animation shortcut activated');
}
const pressed={};window.addEventListener('keydown',e=>{if(['ArrowUp','ArrowLeft','ArrowRight','Space','ArrowDown'].includes(e.code))e.preventDefault();if(e.repeat&&['KeyE','Space','ArrowUp','KeyW'].includes(e.code))return;pressed[e.code]=true;if(state.mode==='rover'&&pressed.KeyA&&pressed.KeyN&&pressed.KeyI){triggerSecretReturnAnimation();pressed.KeyA=pressed.KeyN=pressed.KeyI=false;return;}if(state.mode==='rover'&&e.code==='KeyE'){evaInteract();pressed.KeyE=false;}else if(state.mode==='rover'&&['Space','ArrowUp','KeyW'].includes(e.code)){evaJump();}});window.addEventListener('keyup',e=>{pressed[e.code]=false});window.addEventListener('blur',()=>{Object.keys(pressed).forEach(k=>pressed[k]=false);flight.thrust=flight.left=flight.right=false;eva.buttons.left=eva.buttons.right=false});
function hold(id,key,obj){let el=$(id);el.addEventListener('pointerdown',e=>{e.preventDefault();el.setPointerCapture(e.pointerId);obj[key]=true});for(let ev of ['pointerup','pointercancel','lostpointercapture'])el.addEventListener(ev,()=>obj[key]=false)}hold('leftThrust','left',flight);hold('mainThrust','thrust',flight);hold('rightThrust','right',flight);
function terrain(x){return 18*Math.sin(x/54)+9*Math.cos(x/23)+3*Math.sin(x/9)}
function paintFlight(){
 const {w,h,d}=resizeCanvas(land); const groundY=h*.73, worldScale=Math.max(1.45*d,Math.min(3*d,w/260)), cameraX=flight.x*.10;
 lc.clearRect(0,0,w,h);let sky=lc.createLinearGradient(0,0,0,h);sky.addColorStop(0,'#060b15');sky.addColorStop(.73,'#222d3d');sky.addColorStop(1,'#626771');lc.fillStyle=sky;lc.fillRect(0,0,w,h);drawEarthInSky(lc,w/d,h/d,w/d-86,78,40);
 // Permanent visible lunar horizon with moon-surface PNG texture clipped to the terrain profile.
 lc.save();lc.beginPath();lc.moveTo(0,h);for(let sx=0;sx<=w+5;sx+=5){let wx=(sx-w*.5)/worldScale+cameraX;lc.lineTo(sx,groundY+terrain(wx)*.30*d)}lc.lineTo(w,h);lc.closePath();lc.clip();
 if(surfaceSprite.complete&&surfaceSprite.naturalWidth){const tileW=Math.max(220,Math.min(360,260*worldScale/2.1));const tileH=tileW*(surfaceSprite.naturalHeight/surfaceSprite.naturalWidth);const startTile=Math.floor((cameraX-w/worldScale)/(tileW/worldScale))-2;const endTile=Math.ceil((cameraX+w/worldScale)/(tileW/worldScale))+2;for(let i=startTile;i<=endTile;i++){const worldX=i*(tileW/worldScale);const sx=w*.5+(worldX-cameraX)*worldScale;lc.drawImage(surfaceSprite,sx,groundY-tileH*0.63,tileW,tileH);}}else{lc.fillStyle='#4d535e';lc.fillRect(0,groundY,w,h-groundY);}lc.restore();
 lc.fillStyle='#77808b';for(let i=0;i<90;i++){let wx=i*17-750;let sx=w*.5+(wx-cameraX)*worldScale;let sy=groundY+terrain(wx)*.30*d+17*d+(i*19%115)*d;if(sx>0&&sx<w&&sy<h){lc.beginPath();lc.ellipse(sx,sy,(2+i%6)*d,(1+i%3)*d,0,0,TAU);lc.fill()}}
 let padLeft=w*.5+(-29-cameraX)*worldScale,padRight=w*.5+(29-cameraX)*worldScale,padY=groundY+terrain(0)*.30*d;
 lc.fillStyle='#d8ac61';lc.fillRect(padLeft,padY-4*d,padRight-padLeft,7*d);lc.strokeStyle='#ffe3a2';lc.lineWidth=2*d;lc.strokeRect(padLeft,padY-4*d,padRight-padLeft,7*d);
 for(let side of [padLeft,padRight]){lc.strokeStyle='#ffdfa0';lc.beginPath();lc.moveTo(side,padY);lc.lineTo(side,padY-30*d);lc.stroke();lc.fillStyle='#ffeab9';lc.beginPath();lc.arc(side,padY-30*d,4*d,0,TAU);lc.fill()}
 // Altitude shown using compressed perspective so BOTH craft and ground remain on-screen.
 let px=w*.5+(flight.x-cameraX)*worldScale, altPx=Math.min(h*.51,Math.max(0,flight.h)*h*.50/100);let py=groundY+terrain(flight.x)*.30*d-altPx-24*d;
 lc.save();lc.translate(px,py);renderLanderAsset(lc,0,0,86*d,flight.running&&flight.fuel>0&&(flight.thrust||pressed.ArrowUp||pressed.KeyW));lc.restore();
 lc.save();lc.strokeStyle='#87e8d8';lc.setLineDash([5*d,6*d]);lc.beginPath();lc.moveTo(px,py+26*d);lc.lineTo(px,groundY+terrain(flight.x)*.30*d);lc.stroke();lc.restore();
 lc.save();lc.font=`${12*d}px system-ui`;lc.textAlign='center';lc.fillStyle=Math.abs(flight.x)<=29?'#94ffe1':'#ffbd95';lc.fillText(Math.abs(flight.x)<=29?'● ABOVE PAD':'◀ STEER TO PAD',px,Math.max(95*d,py-43*d));lc.restore();
 lc.font=`${11*d}px system-ui`;lc.textAlign='center';lc.fillStyle='#ffe5a8';lc.fillText('LANDING ZONE',Math.max(75,Math.min(w-75,(padLeft+padRight)/2)),Math.min(h-26*d,padY+28*d));
 if(!flight.ended)$('flightStatus').textContent=(flight.running?'DESCENDING · ':'READY · ')+flight.clock.toFixed(1)+'s · '+Math.abs(flight.x).toFixed(1)+'m '+(flight.x<0?'W':'E');
 $('alt').textContent=Math.max(0,flight.h).toFixed(0)+' m';$('vel').textContent=Math.abs(flight.vy).toFixed(1)+' m/s '+(flight.vy>=0?'↓':'↑');$('hvel').textContent=Math.abs(flight.vx).toFixed(1)+' m/s';$('fuel').textContent=flight.fuel.toFixed(0)+'%';
}
function evaluateTouchdown(f){
 const vertical=f.vy>=-0.5 && f.vy<=5.5;
 const lateral=Math.abs(f.vx)<=3.5;
 const inside=Math.abs(f.x)<=29;
 const metrics=' (down '+Math.max(0,f.vy).toFixed(1)+' m/s, sideways '+Math.abs(f.vx).toFixed(1)+' m/s, offset '+Math.abs(f.x).toFixed(1)+' m)';
 return {ok:vertical&&lateral&&inside,reason:(!inside?'Outside landing pad':!vertical?'Too fast vertically':!lateral?'Too fast sideways':'Safe touchdown')+metrics};
}
function finishFlight(result){flight.running=false;flight.ended=true;const verdict=typeof result==='object'?result:{ok:false,reason:'Out of safe flight corridor'};$('flightStatus').textContent=verdict.ok?'✓ SAFE TOUCHDOWN · '+verdict.reason:'✕ '+verdict.reason;$('startFlight').textContent='↺ Try again';if(verdict.ok){state.landingWins++;toast('✓ Soft landing! +250 XP');checkAwards()}else toast(verdict.reason)}
function stepFlight(dt){if(!flight.running)return;dt=Math.min(dt,.05)*2;flight.clock+=dt;let fire=(flight.thrust||pressed.ArrowUp||pressed.KeyW)&&flight.fuel>0;let lateral=Number(!!(flight.right||pressed.ArrowRight||pressed.KeyD))-Number(!!(flight.left||pressed.ArrowLeft||pressed.KeyA));let a=fire?4.1:0;let oldVy=flight.vy;flight.vy+=(gravity-a)*dt;flight.h-=(oldVy+flight.vy)*.5*dt;flight.vx+=lateral*9*dt;flight.vx*=Math.pow(.993,dt*60);flight.vx=Math.max(-15,Math.min(15,flight.vx));flight.x+=flight.vx*dt;if(fire)flight.fuel=Math.max(0,flight.fuel-4.4*dt);if(lateral)flight.fuel=Math.max(0,flight.fuel-.65*dt);if(flight.h<=0){const oldH=flight.h;flight.h=0;finishFlight(evaluateTouchdown(flight))}else if(Math.abs(flight.x)>210){finishFlight({ok:false,reason:'You flew beyond the landing corridor'})}}
// SURFACE EXPEDITION V4 — sprite-based Moon physics expedition with exact crater jump.
const rv=$('roverCanvas'),rc=rv.getContext('2d');
const astronautStandSprite=new Image();astronautStandSprite.src='assets/astronaut-stand.png';
const astronautJumpSprite=new Image();astronautJumpSprite.src='assets/astronaut-jump.png';
const landerSprite=new Image();landerSprite.src='assets/lander.png';
const roverSprite=new Image();roverSprite.src='assets/rover-side-body.png';
const rockSprite=new Image();rockSprite.src='assets/moon-rock.png';
const earthSprite=new Image();earthSprite.src='assets/earth.png';
const surfaceSprite=new Image();surfaceSprite.src='assets/moon-surface.png';
const footstepsSprite=new Image();footstepsSprite.src='assets/first-footsteps.png';
const saturnRocketSprite=new Image();saturnRocketSprite.src='assets/saturn5-like-rocket.png';
const roverDriverSprite=new Image();roverDriverSprite.src='assets/rover-driver.png';
const returnAscentSprite=new Image();returnAscentSprite.src='assets/return-ascent-stage.png';
const returnDescentSprite=new Image();returnDescentSprite.src='assets/return-descent-stage.png';
const returnDockingSprite=new Image();returnDockingSprite.src='assets/return-docking.png';
const returnTeiSprite=new Image();returnTeiSprite.src='assets/return-tei.png';
const returnReentrySprite=new Image();returnReentrySprite.src='assets/return-reentry.png';
const returnParachutesSprite=new Image();returnParachutesSprite.src='assets/return-parachutes.png';
const returnRecoveryShipSprite=new Image();returnRecoveryShipSprite.src='assets/return-recovery-ship.png';
const returnRecoveryCapsuleSprite=new Image();returnRecoveryCapsuleSprite.src='assets/return-recovery-capsule.png';
const returnRecoveryAircraftSprite=new Image();returnRecoveryAircraftSprite.src='assets/return-recovery-aircraft.png';
const returnBoardingSprite=new Image();returnBoardingSprite.src='assets/return-boarding-lander.png';
const MOON_G=1.62, MOON_JUMP_V0=3.42, PIXELS_PER_METER=50, JUMP_VISUAL_EASE=0.18;
function renderLanderAsset(ctx,x,y,size,withFlame=false){
 if(landerSprite.complete&&landerSprite.naturalWidth){
  const w=size*1.34,h=w*(landerSprite.naturalHeight/landerSprite.naturalWidth);
  ctx.drawImage(landerSprite,-w/2,-h*.86,w,h);
 }else{
  ctx.strokeStyle='#eaf3f0';ctx.lineWidth=2;ctx.fillStyle='#e9e8dd';ctx.beginPath();ctx.moveTo(0,-20);ctx.lineTo(17,-9);ctx.lineTo(14,12);ctx.lineTo(-14,12);ctx.lineTo(-17,-9);ctx.closePath();ctx.fill();ctx.stroke();
 }
 if(withFlame){ctx.fillStyle='rgba(144,235,255,.95)';ctx.beginPath();ctx.moveTo(-9,16);ctx.lineTo(0,40+Math.random()*10);ctx.lineTo(9,16);ctx.fill();ctx.fillStyle='rgba(255,224,155,.65)';ctx.beginPath();ctx.moveTo(-5,16);ctx.lineTo(0,30+Math.random()*8);ctx.lineTo(5,16);ctx.fill();}
}
function renderAstronautAsset(ctx,x,y,heightPx,airborne=false,moving=false,facing=1){
 const bentPose = airborne || moving;
 const sprite = bentPose ? astronautJumpSprite : astronautStandSprite;
 ctx.save();
 if(facing<0) ctx.scale(-1,1);
 if(sprite.complete&&sprite.naturalWidth){
  const h=heightPx,w=h*(sprite.naturalWidth/sprite.naturalHeight);
  const offsetY = bentPose ? h*0.90 : h*0.95;
  ctx.drawImage(sprite,-w/2,-offsetY,w,h);
 }else{
  ctx.fillStyle='#e7edf3';ctx.fillRect(-7,-26,14,17);ctx.fillStyle='#c0c6cf';ctx.fillRect(-11,-23,4,12);ctx.fillRect(7,-23,4,12);ctx.fillStyle='#eef0ee';ctx.fillRect(-7,-9,6,9);ctx.fillRect(1,-9,6,9);ctx.beginPath();ctx.arc(0,-35,11,0,Math.PI*2);ctx.fill();
 }
 ctx.restore();
}
function renderRoverAsset(ctx,sizePx,options={}){
 const {showDriver=false}=options;
 if(showDriver && roverDriverSprite.complete&&roverDriverSprite.naturalWidth){
  const w=sizePx*1.96,h=w*(roverDriverSprite.naturalHeight/roverDriverSprite.naturalWidth);
  ctx.drawImage(roverDriverSprite,-w/2,-h*0.81,w,h);
  return {w,h};
 }
 let dims;
 if(roverSprite.complete&&roverSprite.naturalWidth){
  const w=sizePx*1.9,h=w*(roverSprite.naturalHeight/roverSprite.naturalWidth);
  ctx.drawImage(roverSprite,-w/2,-h*0.80,w,h);
  dims={w,h};
 }else{
  ctx.fillStyle='#d8c28e';ctx.fillRect(-56,-34,112,22);ctx.fillStyle='#24333d';ctx.fillRect(-10,-55,26,16);ctx.fillStyle='#87a7bf';ctx.fillRect(-8,-53,20,10);ctx.strokeStyle='#d4dde2';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(18,-38);ctx.lineTo(42,-62);ctx.stroke();ctx.fillStyle='#cab57a';ctx.fillRect(-50,-58,44,28);ctx.fillRect(18,-44,36,24);dims={w:170,h:82};
 }
 if(showDriver){
  ctx.save();
  ctx.translate(-dims.w*0.02,-dims.h*0.42);
  ctx.rotate(-0.16);
  renderAstronautAsset(ctx,0,0,Math.max(30,sizePx*0.52),false,true,1);
  ctx.restore();
 }
 return dims;
}
function renderWheel(ctx,radius,angle){
 ctx.save();
 ctx.rotate(angle);
 const tire=ctx.createRadialGradient(-radius*0.2,-radius*0.3,radius*0.15,0,0,radius);
 tire.addColorStop(0,'#50555c'); tire.addColorStop(.55,'#232a31'); tire.addColorStop(1,'#0a0e12');
 ctx.fillStyle=tire; ctx.beginPath(); ctx.arc(0,0,radius,0,Math.PI*2); ctx.fill();
 ctx.strokeStyle='rgba(200,210,220,.22)'; ctx.lineWidth=Math.max(1,radius*0.12);
 for(let i=0;i<12;i++){ const a=i*Math.PI/6; ctx.beginPath(); ctx.arc(0,0,radius*0.82,a+0.12,a+0.32); ctx.stroke(); }
 ctx.fillStyle='#9fa8b3'; ctx.beginPath(); ctx.arc(0,0,radius*0.46,0,Math.PI*2); ctx.fill();
 ctx.strokeStyle='#dde7f0'; ctx.lineWidth=Math.max(1,radius*0.06);
 for(let i=0;i<6;i++){ const a=i*Math.PI/3; ctx.beginPath(); ctx.moveTo(Math.cos(a)*radius*0.16,Math.sin(a)*radius*0.16); ctx.lineTo(Math.cos(a)*radius*0.40,Math.sin(a)*radius*0.40); ctx.stroke(); }
 ctx.fillStyle='#6c7682'; ctx.beginPath(); ctx.arc(0,0,radius*0.11,0,Math.PI*2); ctx.fill();
 ctx.restore();
}
function currentMission(){ return missions.find(m=>m.id===state.mission)||missions[0]; }
function earthVisibleForCurrentMission(){ const m=currentMission(); return Math.abs(m.lon)<=90; }
function drawEarthInSky(ctx,vw,vh,x,y,size){
 if(!earthVisibleForCurrentMission()) return;
 if(earthSprite.complete&&earthSprite.naturalWidth){ ctx.drawImage(earthSprite,x-size/2,y-size/2,size,size); }
 else { ctx.fillStyle='#5ea1ff'; ctx.beginPath(); ctx.arc(x,y,size/2,0,Math.PI*2); ctx.fill(); ctx.fillStyle='rgba(255,255,255,.8)'; ctx.beginPath(); ctx.arc(x-size*0.1,y-size*0.12,size*0.11,0,Math.PI*2); ctx.fill(); }
}
function drawArtifact(ctx,art,x,y,nearby=false){
 ctx.save();
 const glow=nearby?1:0;
 if(glow){ctx.strokeStyle='rgba(129,255,226,.95)';ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,y-22,20,0,Math.PI*2);ctx.stroke();}
 if(art.type==='flag'){ctx.strokeStyle='#d9dfe7';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x,y+2);ctx.lineTo(x,y-28);ctx.stroke();ctx.fillStyle='#e7e9ed';ctx.beginPath();ctx.moveTo(x,y-27);ctx.lineTo(x+16,y-23);ctx.lineTo(x+16,y-10);ctx.lineTo(x,y-14);ctx.closePath();ctx.fill();}
 else if(art.type==='footsteps'){ctx.save();ctx.translate(x+2,y+2);ctx.fillStyle='rgba(94,101,112,.95)';ctx.beginPath();ctx.moveTo(-42,2);ctx.quadraticCurveTo(-16,-10,0,-4);ctx.quadraticCurveTo(18,-14,44,2);ctx.closePath();ctx.fill();if(footstepsSprite.complete&&footstepsSprite.naturalWidth){const w=58,h=w*(footstepsSprite.naturalHeight/footstepsSprite.naturalWidth);ctx.drawImage(footstepsSprite,-w/2,-h+1,w,h);}else{ctx.fillStyle='rgba(230,232,238,.95)'; for(let i=0;i<4;i++){const dx=i*10; ctx.beginPath();ctx.ellipse(-16+dx,-4-(i%2)*3,4.2,6.8,-0.22,0,Math.PI*2);ctx.fill(); ctx.beginPath();ctx.ellipse(-10+dx,3-(i%2)*3,3.1,4.8,-0.22,0,Math.PI*2);ctx.fill();}}ctx.restore();}
 else if(art.type==='photo'){ctx.save();ctx.translate(x,y-17);ctx.rotate(-0.12);const grd=ctx.createLinearGradient(-14,-18,14,16);grd.addColorStop(0,'#f9f3e8');grd.addColorStop(1,'#d6c8b2');ctx.fillStyle=grd;ctx.fillRect(-14,-18,28,20);ctx.strokeStyle='rgba(84,63,46,.75)';ctx.lineWidth=1.6;ctx.strokeRect(-14,-18,28,20);const inner=ctx.createLinearGradient(-10,-14,10,-2);inner.addColorStop(0,'#8ba5bc');inner.addColorStop(1,'#5c6e80');ctx.fillStyle=inner;ctx.fillRect(-10,-14,20,11);ctx.fillStyle='#4f3429';ctx.beginPath();ctx.ellipse(-3,-9,3.2,4.2,0,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.ellipse(5,-9,3.1,4.1,0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#d9b18f';ctx.beginPath();ctx.arc(-3,-12.2,2.1,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(5,-12.1,2.0,0,Math.PI*2);ctx.fill();ctx.fillStyle='#7b8ca0';ctx.fillRect(-9,-4,18,4.2);ctx.restore();}
 else if(art.type==='rover'){ctx.save();ctx.translate(x,y-3);ctx.scale(0.42,0.42);const dims=renderRoverAsset(ctx,88);const off=(dims&&dims.w?dims.w:160)*0.33;renderWheel(ctx,17,eva.wheelAngle);ctx.save();ctx.translate(off*1.65,0);renderWheel(ctx,17,eva.wheelAngle);ctx.restore();ctx.restore();}
 else if(art.type==='rock'){ctx.save();ctx.translate(x,y-1);renderRockAsset(ctx,art.collectible?46:40);if(art.collectible){ctx.strokeStyle='rgba(255,241,166,.95)';ctx.lineWidth=2;ctx.strokeRect(-18,-34,36,36);}ctx.restore();}
 else {ctx.save();ctx.translate(x,y+2);const s=art.scale||0.42;ctx.scale(s,s);renderLanderAsset(ctx,0,0,136,false);ctx.restore();}
 if(nearby){ctx.fillStyle='#effef8';ctx.font='bold 11px system-ui';ctx.textAlign='center';ctx.fillText(missionById(art.mission).name,x,y-40);}
 ctx.restore();
}
function renderRockAsset(ctx,sizePx){
 if(rockSprite.complete&&rockSprite.naturalWidth){
  const w=sizePx,h=w*(rockSprite.naturalHeight/rockSprite.naturalWidth);
  ctx.drawImage(rockSprite,-w/2,-h*0.92,w,h);
 }else{
  ctx.fillStyle='#c9c5bf';ctx.beginPath();ctx.moveTo(-12,4);ctx.lineTo(-8,-10);ctx.lineTo(7,-13);ctx.lineTo(14,-2);ctx.lineTo(8,9);ctx.lineTo(-7,12);ctx.closePath();ctx.fill();
 }
}
function updateSampleReveal(){ const panel=$('sampleReveal'); if(!panel) return; panel.classList.toggle('hidden',eva.sampleCount<1); }

const EVA_BASE=60,EVA_ROVER_START=150,EVA_HILL=330,EVA_CRATER=1195,EVA_TARGET=1195,EVA_END=3350;
const EVA_ARTIFACTS=[
 {id:"tranquility-rock",mission:"apollo11",x:330,type:"rock",collectible:true,label:"Sea of Tranquility sample site",title:"Sea of Tranquility rock sample",body:"This is a collectible Moon sample site. Apollo 11 astronauts collected rocks and soil here in Mare Tranquillitatis and returned them to Earth.",note:"Collectible sample rock — press E nearby to pick it up."},
 {id:"first-footsteps",mission:"apollo11",x:392,type:"footsteps",label:"First footsteps",title:"First footsteps on the Moon",body:"Apollo 11 marked the first human footsteps on the Moon. Neil Armstrong's first step onto the lunar surface took place here in the Sea of Tranquility on 20 July 1969.",note:"Historic site only — preserved in place, not collectible."},
 {id:"apollo11-flag",mission:"apollo11",x:430,type:"flag",label:"Apollo 11 flag site",title:"Apollo 11 flag",body:"Apollo 11 planted an American flag during humanity's first crewed lunar surface mission. The flag site is a historic marker of the landing.",note:"Historic site only — preserved in place, not collectible."},
 {id:"surveyor3",mission:"apollo12",x:760,type:"lander",scale:0.46,label:"Surveyor 3 heritage hardware",title:"Surveyor heritage site",body:"Apollo 12 famously landed near Surveyor 3 and astronauts visited the earlier robotic spacecraft, returning some components to Earth for study.",note:"Historic artifact marker — not collectible."},
 {id:"apollo12-flag",mission:"apollo12",x:980,type:"flag",label:"Apollo 12 precision landing flag",title:"Apollo 12 flag",body:"Apollo 12 demonstrated a highly accurate crewed landing by touching down near Surveyor 3 in Oceanus Procellarum.",note:"Historic site only — preserved in place, not collectible."},
 {id:"luna16",mission:"luna16",x:1330,type:"lander",scale:0.44,label:"Luna 16 sample-return lander",title:"Luna 16 lander",body:"Luna 16 achieved the first robotic lunar sample return in 1970, bringing a core of lunar soil back to Earth without a crew.",note:"Historic artifact marker — not collectible."},
 {id:"fra-mauro-rock",mission:"apollo14",x:1510,type:"rock",collectible:true,label:"Fra Mauro sample site",title:"Fra Mauro rock sample",body:"Apollo 14 explored Fra Mauro and returned geological samples that helped scientists interpret the Moon's impact history.",note:"Collectible sample rock — press E nearby to pick it up."},
 {id:"apollo14-flag",mission:"apollo14",x:1580,type:"flag",label:"Apollo 14 flag site",title:"Apollo 14 flag",body:"Apollo 14 explored Fra Mauro and expanded lunar geology knowledge with returned samples and field observations.",note:"Historic site only — preserved in place, not collectible."},
 {id:"apollo15-rover",mission:"apollo15",x:1825,type:"rover",label:"Apollo 15 rover legacy",title:"Apollo 15 rover legacy",body:"Apollo 15 introduced the Lunar Roving Vehicle, greatly extending how far astronauts could travel from the lander.",note:"Historic artifact marker — not collectible."},
 {id:"apollo16-photo",mission:"apollo16",x:2070,type:"photo",label:"Apollo 16 family photo artifact",title:"Apollo 16 family photo",body:"Astronaut Charles Duke left a family photograph on the Moon during Apollo 16. It is one of the most personal human artifacts left on the lunar surface.",note:"Historic artifact — preserved in place, not collectible."},
 {id:"taurus-littrow-rock",mission:"apollo17",x:2245,type:"rock",collectible:true,label:"Taurus–Littrow sample site",title:"Taurus–Littrow rock sample",body:"Apollo 17 collected diverse samples from the Taurus–Littrow valley, including orange volcanic soil and ancient highland material.",note:"Collectible sample rock — press E nearby to pick it up."},
 {id:"apollo17-flag",mission:"apollo17",x:2320,type:"flag",label:"Apollo 17 final Apollo flag",title:"Apollo 17 flag",body:"Apollo 17 was the most recent crewed lunar landing and closed the Apollo era at Taurus–Littrow.",note:"Historic site only — preserved in place, not collectible."},
 {id:"luna9",mission:"luna9",x:2550,type:"lander",scale:0.43,label:"Luna 9 first soft-landing site",title:"Luna 9 site",body:"Luna 9 was the first spacecraft to make a successful soft landing on the Moon and send panoramic surface images back to Earth.",note:"Historic artifact marker — not collectible."},
 {id:"change4",mission:"change4",x:2750,type:"lander",scale:0.48,label:"Chang’e 4 far-side lander tribute",title:"Chang’e 4 lander marker",body:"Chang’e 4 made the first soft landing on the far side of the Moon, using a relay satellite to communicate with Earth.",note:"Historic artifact marker — not collectible."},
 {id:"chandrayaan3",mission:"chandrayaan3",x:2920,type:"lander",scale:0.47,label:"Chandrayaan-3 landing artifact",title:"Chandrayaan-3 marker",body:"India's Chandrayaan-3 achieved a successful high-latitude lunar landing and deployed the Pragyan rover.",note:"Historic artifact marker — not collectible."},
 {id:"slim",mission:"slim",x:3080,type:"lander",scale:0.45,label:"SLIM precision landing marker",title:"SLIM marker",body:"Japan's SLIM mission demonstrated high-precision lunar landing techniques.",note:"Historic artifact marker — not collectible."},
 {id:"blueghost",mission:"blueghost",x:3240,type:"lander",scale:0.52,label:"Blue Ghost commercial lander marker",title:"Blue Ghost 1 marker",body:"Firefly Aerospace's Blue Ghost 1 delivered ten NASA science and technology payloads to Mare Crisium.",note:"Historic artifact marker — not collectible."}
];
const SAMPLE_ROCK_IDS=EVA_ARTIFACTS.filter(a=>a.collectible).map(a=>a.id);
const TOTAL_ROVER_OBJECTIVES=SAMPLE_ROCK_IDS.length+2;
const eva={x:EVA_BASE,y:0,vy:0,airTime:0,vehicle:'inside',roverX:EVA_ROVER_START,dir:1,roverDir:1,buttons:{left:false,right:false},oxygen:100,sampleCount:0,collected:{},craterSpot:false,soil:false,complete:false,failed:false,time:0,dust:0,scanPulse:0,jumpLatch:false,wheelAngle:0,visualLift:0,returnPhase:null,returnTime:0,message:'',physics:''};
function missionById(id){return missions.find(m=>m.id===id)}
function activeSurfaceX(){return eva.vehicle==='rover'?eva.roverX:eva.x}
function isCollectedArtifact(art){return !!(art&&art.collectible&&eva.collected[art.id]);}
function nearestArtifact(maxDist=72){const here=activeSurfaceX();let best=null,bestD=maxDist;for(const art of EVA_ARTIFACTS){if(isCollectedArtifact(art))continue;const d=Math.abs(art.x-here);if(d<bestD){best=art;bestD=d;}}return best;}
function setProximityMission(id){if(state.proximityMission===id)return;state.proximityMission=id;renderList();if(id){const el=document.querySelector('.mitem.nearby');if(el&&el.scrollIntoView)el.scrollIntoView({block:'nearest'});}}
function artifactPrompt(art){if(!art)return '';const m=missionById(art.mission);return (art.collectible?'Collectible sample: ':'Nearby artifact: ')+art.label+' · '+m.name;}
function openArtifactPopup(art){if(!art)return;state.openArtifact=art.id;const m=missionById(art.mission);artifactPopupTitle.textContent=art.title||art.label;artifactPopupMission.textContent=(m?m.name+' · '+m.year+' · '+m.place:'Historic lunar artifact').toUpperCase();artifactPopupBody.textContent=art.body||art.label;artifactPopupNote.textContent=art.note||'Historic artifact.';artifactPopup.classList.remove('hidden');selectMission(art.mission,false);setProximityMission(art.mission);}
function closeArtifactPopup(){state.openArtifact=null;artifactPopup.classList.add('hidden');}
function artifactById(id){return EVA_ARTIFACTS.find(a=>a.id===id);}
let roverArtifactHits=[];
// Terrain geometry is sampled from the actual alpha contour of the repeating PNG.
const SURFACE_HEIGHT_SAMPLES=[500,501,501,501,502,502,502,502,502,501,501,500,499,496,494,496,498,498,499,500,500,500,501,502,502,502,502,502,502,503,503,503,504,504,505,505,506,506,506,506,506,506,506,506,507,507,507,507,507,507,507,506,506,505,505,504,504,503,503,502,502,503,503,504,504,505,505,506,506,507,507,508,507,508,507,506,505,505,504,503,502,502,501,501,500,500,499,497,494,493,494,492,488,487,487,490,491,493,492,492,495,495,495,496,496,496,496,496,495,495,494,493,492,492,492,492,492,494,494,495,495,496,496,496,496,495,495,494,493,492,490,488,486,483,480,478,475,474,473,469,468,464,461,455,455,452,449,446,441,437,429,424,423,424,421,417,412,410,406,401,396,395,393,390,389,388,387,388,388,390,393,397,400,405,408,413,416,420,421,427,429,433,436,436,439,444,447,450,451,451,448,448,450,456,464,466,467,470,470,472,477,480,482,484,486,487,489,490,491,492,493,493,494,495,495,495,495,494,490,489,489,492,496,497,498,499,500,500,500,500,500,500,499,498,500,499,498,499,499,497,496,494,491,493,492,492,488,485,484,479,477,477,481,481,479,476,477,478,477,476,473,470,470,470,468,466,465,466,466,468,472,474,478];
const SURFACE_TILE_METERS=280;
const SURFACE_IMAGE_WIDTH=2172,SURFACE_IMAGE_HEIGHT=724;
const SURFACE_TOP_REFERENCE=490;
function imageTopAt(worldX){
 const period=((worldX%SURFACE_TILE_METERS)+SURFACE_TILE_METERS)%SURFACE_TILE_METERS;
 const u=period/SURFACE_TILE_METERS*(SURFACE_HEIGHT_SAMPLES.length-1);
 const i=Math.min(SURFACE_HEIGHT_SAMPLES.length-2,Math.floor(u)),f=u-i;
 let top=SURFACE_HEIGHT_SAMPLES[i]*(1-f)+SURFACE_HEIGHT_SAMPLES[i+1]*f;
 // Close the small tile edge difference without a collision step.
 const fade=Math.min(1,u/12,(SURFACE_HEIGHT_SAMPLES.length-1-u)/12);
 const seam=(SURFACE_HEIGHT_SAMPLES[0]+SURFACE_HEIGHT_SAMPLES.at(-1))*.5;
 return seam+(top-seam)*Math.max(0,fade);
}
function evaGround(x){return (imageTopAt(x)-SURFACE_TOP_REFERENCE)*(SURFACE_TILE_METERS/SURFACE_IMAGE_WIDTH);}

function onGround(){return Math.abs(eva.y-evaGround(eva.x))<0.08}
function completedObjectives(){return eva.sampleCount+Number(eva.craterSpot)+Number(eva.soil)}
function evaObjective(){return eva.vehicle==='inside'?'EXIT THE LANDER':eva.sampleCount<SAMPLE_ROCK_IDS.length?`COLLECT MOON SAMPLE ROCKS · ${eva.sampleCount}/${SAMPLE_ROCK_IDS.length}`:!eva.craterSpot?'DRIVE TO THE CRATER · LAND ON TARGET':!eva.soil?'DIG A CRATER SOIL SAMPLE':'RETURN TO LANDER · REFILL OXYGEN'}
function evaPhysicsTip(){
 if(eva.vehicle==='inside')return 'No atmosphere: the sky is black, there is no wind, and there is no sound outside the lander.';
 if(eva.vehicle==='rover'&&eva.dust>.15)return 'Dust: rover wheels loft abrasive regolith. With no air it does not drift like smoke, but it can still reduce local visibility.';
 if(!eva.craterSpot)return 'Gravity: the Moon pulls at 1.62 m/s². The jump follows y(t)=y₀+v₀t−½gt² and reaches about 3.6 m — around twice astronaut height — so you stay airborne much longer than on Earth.';
 if(eva.sampleCount<SAMPLE_ROCK_IDS.length)return 'Moon rock collection: disembark and pick up sample rocks with E. Historical artifacts stay on the surface and cannot be collected.';
 if(!eva.soil)return 'Precision landing: jump and touch down on the illuminated crater target ring, then use the tool to dig.';
 return 'Vacuum operations: oxygen only refills near the lander. Use the rover for speed and return to base to finish the EVA.';
}
function evaStatus(message){eva.message=message;$('roverStatus').textContent=message}
function resetRover(){Object.assign(eva,{x:EVA_BASE,y:evaGround(EVA_BASE),vy:0,airTime:0,vehicle:'inside',roverX:EVA_ROVER_START,dir:1,roverDir:1,oxygen:100,sampleCount:0,collected:{},craterSpot:false,soil:false,complete:false,failed:false,time:0,dust:0,scanPulse:0,jumpLatch:false,wheelAngle:0,visualLift:0,returnPhase:null,returnTime:0,message:'',physics:''});state.proximityMission=null;closeArtifactPopup();eva.buttons.left=false;eva.buttons.right=false;$('roverProgress').textContent='O₂ 100% · 0/'+TOTAL_ROVER_OBJECTIVES+' OBJECTIVES';evaStatus('Press E to climb out of the lander. Then walk to the rover, board it, and begin the Moon-physics expedition. Collect Moon sample rocks, explore historic artifacts, and complete the crater science task.');updateSampleReveal();renderList();paintRover()}
function evaInteract(){if(state.mode!=='rover'||eva.complete||eva.failed)return;eva.scanPulse=.6;
 if(eva.vehicle==='inside'&&Math.abs(eva.x-EVA_BASE)<20){eva.vehicle='foot';eva.x=EVA_BASE+34;eva.y=evaGround(eva.x);eva.vy=0;evaStatus('You climbed out of the lander. No atmosphere means black sky, sharp shadows, and no wind. Walk right to the rover and board with E.');return}
 if(eva.vehicle==='rover'){eva.vehicle='foot';eva.x=eva.roverX+28;eva.y=evaGround(eva.x);eva.vy=0;evaStatus(eva.sampleCount<SAMPLE_ROCK_IDS.length?'Disembarked. Walk to a visible Moon sample rock and press E to pick it up.':!eva.craterSpot?'Disembarked. Make a low-gravity jump and LAND on the glowing crater target ring.':!eva.soil?'Stand on the target in the low crater and press E to dig a soil sample.':'Disembarked. Return to the lander to refill oxygen and complete the expedition.');return}
 const art=nearestArtifact(48);
 if(art&&art.collectible&&eva.vehicle==='foot'&&onGround()){eva.collected[art.id]=true;eva.sampleCount++;updateSampleReveal();const more=eva.sampleCount<SAMPLE_ROCK_IDS.length?` ${SAMPLE_ROCK_IDS.length-eva.sampleCount} sample rock${SAMPLE_ROCK_IDS.length-eva.sampleCount===1?'':'s'} remaining.`:' All Moon rock samples collected — head for the crater target.';evaStatus('✓ '+art.title+' collected.'+more);toast('Moon sample collected · '+eva.sampleCount+'/'+SAMPLE_ROCK_IDS.length);closeArtifactPopup();return}
 if(eva.craterSpot&&!eva.soil&&Math.abs(eva.x-EVA_TARGET)<=10&&onGround()){eva.soil=true;eva.dust=Math.max(eva.dust,.9);evaStatus('✓ Soil sample collected. Return to the rover, drive back to the lander, and refill oxygen near base.');toast('Crater soil sample collected');return}
 if(Math.abs(eva.x-EVA_BASE)<54&&eva.vehicle==='foot'){eva.oxygen=100;if(eva.sampleCount===SAMPLE_ROCK_IDS.length&&eva.craterSpot&&eva.soil&&Math.abs(eva.roverX-EVA_BASE)<110){eva.returnPhase='boarding';eva.returnTime=0;eva.vehicle='inside';eva.x=EVA_BASE;evaStatus('Samples delivered! Astronaut boarding the lander for the return flight.');toast('Samples secured · launching return flight')}else evaStatus('Oxygen refilled near the lander. Complete the remaining Moon-physics objectives and park the rover back at base.');return}
 if(Math.abs(eva.x-eva.roverX)<38){eva.vehicle='rover';eva.x=eva.roverX;eva.y=evaGround(eva.x);evaStatus(eva.sampleCount<SAMPLE_ROCK_IDS.length?'Rover boarded. Drive to the next Moon sample site. Motion kicks up dust that can briefly reduce visibility.':!eva.craterSpot?'Drive to the visible crater and disembark for the precision jump.':!eva.soil?'Drive carefully to the low crater on the terrain image, then jump onto the target.':'Samples secured. Drive back to the lander and refill oxygen.');return}
 if(art&&eva.vehicle==='foot'){openArtifactPopup(art);if(!art.collectible)evaStatus('Historic artifact inspected. It remains preserved in place and is not collectible.');return}
 evaStatus('Use E near a Moon sample rock, the rover, or the lander. Historic artifacts can be inspected but not collected.');}
function evaJump(){if(eva.vehicle==='foot'&&!eva.failed&&!eva.complete&&onGround()){eva.vy=-MOON_JUMP_V0;eva.airTime=.001;evaStatus('Jump! On the Moon the motion follows y(t)=y₀+v₀t−½gt² with g=1.62 m/s². This jump reaches about 3.6 m, roughly twice the astronaut height, and stays airborne for over 4 seconds.')}}
function roverStep(dt){if(state.mode!=='rover'||eva.failed)return;
 if(eva.returnPhase){
  eva.returnTime+=dt;
  if(eva.returnTime<2.4)eva.returnPhase='boarding';
  else if(eva.returnTime<5.3)eva.returnPhase='ascent';
  else if(eva.returnTime<8.3)eva.returnPhase='rendezvous';
  else if(eva.returnTime<11.3)eva.returnPhase='tei';
  else if(eva.returnTime<14.6)eva.returnPhase='reentry';
  else if(eva.returnTime<17.4)eva.returnPhase='splashdown';
  else if(!eva.complete){eva.returnPhase='arrived';eva.complete=true;state.roverWins++;checkAwards();evaStatus('✓ MISSION COMPLETE! Lunar samples splashed down on Earth.');toast('✓ Lunar Scientist — samples returned');}
  return;
 }
 if(eva.complete)return;eva.time+=dt;const left=eva.buttons.left||pressed.ArrowLeft||pressed.KeyA,right=eva.buttons.right||pressed.ArrowRight||pressed.KeyD;const dir=Number(!!right)-Number(!!left);if(dir)eva.dir=dir;
 if(eva.vehicle==='rover'){if(dir)eva.roverDir=dir;const oldX=eva.roverX;eva.roverX=Math.max(65,Math.min(EVA_END,eva.roverX+dir*82*dt));eva.x=eva.roverX;eva.y=evaGround(eva.x);eva.wheelAngle+=(eva.roverX-oldX)*0.095;eva.dust=Math.max(0,Math.min(1,eva.dust+(dir?dt*2.4:-dt*1.4)));}
 else if(eva.vehicle==='foot'){const previouslyGrounded=onGround()&&eva.airTime===0;eva.x=Math.max(20,Math.min(EVA_END,eva.x+dir*22*dt));if(previouslyGrounded){eva.y=evaGround(eva.x);eva.vy=0;}else{eva.vy+=MOON_G*dt;eva.y+=eva.vy*dt;}const ground=evaGround(eva.x);if(eva.y>=ground){const wasAirborne=eva.airTime>.18||Math.abs(eva.vy)>.45;eva.y=ground;eva.vy=0;if(wasAirborne&&!eva.craterSpot&&Math.abs(eva.x-EVA_TARGET)<=7&&Math.abs(eva.x-EVA_CRATER)<=80){eva.craterSpot=true;eva.scanPulse=.85;evaStatus('✓ Exact crater landing achieved! Press E on this spot to dig the soil sample.');toast('Perfect crater landing');}
  else if(wasAirborne&&!eva.craterSpot&&Math.abs(eva.x-EVA_CRATER)<=90){evaStatus('Close. Jump again and LAND exactly on the glowing crater target ring.');}
  eva.airTime=0;}else eva.airTime+=dt;eva.dust=Math.max(0,eva.dust-dt*1.8)}
 const groundForLift=evaGround(eva.x);const targetLift=(eva.vehicle==='foot')?Math.max(0,groundForLift-eva.y)*PIXELS_PER_METER:0;eva.visualLift+=(targetLift-eva.visualLift)*JUMP_VISUAL_EASE;
 const nearArt=nearestArtifact();setProximityMission(nearArt?nearArt.mission:null);
 if(eva.vehicle!=='inside'){const drain=eva.vehicle==='rover'?0.10:0.23;eva.oxygen=Math.max(0,eva.oxygen-drain*dt);if(eva.vehicle==='foot'&&Math.abs(eva.x-EVA_BASE)<55)eva.oxygen=Math.min(100,eva.oxygen+dt*24);if(eva.oxygen<=0){eva.failed=true;evaStatus('Oxygen exhausted. Restart the expedition and return to the lander sooner.')}}
 const jump=pressed.Space||pressed.ArrowUp||pressed.KeyW;eva.jumpLatch=!!jump;eva.scanPulse=Math.max(0,eva.scanPulse-dt);$('roverProgress').textContent='O₂ '+Math.ceil(eva.oxygen)+'% · '+completedObjectives()+'/'+TOTAL_ROVER_OBJECTIVES+' OBJECTIVES';}
function paintRover(){const {w,h,d}=resizeCanvas(rv),vw=w/d,vh=h/d;rc.setTransform(d,0,0,d,0,0);rc.clearRect(0,0,vw,vh);
 const bg=rc.createLinearGradient(0,0,0,vh);bg.addColorStop(0,'#02050d');bg.addColorStop(.55,'#0a1221');bg.addColorStop(1,'#1b2737');rc.fillStyle=bg;rc.fillRect(0,0,vw,vh);
 const scale=Math.max(1.9,Math.min(2.6,vw/430));const focus=eva.vehicle==='rover'?eva.roverX:eva.x;const camera=Math.max(0,Math.min(EVA_END-vw/scale+130,focus-vw/scale*.34));const floor=vh*.76;const sx=x=>(x-camera)*scale,sy=x=>floor+evaGround(x)*scale,syWorld=y=>floor+y*scale;
 surfaceStars.forEach(s=>{rc.fillStyle=`rgba(211,226,240,${s.a})`;rc.fillRect(s.x*vw,s.y*(vh*.48),s.s,s.s);});
 drawEarthInSky(rc,vw,vh,vw-86,74,42);
 // distant horizon / no atmosphere = crisp silhouettes
 rc.fillStyle='#222d3a';rc.beginPath();rc.moveTo(0,vh*.6);for(let x=0;x<=vw+5;x+=22){const y=vh*.61+Math.sin((x+camera*.08)/90)*8+Math.cos((x+camera*.03)/53)*5;rc.lineTo(x,y)}rc.lineTo(vw,vh);rc.lineTo(0,vh);rc.closePath();rc.fill();
 // terrain
 rc.beginPath();rc.moveTo(0,vh);for(let px=0;px<=vw+4;px+=2){const wx=camera+px/scale;rc.lineTo(px,sy(wx))}rc.lineTo(vw,vh);rc.closePath();const g=rc.createLinearGradient(0,floor-150,0,vh);g.addColorStop(0,'#d8d1c5');g.addColorStop(.45,'#8d877f');g.addColorStop(1,'#454d59');rc.fillStyle=g;rc.fill();
 if(surfaceSprite.complete&&surfaceSprite.naturalWidth){
  const tileW=SURFACE_TILE_METERS*scale,tileH=tileW*(surfaceSprite.naturalHeight/surfaceSprite.naturalWidth);
  const tileTop=floor-SURFACE_TOP_REFERENCE*tileW/SURFACE_IMAGE_WIDTH;
  const first=Math.floor(camera/SURFACE_TILE_METERS)-1;
  const last=Math.ceil((camera+vw/scale)/SURFACE_TILE_METERS)+1;
  rc.save();rc.globalAlpha=.98;
  for(let t=first;t<=last;t++) rc.drawImage(surfaceSprite,sx(t*SURFACE_TILE_METERS),tileTop,tileW,tileH);
  rc.restore();
 }
 rc.strokeStyle='#f2efe7';rc.lineWidth=2;rc.beginPath();for(let px=0;px<=vw+4;px+=2){const wx=camera+px/scale;const pt=[px,sy(wx)];if(!px)rc.moveTo(...pt);else rc.lineTo(...pt)}rc.stroke();
 // markers every 200 m
 rc.font='10px system-ui';rc.textAlign='center';for(let x=0;x<EVA_END;x+=200){const px=sx(x);if(px>=-30&&px<=vw+30){const gy=sy(x);rc.strokeStyle='#7d8a99';rc.beginPath();rc.moveTo(px,gy);rc.lineTo(px,gy+7);rc.stroke();rc.fillStyle='#dee6ef';rc.fillText(x+' m',px,gy+20)}}
 // artifacts and mission markers
 const nearbyArtifact=nearestArtifact(); roverArtifactHits.length=0;
 for(const art of EVA_ARTIFACTS){if(isCollectedArtifact(art))continue;const ax=sx(art.x), ay=sy(art.x); if(ax>-100&&ax<vw+100){ drawArtifact(rc,art,ax,ay,nearbyArtifact&&art.mission===nearbyArtifact.mission&&art.x===nearbyArtifact.x); roverArtifactHits.push({id:art.id,x:ax,y:ay-14,r:art.type==='lander'?36:art.type==='rover'?28:art.type==='rock'?24:22}); }} 
 const tx=sx(EVA_TARGET),ty=sy(EVA_TARGET);if(tx>-50&&tx<vw+50&&!eva.craterSpot){rc.strokeStyle='#85ffe5';rc.lineWidth=3;rc.beginPath();rc.arc(tx,ty-2,14,0,Math.PI*2);rc.stroke();rc.beginPath();rc.moveTo(tx-22,ty-2);rc.lineTo(tx+22,ty-2);rc.moveTo(tx,ty-24);rc.lineTo(tx,ty+20);rc.stroke();rc.fillStyle='#dffef6';rc.font='bold 11px system-ui';rc.fillText('TARGET',tx,ty-26)}
 if(eva.craterSpot&&!eva.soil&&tx>-50&&tx<vw+50){rc.fillStyle='#bafbe5';rc.font='bold 12px system-ui';rc.fillText('DIG',tx,ty-22);rc.strokeStyle='#8bffd8';rc.lineWidth=2;rc.strokeRect(tx-10,ty-16,20,20)}
 // lander at base
 const bx=sx(EVA_BASE),by=sy(EVA_BASE);if(bx>-170&&bx<vw+170){rc.save();rc.translate(bx,by+2);renderLanderAsset(rc,0,0,118,false);rc.fillStyle='#edf9ff';rc.font='bold 11px system-ui';rc.fillText('LANDER',0,-118);rc.restore()}
 // rover adapts to terrain
 const rx=sx(eva.roverX),ry=sy(eva.roverX);if(rx>-220&&rx<vw+220){const roverSize=88; const dims=(roverSprite.complete&&roverSprite.naturalWidth)?{w:roverSize*1.9,h:roverSize*1.9*(roverSprite.naturalHeight/roverSprite.naturalWidth)}:{w:170,h:82}; const wheelR=17; const offX=dims.w*0.33; const offWorld=offX/scale; const lx=eva.roverX-offWorld, rxw=eva.roverX+offWorld; const lsx=sx(lx), rsx=sx(rxw), lsy=sy(lx), rsy=sy(rxw); const bodyAngle=Math.atan2(rsy-lsy,rsx-lsx); const bodyY=(lsy+rsy)/2-wheelR-6; const facing=eva.roverDir||1; rc.save(); rc.translate(rx,bodyY); rc.rotate(bodyAngle); rc.scale(facing,1); renderRoverAsset(rc,roverSize,{showDriver:eva.vehicle==='rover'}); rc.restore(); rc.save(); rc.fillStyle='#fff'; rc.textAlign='center'; rc.font='bold 11px system-ui'; rc.fillText((facing<0?'← ':'')+'ROVER'+(facing>0?' →':''),rx,bodyY-75); rc.restore(); rc.save(); rc.translate(lsx,lsy-9); renderWheel(rc,wheelR,eva.wheelAngle); rc.restore(); rc.save(); rc.translate(rsx,rsy-9); renderWheel(rc,wheelR,eva.wheelAngle); rc.restore(); }
 // astronaut
 if(eva.vehicle==='foot'){const ax=sx(eva.x),ay=sy(eva.x)-eva.visualLift;const movingOnFoot=!!(eva.buttons.left||eva.buttons.right||pressed.ArrowLeft||pressed.KeyA||pressed.ArrowRight||pressed.KeyD);rc.save();rc.translate(ax,ay+1);renderAstronautAsset(rc,0,0,92,!onGround()||Math.abs(eva.vy)>0.06,movingOnFoot,eva.dir||1);rc.restore();if(eva.scanPulse){rc.strokeStyle='#87ffdb';rc.lineWidth=3;rc.beginPath();rc.arc(ax,ay-16,55*(1-eva.scanPulse)+12,0,Math.PI*2);rc.stroke()}}
 // dust effects
 if(eva.dust>.04){const anchorX=sx(eva.vehicle==='rover'?eva.roverX:eva.x),anchorY=sy(eva.vehicle==='rover'?eva.roverX:eva.x);for(let i=0;i<18;i++){const ox=(Math.sin(i*17.2+eva.time*7)*28)+(eva.vehicle==='rover'?-i*2:0),oy=Math.cos(i*13.1+eva.time*5)*11;const r=12+((i*7)%17);rc.fillStyle='rgba(214,201,176,'+(0.02+eva.dust*0.065)+')';rc.beginPath();rc.arc(anchorX+ox,anchorY-7+oy,r,0,Math.PI*2);rc.fill();}rc.fillStyle='rgba(235,224,196,'+(eva.dust*0.10)+')';rc.fillRect(0,0,vw,vh*.18)}
 // HUD panels
 rc.textAlign='left';rc.fillStyle='#07131fcc';rc.fillRect(10,10,Math.min(430,vw-20),100);rc.fillStyle='#eef8ff';rc.font='bold 12px system-ui';rc.fillText('MISSION  '+evaObjective(),20,30);rc.font='12px system-ui';rc.fillText('MODE  '+(eva.vehicle==='inside'?'INSIDE LANDER':eva.vehicle==='rover'?'DRIVING':'ON FOOT')+'   ·   X '+Math.round(eva.x)+' m',20,50);rc.fillStyle='#455768';rc.fillRect(20,62,Math.min(260,vw-88),13);rc.fillStyle=eva.oxygen>25?'#79e5c4':'#ff947d';rc.fillRect(20,62,Math.min(260,vw-88)*eva.oxygen/100,13);rc.fillStyle='#fff';rc.font='11px system-ui';rc.fillText('OXYGEN '+Math.ceil(eva.oxygen)+'%  ·  '+completedObjectives()+'/'+TOTAL_ROVER_OBJECTIVES+' objectives  ·  ROCKS '+eva.sampleCount+'/'+SAMPLE_ROCK_IDS.length,24,72);
 rc.fillStyle='#091823dd';rc.fillRect(10,116,Math.min(500,vw-20),96);rc.fillStyle='#a6efe0';rc.font='bold 11px system-ui';rc.fillText('MOON PHYSICS',20,132);rc.fillStyle='#e9f5ff';rc.font='12px system-ui';const tip=evaPhysicsTip();wrapText(rc,tip,20,150,Math.min(470,vw-50),16);const ap=artifactPrompt(nearbyArtifact);if(ap){rc.fillStyle='#ffe6aa';rc.font='bold 11px system-ui';rc.fillText('ARTIFACT',20,195);rc.fillStyle='#fff8df';rc.font='11px system-ui';wrapText(rc,ap,82,195,Math.min(410,vw-100),15);} 
 rc.font='bold 12px system-ui';rc.fillStyle='#fcf5dc';const prompt=eva.complete?'✓ EXPEDITION COMPLETE':eva.failed?'OXYGEN EXHAUSTED':eva.vehicle==='inside'?'E EXIT LANDER':eva.vehicle==='rover'?'E DISEMBARK · ARROWS TO DRIVE':'SPACE JUMP · E INTERACT / TOOL';rc.fillText(prompt,16,vh-16);if(eva.returnPhase)paintReturnSequence(rc,vw,vh);rc.setTransform(1,0,0,1,0,0)}
function paintReturnSurface(ctx,w,h){
 const floor=h*.78;
 ctx.fillStyle='#59616b';ctx.fillRect(0,floor,w,h-floor);
 if(surfaceSprite.complete&&surfaceSprite.naturalWidth){
  const tileW=Math.max(270,w*.53),tileH=tileW*(surfaceSprite.naturalHeight/surfaceSprite.naturalWidth);
  ctx.save();ctx.beginPath();ctx.rect(0,floor-22,w,h-floor+22);ctx.clip();
  for(let x=0;x<w+tileW;x+=tileW){ctx.drawImage(surfaceSprite,x,floor-tileH*.65,tileW,tileH);}
  ctx.restore();
 }
 return floor;
}

function drawCM(ctx,x,y,s=1,angle=0,sm=true){
 ctx.save();ctx.translate(x,y);ctx.rotate(angle);
 // command module cone
 ctx.fillStyle='#f4f6fa';ctx.beginPath();ctx.moveTo(0,-18*s);ctx.lineTo(15*s,10*s);ctx.lineTo(-15*s,10*s);ctx.closePath();ctx.fill();
 ctx.strokeStyle='rgba(32,45,62,.9)';ctx.lineWidth=1.2*s;ctx.stroke();
 ctx.fillStyle='#565e67';ctx.beginPath();ctx.moveTo(-15*s,10*s);ctx.lineTo(15*s,10*s);ctx.lineTo(11*s,16*s);ctx.lineTo(-11*s,16*s);ctx.closePath();ctx.fill();
 if(sm){
  ctx.fillStyle='#d8dde5';ctx.fillRect(-8*s,16*s,16*s,20*s);
  ctx.strokeStyle='rgba(55,77,97,.8)';ctx.strokeRect(-8*s,16*s,16*s,20*s);
  // engine bell
  ctx.fillStyle='#6e7178';ctx.beginPath();ctx.moveTo(-6*s,36*s);ctx.lineTo(6*s,36*s);ctx.lineTo(10*s,44*s);ctx.lineTo(-10*s,44*s);ctx.closePath();ctx.fill();
  // side radiators / panels
  ctx.fillStyle='#a8b0bb';ctx.fillRect(-13*s,19*s,4*s,13*s);ctx.fillRect(9*s,19*s,4*s,13*s);
 }
 ctx.restore();
}
function drawLMStack(ctx,x,y,s=1,ascentLift=0){
 ctx.save();ctx.translate(x,y);
 // descent stage on surface
 ctx.fillStyle='#b89547';ctx.strokeStyle='rgba(30,30,30,.6)';ctx.lineWidth=1.2*s;
 ctx.beginPath();ctx.moveTo(-26*s,0);ctx.lineTo(26*s,0);ctx.lineTo(18*s,-18*s);ctx.lineTo(-18*s,-18*s);ctx.closePath();ctx.fill();ctx.stroke();
 for(const sx of [-28,-14,14,28]){ctx.beginPath();ctx.moveTo(sx*s,-8*s);ctx.lineTo((sx*1.25)*s,14*s);ctx.stroke();ctx.beginPath();ctx.arc((sx*1.25)*s,16*s,3*s,0,TAU);ctx.fill();}
 // ascent stage above
 ctx.save();ctx.translate(0,-24*s-ascentLift);
 ctx.fillStyle='#d8dce6';ctx.fillRect(-12*s,-9*s,24*s,18*s);
 ctx.fillStyle='#8ba0bb';ctx.fillRect(-8*s,-6*s,16*s,7*s);
 ctx.fillStyle='#d8dce6';ctx.fillRect(-6*s,-15*s,12*s,6*s);
 ctx.fillStyle='#f0c96f';ctx.fillRect(-14*s,8*s,28*s,6*s);
 ctx.fillStyle='#60656d';ctx.beginPath();ctx.moveTo(-4*s,14*s);ctx.lineTo(4*s,14*s);ctx.lineTo(7*s,20*s);ctx.lineTo(-7*s,20*s);ctx.closePath();ctx.fill();
 ctx.restore();
 ctx.restore();
}
function drawParachute(ctx,x,y,r,color,lineLen=32){
 ctx.save();ctx.translate(x,y);ctx.fillStyle=color;ctx.beginPath();ctx.arc(0,0,r,Math.PI,0);ctx.closePath();ctx.fill();
 ctx.strokeStyle='rgba(240,245,252,.9)';ctx.lineWidth=1;for(const dx of [-r*.6,0,r*.6]){ctx.beginPath();ctx.moveTo(dx,0);ctx.lineTo(0,lineLen);ctx.stroke();}
 ctx.restore();
}
function returnImage(ctx,img,x,y,width,height,alpha=1){
 if(!img.complete||!img.naturalWidth)return false;
 const ratio=img.naturalWidth/img.naturalHeight;
 const actualW=Math.min(width,height*ratio),actualH=actualW/ratio;
 ctx.save();ctx.globalAlpha=alpha;ctx.drawImage(img,x-actualW/2,y-actualH/2,actualW,actualH);ctx.restore();return true;
}
function returnSubImage(ctx,img,sxN,syN,swN,shN,x,y,width,height,alpha=1){
 if(!img.complete||!img.naturalWidth)return false;
 const sx=img.naturalWidth*sxN, sy=img.naturalHeight*syN, sw=img.naturalWidth*swN, sh=img.naturalHeight*shN;
 const ratio=sw/sh;
 const actualW=Math.min(width,height*ratio), actualH=actualW/ratio;
 ctx.save();ctx.globalAlpha=alpha;ctx.drawImage(img,sx,sy,sw,sh,x-actualW/2,y-actualH/2,actualW,actualH);ctx.restore();return true;
}
function paintReturnSequence(ctx,w,h){
 const t=eva.returnTime, phase=eva.returnPhase;
 ctx.save();ctx.setTransform(rc.getTransform());
 const sky=ctx.createLinearGradient(0,0,0,h);sky.addColorStop(0,'#020611');sky.addColorStop(1,'#152237');ctx.fillStyle=sky;ctx.fillRect(0,0,w,h);
 for(const s of surfaceStars){ctx.fillStyle=`rgba(222,238,255,${s.a})`;ctx.fillRect(s.x*w,s.y*h,s.s,s.s)}
 ctx.textAlign='center';ctx.fillStyle='#f3faff';ctx.font='bold 18px system-ui';
 let caption='';let heading='';const midX=w/2,midY=h*.47;
 if(phase==='boarding'){
  const floor=paintReturnSurface(ctx,w,h);
  heading='CREW BOARDING · SAMPLES SECURED';caption='The crew brings samples aboard the lunar module before ascent.';
  returnImage(ctx,returnBoardingSprite,w*.53,floor-46,Math.min(w*.22,h*.22),h*.18);
  const q=Math.min(1,t/2.4);ctx.save();ctx.translate(w*.24+w*.25*q,floor-3);ctx.globalAlpha=1-Math.max(0,(q-.65)/.35);renderAstronautAsset(ctx,0,0,94,false,true,1);ctx.restore();
 }else if(phase==='ascent'){
  const floor=paintReturnSurface(ctx,w,h);heading='LUNAR MODULE · ASCENT STAGE LIFTOFF';
  caption='The descent stage stays on the Moon while the ascent stage rises with its engine plume fully visible.';
  const q=Math.min(1,Math.max(0,(t-2.4)/2.9));
  const baseW=Math.min(w*.31,h*.29), baseH=h*.19;
  const ascentW=Math.min(w*.24,h*.26), ascentH=h*.34;
  const ascentX=midX+Math.sin(t*6)*1.1;
  const ascentY=floor-82-q*h*.17;
  returnImage(ctx,returnDescentSprite,midX,floor-24,baseW,baseH);
  returnImage(ctx,returnAscentSprite,ascentX,ascentY,ascentW,ascentH);
 }else if(phase==='rendezvous'){
  heading='LUNAR ORBIT · RENDEZVOUS & DOCKING';
  caption='The ascent stage docks with the orbiting Command and Service Module.';
  const q=Math.min(1,Math.max(0,(t-5.3)/3));
  ctx.save();ctx.translate(midX,midY);ctx.scale(.78+q*.14,.78+q*.14);returnImage(ctx,returnDockingSprite,0,0,Math.min(w*.80,h*.99),h*.85);ctx.restore();
 }else if(phase==='tei'){
  heading='TRANS-EARTH INJECTION · SERVICE MODULE BURN';
  caption='The CSM main engine fires, sending the crew toward Earth.';
  const q=Math.min(1,Math.max(0,(t-8.3)/3));
  const earthX=w*.81,earthY=h*.28,earthSize=Math.min(124,h*.24);
  if(earthSprite.complete&&earthSprite.naturalWidth)ctx.drawImage(earthSprite,earthX-earthSize/2,earthY-earthSize/2,earthSize,earthSize);
  const x=w*.40+q*w*.15,y=midY+30-q*h*.11;
  returnImage(ctx,returnTeiSprite,x,y,Math.min(w*.58,h*.85)*(1-q*.18),h*.81*(1-q*.18));
 }else if(phase==='reentry'){
  heading='EARTH REENTRY · COMMAND MODULE ONLY';
  caption='After Service Module separation, the heat shield protects the crew.';
  const q=Math.min(1,Math.max(0,(t-11.3)/3.3));
  const atmosphere=ctx.createLinearGradient(0,h*.65,0,h);atmosphere.addColorStop(0,'rgba(29,91,169,.03)');atmosphere.addColorStop(1,'rgba(34,122,222,.6)');ctx.fillStyle=atmosphere;ctx.fillRect(0,h*.6,w,h*.4);
  returnImage(ctx,returnReentrySprite,midX+q*w*.06,midY+q*h*.08,Math.min(w*.65,h*.94),h*.83);
 }else if(phase==='splashdown'){
  heading='PARACHUTES · DESCENT TO THE PACIFIC';
  caption='Three main parachutes slow the Command Module for splashdown.';
  const q=Math.min(1,Math.max(0,(t-14.6)/2.8));
  returnImage(ctx,returnParachutesSprite,midX,midY+q*h*.14,Math.min(w*.64,h*.88),h*.87);
 }else{
  heading='MISSION COMPLETE · SPLASHDOWN AND RECOVERY';
  caption='The capsule floats in the ocean while the recovery ship and aircraft arrive to pick up the astronauts.';
  const sky2=ctx.createLinearGradient(0,0,0,h*.66);sky2.addColorStop(0,'#081527');sky2.addColorStop(.52,'#4b7fb6');sky2.addColorStop(1,'#cfe4f4');ctx.fillStyle=sky2;ctx.fillRect(0,0,w,h*.66);
  // slow sky bands / clouds
  ctx.fillStyle='rgba(255,255,255,.12)';
  for(let i=0;i<3;i++){const cx=(w*(.18+i*.29)+Math.sin(t*.18+i)*16)% (w+240)-120; ctx.beginPath(); ctx.ellipse(cx,110+i*38,120,24,0,0,TAU); ctx.fill();}
  const oceanTop=h*.62;
  const sea=ctx.createLinearGradient(0,oceanTop,0,h);sea.addColorStop(0,'#236ca3');sea.addColorStop(.5,'#115381');sea.addColorStop(1,'#0b385d');ctx.fillStyle=sea;ctx.fillRect(0,oceanTop,w,h-oceanTop);
  for(let i=0;i<6;i++){
    const y=oceanTop+16+i*18+Math.sin(t*1.3+i*.75)*3.5;
    ctx.strokeStyle=`rgba(222,240,255,${0.21-i*0.025})`;ctx.lineWidth=2;
    ctx.beginPath();
    for(let x=0;x<=w+12;x+=12){const wy=y+Math.sin((x*.018)+(t*1.7)+i)*4+Math.cos((x*.012)-(t*1.05)-i)*2.2; if(x===0) ctx.moveTo(x,wy); else ctx.lineTo(x,wy);} ctx.stroke();
  }
  const shipBob=Math.sin(t*1.15)*3.5, capBob=Math.sin(t*1.9+1.1)*5.5, heliBob=Math.sin(t*2.2)*4.5;
  // ship on right
  returnImage(ctx,returnRecoveryShipSprite,w*.76,h*.58+shipBob,Math.min(w*.36,h*.52),h*.33);
  // capsule floating separately in foreground water
  returnImage(ctx,returnRecoveryCapsuleSprite,w*.32,h*.69+capBob,Math.min(w*.28,h*.34),h*.24);
  // recovery aircraft / helicopter overhead after splashdown
  returnImage(ctx,returnRecoveryAircraftSprite,w*.57,h*.20+heliBob,Math.min(w*.26,h*.30),h*.16);
 }
 ctx.save();ctx.fillStyle='rgba(5,13,24,.74)';ctx.fillRect(0,0,w,60);ctx.fillRect(0,h-49,w,49);ctx.fillStyle='#f3faff';ctx.font='bold 18px system-ui';ctx.fillText(heading,midX,38);ctx.font='12px system-ui';ctx.fillStyle='#e9f3ff';ctx.fillText(caption,midX,h-23);ctx.restore();
 ctx.restore();
}
function wrapText(ctx,text,x,y,maxWidth,lineHeight){const words=text.split(' ');let line='';for(const word of words){const test=line?line+' '+word:word;if(ctx.measureText(test).width>maxWidth&&line){ctx.fillText(line,x,y);line=word;y+=lineHeight;}else line=test;}if(line)ctx.fillText(line,x,y)}
$('resetRover').onclick=resetRover;$('roverJump').textContent='↑ JUMP';$('roverScan').textContent='E · INTERACT / TOOL';$('roverScan').onclick=evaInteract;
for(let [id,key] of [['roverLeft','left'],['roverRight','right']]){const button=$(id);button.addEventListener('pointerdown',e=>{e.preventDefault();button.setPointerCapture(e.pointerId);eva.buttons[key]=true});for(let event of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(event,()=>eva.buttons[key]=false)}
$('roverJump').textContent='↑ JUMP';$('roverJump').onclick=evaJump;
$('closeArtifactPopup').onclick=closeArtifactPopup;
rv.addEventListener('pointerdown',e=>{if(state.mode!=='rover')return;const r=rv.getBoundingClientRect();const x=(e.clientX-r.left)*(rv.width/r.width),y=(e.clientY-r.top)*(rv.height/r.height), dpr=rv.width/r.width; const hit=roverArtifactHits.find(h=>Math.hypot(h.x*dpr-x,h.y*dpr-y)<=h.r*dpr); if(hit){const art=artifactById(hit.id); if(art) openArtifactPopup(art);}});
let lastFrame=performance.now();function tick(now){let dt=Math.min(.05,(now-lastFrame)/1000||0);lastFrame=now;if(state.mode==='map')drawMoon();if(state.mode==='landing'){stepFlight(dt);paintFlight()}if(state.mode==='rover'){roverStep(dt);paintRover()}requestAnimationFrame(tick)}
window.__lunarDebug={
 missions,state,flight,eva,astronautStandSprite,astronautJumpSprite,landerSprite,roverSprite,roverDriverSprite,rockSprite,earthSprite,surfaceSprite,footstepsSprite,saturnRocketSprite,returnAscentSprite,returnDescentSprite,returnRecoveryShipSprite,returnRecoveryCapsuleSprite,returnRecoveryAircraftSprite,EVA_ARTIFACTS,nearestArtifact,roverArtifactHits,
 getMode:()=>state.mode,
 setMode,
 selectMission,
 resetFlight,resetRover,startFlight,evaInteract,evaJump,stepFlight,paintFlight,roverStep,paintRover,
 getSnapshot:()=>({mode:state.mode,flight:{...flight},eva:{...eva},xp:state.xp,mission:state.mission}),
 evaGround,onGround,artifactById,openArtifactPopup,closeArtifactPopup,

 holdKey(code,down=true){pressed[code]=down;},
 releaseAll(){Object.keys(pressed).forEach(k=>pressed[k]=false); flight.thrust=flight.left=flight.right=false; eva.buttons.left=false; eva.buttons.right=false;},
 triggerInteract(){evaInteract();},
 triggerJump(){evaJump();}
};
$('sound').onclick=()=>toast('Quiet space mode: no sound is played.');resetFlight();resetRover();selectMission('apollo11',false);updateUI();requestAnimationFrame(tick);
