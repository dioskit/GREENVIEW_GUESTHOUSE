(function(){
  var IMG="assets/images/";
  var WA="https://wa.me/917006121008";

  // --- mobile menu
  var menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("nav");
  menuBtn.addEventListener("click",function(){var open=nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",String(open))});
  nav.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){nav.classList.remove("open");menuBtn.setAttribute("aria-expanded","false")})});

  // --- hero slideshow (slides and dots are in the HTML)
  var box=document.getElementById("slides"),dots=document.getElementById("dots"),cur=0,timer;
  [].forEach.call(dots.children,function(b,i){b.addEventListener("click",function(){go(i);restart()})});
  function go(i){box.children[cur].classList.remove("on");dots.children[cur].removeAttribute("aria-current");cur=i;box.children[cur].classList.add("on");dots.children[cur].setAttribute("aria-current","true")}
  var still=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function restart(){clearInterval(timer);if(!still)timer=setInterval(function(){go((cur+1)%box.children.length)},6000)}
  restart();


  // --- explore Ladakh: each place opens a details dialog with an itinerary
  var places=[
    {name:"Pangong Tso",tag:"Overnight",img:"exploreLadakh_images/pangong.jpg",
      intro:"Pangong Tso stretches for well over a hundred kilometres across the border, at about 4,250 metres. Its water shifts colour with the light, from pale green near the shore to deep blue in the middle, and the bare hills around it make the colours even stronger. Most guests stay one night in a camp or homestay by the lake to see sunset and sunrise there.",
      facts:[["Altitude","About 4,250 m"],["From Leh","5 to 6 hours by road"],["Best time","May to September"],["Permit","Yes, we arrange it"]],
      days:[["Day 1: Leh to Pangong","Leave after breakfast and drive east over Chang La, one of the highest roads in the region. Stop at the top for tea, then continue past Tangtse to reach the lake by afternoon. Walk along the shore and watch the colours change at sunset."],["Day 2: Sunrise and back to Leh","Get up early for the sunrise over the water, then have breakfast at camp. Drive back to Leh the same way and be home with us in time for dinner."]],
      tip:"Spend at least two nights in Leh before going, and pack warm layers. Nights at the lake are cold even in summer."},
    {name:"Tso Moriri",tag:"Overnight",img:"exploreLadakh_images/tsomoriri.jpeg",
      intro:"Tso Moriri lies in the Changthang plateau, home to the Changpa nomads and their herds of pashmina goats. The lake is calm and remote, ringed by snowy peaks, and the small village of Korzok on its shore has one of the highest monasteries in Ladakh. Look out for kiang (wild asses), black-necked cranes and bar-headed geese along the way.",
      facts:[["Altitude","About 4,500 m"],["From Leh","7 to 8 hours by road"],["Best time","June to September"],["Permit","Yes, we arrange it"]],
      days:[["Day 1: Leh to Tso Moriri","Start early and follow the Indus south-east through Upshi and Chumathang, where you can stop at the hot springs. Climb onto the plateau, passing nomad camps, and reach Korzok by late afternoon."],["Day 2: Korzok and the lakeshore","Visit Korzok monastery in the morning and walk along the shore. In the afternoon, take a short drive to Tso Kar, a smaller salt lake, or simply rest by the water."],["Day 3: Back to Leh","Drive back to Leh after breakfast, with time for a stop at Chumathang on the way."]],
      tip:"This is the highest and most remote trip here, so take it easy on the first evening and keep a light jacket close even in the car."},
    {name:"Nubra Valley",tag:"Overnight",img:"exploreLadakh_images/nubra.jpg",pos:"50% 88%",
      intro:"Nubra is a green valley north of Leh where the Shyok and Nubra rivers meet. It's famous for the white sand dunes at Hunder, where Bactrian camels walk against a backdrop of snowy peaks, and for Diskit monastery with its giant Maitreya Buddha looking down the valley.",
      facts:[["Altitude","About 3,050 m"],["From Leh","4 to 5 hours by road"],["Best time","May to October"],["Permit","Yes, we arrange it"]],
      days:[["Day 1: Leh to Hunder","Drive over Khardung La and down into the valley. Visit Diskit monastery in the afternoon, then head to the Hunder dunes for a camel ride at sunset."],["Day 2: Turtuk or back to Leh","Either drive on to Turtuk, a Balti village close to the border with apricot orchards, or return to Leh. Turtuk needs an extra night."]],
      tip:"Nubra sits lower than Leh, so it's a gentle first overnight trip. You can also continue from Nubra to Pangong along the Shyok river."},
    {name:"Monasteries along the Indus",tag:"Day trip",img:"exploreLadakh_images/3.jpg",
      intro:"The Indus valley around Leh is lined with centuries-old gompas, many still home to working communities of monks. Thiksey looks like a small Potala Palace on its hill, Hemis is the largest and richest, Shey has a great seated Buddha, and Alchi, to the west, is known for its ancient wall paintings.",
      facts:[["From Leh","20 to 90 minutes"],["Time needed","Full day"],["Best time","Year round"],["Permit","Not needed"]],
      days:[["East circuit","Shey palace in the morning, Thiksey for the morning prayers if you start early, then Hemis in the afternoon. Back in Leh by evening."],["West circuit (another day)","Drive west to Basgo, Likir and Alchi, with lunch by the Indus. Add the confluence of the Indus and Zanskar at Nimmu on the way back."]],
      tip:"Dress modestly, walk clockwise around prayer wheels and stupas, and ask before photographing monks."},
    {name:"Rafting on the Indus and Zanskar",tag:"Day trip",img:"exploreLadakh_images/4.jpg",
      intro:"In summer, the rivers near Leh are perfect for rafting. The Indus between Phey and Nimmu is calm enough for first-timers, while the Zanskar stretch from Chilling to Nimmu runs through a deep canyon with livelier rapids.",
      facts:[["From Leh","About 1 hour"],["Time needed","Half day"],["Best time","June to August"],["Level","Beginner to intermediate"]],
      days:[["Morning","Drive to the starting point, get kitted out and take a safety briefing. Then spend two to three hours on the water."],["Afternoon","Lunch by the river, then drive back via the confluence at Nimmu and the Magnetic Hill viewpoint."]],
      tip:"Bring a change of clothes and sun protection. The water is glacier-cold even on hot days. We book trusted operators for you."},
    {name:"Hemis National Park",tag:"Day trip or trek",img:"exploreLadakh_images/9.jpg",
      intro:"Hemis National Park covers the high valleys south of Leh and is one of the best places in the world to look for snow leopards. Summer visitors can trek the Markha valley through villages and homestays, while winter brings dedicated snow leopard tracking trips in the Rumbak valley.",
      facts:[["From Leh","About 1 hour to the trailhead"],["Time needed","1 day to a week"],["Best time","Summer treks, winter wildlife"],["Permit","Park entry fee"]],
      days:[["Day hike","Drive to Zingchen and walk up the Rumbak valley, watching for blue sheep, marmots and birds of prey. Return to Leh by evening."],["Longer option","Trek the Markha valley over four to six days, staying in village homestays along the way. We can arrange guides and porters."]],
      tip:"Snow leopard sightings need patience and a good spotter. Winter trips are cold but the most rewarding."}
  ];
  var plist=document.getElementById("placeList");
  function photo(p){return '<img src="'+IMG+p.img+'" alt="'+p.name+'"'+(p.pos?' style="object-position:'+p.pos+'"':'')+'>'}
  var dlg=document.getElementById("placeDialog");
  function openPlace(i){
    var p=places[i];
    var ph=document.getElementById("pdPhoto");ph.className="ph pd-photo";ph.setAttribute("data-name",p.name);ph.innerHTML=photo(p);
    document.getElementById("pdTag").textContent=p.tag;
    document.getElementById("pdTitle").textContent=p.name;
    document.getElementById("pdIntro").textContent=p.intro;
    document.getElementById("pdFacts").innerHTML=p.facts.map(function(f){return '<div><dt>'+f[0]+'</dt><dd>'+f[1]+'</dd></div>'}).join("");
    document.getElementById("pdDays").innerHTML=p.days.map(function(d){return '<li><b>'+d[0]+'</b><span>'+d[1]+'</span></li>'}).join("");
    document.getElementById("pdTip").textContent=p.tip;
    document.getElementById("pdAsk").href=WA+"?text="+encodeURIComponent("Julley! Could you help me plan a trip to "+p.name+" during my stay?");
    if(dlg.showModal)dlg.showModal();else dlg.setAttribute("open","");
  }
  plist.addEventListener("click",function(e){var a=e.target.closest("article[data-i]");if(a)openPlace(+a.dataset.i)});
  document.getElementById("pdClose").addEventListener("click",function(){dlg.close()});
  dlg.addEventListener("click",function(e){if(e.target===dlg)dlg.close()});

  var yr=document.getElementById("year");if(yr)yr.textContent=new Date().getFullYear();

  // --- photo viewer for room and gallery photos
  var lb=document.getElementById("lightbox"),lbImg=document.getElementById("lbImg"),lbCap=document.getElementById("lbCap"),group=[],at=0;
  function show(i){at=(i+group.length)%group.length;var im=group[at];lbImg.src=im.currentSrc||im.src;lbImg.alt=im.alt;lbCap.textContent=im.alt}
  document.addEventListener("click",function(e){
    var im=e.target.closest(".gallery img, .room img");if(!im)return;
    var scope=im.closest(".gallery, .room");group=[].slice.call(scope.querySelectorAll("img"));show(group.indexOf(im));
    if(lb.showModal)lb.showModal();else lb.setAttribute("open","");
  });
  document.getElementById("lbClose").addEventListener("click",function(){lb.close()});
  document.getElementById("lbPrev").addEventListener("click",function(){show(at-1)});
  document.getElementById("lbNext").addEventListener("click",function(){show(at+1)});
  lb.addEventListener("click",function(e){if(e.target===lb)lb.close()});
  lb.addEventListener("keydown",function(e){if(e.key==="ArrowLeft")show(at-1);if(e.key==="ArrowRight")show(at+1)});

  // --- ask today's rate: builds a WhatsApp message
  var form=document.getElementById("enquiry"),send=document.getElementById("sendWa"),note=document.getElementById("formNote");
  form.addEventListener("submit",function(ev){
    ev.preventDefault();
    var $=function(id){return document.getElementById(id).value.trim()};
    var missing=[["f-in","arrival date"],["f-out","departure date"],["f-name","name"]].filter(function(r){return !$(r[0])}).map(function(r){return r[1]});
    if(missing.length){note.textContent="Please add your "+missing.join(", ")+".";send.classList.remove("ready");return}
    var text="Julley! Could you send me today's rate at Hotel Green View?\nArrival: "+$("f-in")+"\nDeparture: "+$("f-out")+"\nGuests: "+$("f-guests")+"\nRoom: "+$("f-room")+"\nName: "+$("f-name");
    send.href=WA+"?text="+encodeURIComponent(text);
    send.classList.add("ready");
    note.textContent="Your message is ready. Tap “Open WhatsApp to send” to check it and send it to us.";
  });

  // --- gentle rise as sections enter (content is already visible)
  if("IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{rootMargin:"0px 0px -40px 0px"});
    document.querySelectorAll(".rise").forEach(function(el){io.observe(el)});
  }

  // --- English / Hindi
  var hi={nav_rooms:"कमरे",nav_exp:"आसपास",nav_explore:"लद्दाख घूमें",nav_gallery:"गैलरी",nav_contact:"संपर्क",
    hero_h:"जहाँ पहाड़ <em>घर जैसे लगते हैं</em>",hero_p:"पहाड़ों के नज़ारे, घर के बने खाने और ऐसे मेज़बान के साथ एक आरामदायक, पारिवारिक गेस्ट हाउस, जो लद्दाख में आपके हर दिन की योजना बनाने में मदद करता है।",
    ask_rate:"आज का किराया पूछें",cta_rooms:"कमरे देखें",rooms_eb:"हमारे साथ ठहरें",rooms_h:"कमरे",rooms_p:"तीन तरह के कमरे, हर एक में अटैच बाथरूम और चौबीसों घंटे गर्म पानी। किराया मौसम के साथ बदलता है, इसलिए आज का किराया हमसे पूछें।",
    rates_eb:"आज का किराया पूछें",rates_h:"अपनी तारीखें बताइए, हम सबसे अच्छा किराया भेजेंगे",
    fac_eb:"सुविधाएँ",fac_h:"ऊँचाई पर दिन भर घूमने के बाद ज़रूरत की हर चीज़",food_eb:"हमारी रसोई से",food_h:"घर का बना खाना, जैसा हम खाते हैं",
    near_eb:"आसपास के दर्शनीय स्थल",near_h:"लेह को खुद घूमें",near_p:"ये जगहें ग्रीन व्यू से पैदल या थोड़ी टैक्सी की दूरी पर हैं। जाने का सबसे अच्छा समय और रास्ता हमसे पूछें।",
    story_eb:"हमारी कहानी",explore_eb:"लद्दाख घूमें",explore_h:"लेह से शुरू करें, फिर आगे बढ़ें",gal_eb:"गैलरी",gal_h:"एक नज़र",rev_eb:"मेहमानों की राय",rev_h:"मेहमान क्या कहते हैं",faq_eb:"आने से पहले",faq_h:"यात्रियों के सवाल",con_eb:"संपर्क और बुकिंग",con_h:"हमें सीधे मैसेज करें"};
  var en={};document.querySelectorAll("[data-i18n]").forEach(function(el){if(!(el.dataset.i18n in en))en[el.dataset.i18n]=el.innerHTML});
  function setLang(l){
    document.documentElement.lang=l==="hi"?"hi":"en";
    document.querySelectorAll("[data-i18n]").forEach(function(el){var k=el.dataset.i18n;el.innerHTML=(l==="hi"&&hi[k])?hi[k]:en[k]});
    document.querySelectorAll(".lang button").forEach(function(b){b.setAttribute("aria-pressed",String(b.dataset.lang===l))});
    try{localStorage.setItem("gv-lang",l)}catch(e){}
  }
  document.querySelectorAll(".lang button").forEach(function(b){b.addEventListener("click",function(){setLang(b.dataset.lang)})});
  try{if(localStorage.getItem("gv-lang")==="hi")setLang("hi")}catch(e){}
})();
