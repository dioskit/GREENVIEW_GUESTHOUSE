(function(){
  var IMG="assets/images/";
  var WA="https://wa.me/917006121008";

  // --- mobile menu
  var menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("nav");
  menuBtn.addEventListener("click",function(){var open=nav.classList.toggle("open");menuBtn.setAttribute("aria-expanded",String(open))});
  nav.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){nav.classList.remove("open");menuBtn.setAttribute("aria-expanded","false")})});

  // --- hero slideshow: [file, focal point]
  var slides=[["2.jpg","50% 50%"],["4-web.jpg","50% 60%"],["6.jpg","50% 82%"],["3.jpeg","50% 50%"],["7.jpeg","50% 40%"],["1-web.jpg","50% 55%"],["5-web.jpg","50% 70%"]];
  var box=document.getElementById("slides"),dots=document.getElementById("dots"),cur=0,timer;
  slides.forEach(function(sl,i){
    var d=document.createElement("div");d.className="slide"+(i?"":" on");
    d.innerHTML='<img src="'+IMG+'landingPageSlide_images/'+sl[0]+'" alt="" style="object-position:'+sl[1]+'" '+(i?'loading="lazy"':'fetchpriority="high"')+'>';
    box.appendChild(d);
    var b=document.createElement("button");b.type="button";b.setAttribute("aria-label","Show photo "+(i+1));if(!i)b.setAttribute("aria-current","true");
    b.addEventListener("click",function(){go(i);restart()});dots.appendChild(b);
  });
  function go(i){box.children[cur].classList.remove("on");dots.children[cur].removeAttribute("aria-current");cur=i;box.children[cur].classList.add("on");dots.children[cur].setAttribute("aria-current","true")}
  var still=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function restart(){clearInterval(timer);if(!still)timer=setInterval(function(){go((cur+1)%slides.length)},6000)}
  restart();

  // --- facilities
  var ic={
    bath:'<path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zM6 12V6a2 2 0 0 1 4 0"/>',
    water:'<path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/>',
    wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r="1"/>',
    power:'<path d="M13 2 5 14h6l-1 8 8-12h-6z"/>',
    cup:'<path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM17 10h2a2 2 0 0 1 0 4h-2M8 3v3M12 3v3"/>',
    leaf:'<path d="M5 19c0-8 6-14 15-14 0 9-6 15-14 15M5 19l7-7"/>',
    peak:'<path d="m2 20 7-12 4 6 3-4 6 10z"/>',
    car:'<path d="M3 13l2-6h14l2 6v5H3zM3 13h18"/><circle cx="7" cy="17" r="1.5"/><circle cx="17" cy="17" r="1.5"/>',
    plane:'<path d="M2 16l20-8-8 12-2-5z"/>',
    bike:'<circle cx="6" cy="16" r="3.5"/><circle cx="18" cy="16" r="3.5"/><path d="M6 16l4-7h5l3 7M10 9l2 7"/>',
    doc:'<path d="M6 3h9l4 4v14H6zM9 12h7M9 16h7"/>',
    shirt:'<path d="M8 3 3 6l2 4 3-1v12h8V9l3 1 2-4-5-3a4 4 0 0 1-8 0z"/>'
  };
  var fac=[["bath","Attached bathrooms","In every room"],["water","Hot water","24 hours a day"],["wifi","Wi-Fi","Throughout the house"],["power","Power backup","For the usual Leh power cuts"],["cup","Breakfast and meals","Home-cooked in our kitchen"],["leaf","Garden seating","Tea in the sun"],["peak","Mountain views","Best at sunrise"],["car","Parking","For cars and bikes"],["plane","Airport pickup","Send us your flight"],["bike","Bike and taxi help","We know reliable people"],["doc","Permit help","Inner Line Permits arranged"],["shirt","Laundry","Ask at the desk"]];
  document.getElementById("facList").innerHTML=fac.map(function(f){return '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+ic[f[0]]+'</svg><span><b>'+f[1]+'</b><small>'+f[2]+'</small></span></li>'}).join("");

  // --- experiences: [time, title, price, includes, image, text]
  var exp=[
    ["Sunrise","Sunrise walk to Shanti Stupa","500","refreshments included","morning_walk_to_shanti_stupa.jpeg","Set off in the cool before dawn and climb to Shanti Stupa as the first light reaches the peaks around Leh. We walk at an easy pace, then share something warm to drink while the town wakes up below."],
    ["Sunset","Sunset walk to Tsemo","500","refreshments included","sunset_walk_to_tsemo.jpeg","Wind up through the old town lanes to Tsemo as the evening turns gold. From the top you see the whole valley, Leh Palace and the Stok range, and we stop for refreshments on the way back down."],
    ["Half day","Picnic by the stream in Gangles","1,500","everything included","picnic_at_gangles.jpeg","Spend a slow afternoon in the village of Gangles, beside a mountain stream just outside Leh. We pack the food, the tea and the blankets; you bring your appetite and a book."],
    ["Evening","Cook a Ladakhi meal with the family","800","dinner included","cookwithhost.jpeg","Join us in our kitchen to make a home-style Ladakhi meal, from kneading the dough to the last stir of the pot. Then sit down together and eat what you made."],
    ["Morning","Leh old town walk","800","guided walk","old_town_walk.jpeg","Explore the narrow lanes, old houses and hidden corners of Leh's old town with someone who grew up around them. We share the stories behind the places most visitors walk straight past."]
  ];
  var ex=document.getElementById("expList"),checks=document.getElementById("f-exp");
  exp.forEach(function(e,i){
    ex.insertAdjacentHTML("beforeend",'<article class="rise"><figure class="ph"><img src="'+IMG+'experiences_images/'+e[4]+'" alt="'+e[1]+'" loading="lazy"></figure><div class="body"><span class="time">'+e[0]+'</span><h3>'+e[1]+'</h3><p>'+e[5]+'</p><div class="meta"><b>₹'+e[2]+'</b> per person, '+e[3]+'</div></div></article>');
    checks.insertAdjacentHTML("beforeend",'<label><input type="checkbox" value="'+e[1]+'">'+e[1].replace(" with the family","")+'</label>');
  });

  // --- explore Ladakh: each place opens a details dialog with an itinerary
  var places=[
    {name:"Pangong Tso",tag:"Overnight",img:"exploreLadakh_images/pangong.jpg",
      short:"The long high-altitude lake that changes from turquoise to deep blue through the day, reached over the Chang La pass.",
      intro:"Pangong Tso stretches for well over a hundred kilometres across the border, at about 4,250 metres. Its water shifts colour with the light, from pale green near the shore to deep blue in the middle, and the bare hills around it make the colours even stronger. Most guests stay one night in a camp or homestay by the lake to see sunset and sunrise there.",
      facts:[["Altitude","About 4,250 m"],["From Leh","5 to 6 hours by road"],["Best time","May to September"],["Permit","Yes, we arrange it"]],
      days:[["Day 1: Leh to Pangong","Leave after breakfast and drive east over Chang La, one of the highest roads in the region. Stop at the top for tea, then continue past Tangtse to reach the lake by afternoon. Walk along the shore and watch the colours change at sunset."],["Day 2: Sunrise and back to Leh","Get up early for the sunrise over the water, then have breakfast at camp. Drive back to Leh the same way and be home with us in time for dinner."]],
      tip:"Spend at least two nights in Leh before going, and pack warm layers. Nights at the lake are cold even in summer."},
    {name:"Tso Moriri",tag:"Overnight",img:"exploreLadakh_images/tsomoriri.jpg",
      short:"A quiet, deep-blue lake in the Changthang plateau, with nomad camps, wild asses and far fewer visitors than Pangong.",
      intro:"Tso Moriri lies in the Changthang plateau, home to the Changpa nomads and their herds of pashmina goats. The lake is calm and remote, ringed by snowy peaks, and the small village of Korzok on its shore has one of the highest monasteries in Ladakh. Look out for kiang (wild asses), black-necked cranes and bar-headed geese along the way.",
      facts:[["Altitude","About 4,500 m"],["From Leh","7 to 8 hours by road"],["Best time","June to September"],["Permit","Yes, we arrange it"]],
      days:[["Day 1: Leh to Tso Moriri","Start early and follow the Indus south-east through Upshi and Chumathang, where you can stop at the hot springs. Climb onto the plateau, passing nomad camps, and reach Korzok by late afternoon."],["Day 2: Korzok and the lakeshore","Visit Korzok monastery in the morning and walk along the shore. In the afternoon, take a short drive to Tso Kar, a smaller salt lake, or simply rest by the water."],["Day 3: Back to Leh","Drive back to Leh after breakfast, with time for a stop at Chumathang on the way."]],
      tip:"This is the highest and most remote trip here, so take it easy on the first evening and keep a light jacket close even in the car."},
    {name:"Nubra Valley",tag:"Overnight",img:"exploreLadakh_images/nubra.jpg",pos:"50% 88%",
      short:"Cross Khardung La to sand dunes, double-humped camels and the villages of Diskit and Hunder.",
      intro:"Nubra is a green valley north of Leh where the Shyok and Nubra rivers meet. It's famous for the white sand dunes at Hunder, where Bactrian camels walk against a backdrop of snowy peaks, and for Diskit monastery with its giant Maitreya Buddha looking down the valley.",
      facts:[["Altitude","About 3,050 m"],["From Leh","4 to 5 hours by road"],["Best time","May to October"],["Permit","Yes, we arrange it"]],
      days:[["Day 1: Leh to Hunder","Drive over Khardung La and down into the valley. Visit Diskit monastery in the afternoon, then head to the Hunder dunes for a camel ride at sunset."],["Day 2: Turtuk or back to Leh","Either drive on to Turtuk, a Balti village close to the border with apricot orchards, or return to Leh. Turtuk needs an extra night."]],
      tip:"Nubra sits lower than Leh, so it's a gentle first overnight trip. You can also continue from Nubra to Pangong along the Shyok river."},
    {name:"Monasteries along the Indus",tag:"Day trip",img:"exploreLadakh_images/3.jpg",
      short:"Thiksey, Hemis, Shey and Alchi are built into the hillsides east and west of Leh, each an easy day out by taxi.",
      intro:"The Indus valley around Leh is lined with centuries-old gompas, many still home to working communities of monks. Thiksey looks like a small Potala Palace on its hill, Hemis is the largest and richest, Shey has a great seated Buddha, and Alchi, to the west, is known for its ancient wall paintings.",
      facts:[["From Leh","20 to 90 minutes"],["Time needed","Full day"],["Best time","Year round"],["Permit","Not needed"]],
      days:[["East circuit","Shey palace in the morning, Thiksey for the morning prayers if you start early, then Hemis in the afternoon. Back in Leh by evening."],["West circuit (another day)","Drive west to Basgo, Likir and Alchi, with lunch by the Indus. Add the confluence of the Indus and Zanskar at Nimmu on the way back."]],
      tip:"Dress modestly, walk clockwise around prayer wheels and stupas, and ask before photographing monks."},
    {name:"Rafting on the Indus and Zanskar",tag:"Day trip",img:"exploreLadakh_images/4.jpg",
      short:"Summer rafting trips with local operators, from gentle stretches for beginners to faster water for the more daring.",
      intro:"In summer, the rivers near Leh are perfect for rafting. The Indus between Phey and Nimmu is calm enough for first-timers, while the Zanskar stretch from Chilling to Nimmu runs through a deep canyon with livelier rapids.",
      facts:[["From Leh","About 1 hour"],["Time needed","Half day"],["Best time","June to August"],["Level","Beginner to intermediate"]],
      days:[["Morning","Drive to the starting point, get kitted out and take a safety briefing. Then spend two to three hours on the water."],["Afternoon","Lunch by the river, then drive back via the confluence at Nimmu and the Magnetic Hill viewpoint."]],
      tip:"Bring a change of clothes and sun protection. The water is glacier-cold even on hot days. We book trusted operators for you."},
    {name:"Hemis National Park",tag:"Day trip or trek",img:"exploreLadakh_images/9.jpg",
      short:"High, rugged country that is home to the snow leopard, blue sheep and the Himalayan ibex, with winter treks for wildlife watchers.",
      intro:"Hemis National Park covers the high valleys south of Leh and is one of the best places in the world to look for snow leopards. Summer visitors can trek the Markha valley through villages and homestays, while winter brings dedicated snow leopard tracking trips in the Rumbak valley.",
      facts:[["From Leh","About 1 hour to the trailhead"],["Time needed","1 day to a week"],["Best time","Summer treks, winter wildlife"],["Permit","Park entry fee"]],
      days:[["Day hike","Drive to Zingchen and walk up the Rumbak valley, watching for blue sheep, marmots and birds of prey. Return to Leh by evening."],["Longer option","Trek the Markha valley over four to six days, staying in village homestays along the way. We can arrange guides and porters."]],
      tip:"Snow leopard sightings need patience and a good spotter. Winter trips are cold but the most rewarding."}
  ];
  var plist=document.getElementById("placeList");
  function photo(p){return '<img src="'+IMG+p.img+'" alt="'+p.name+'"'+(p.pos?' style="object-position:'+p.pos+'"':'')+' loading="lazy" onerror="this.parentNode.classList.add(\'empty\');this.remove()">'}
  plist.innerHTML=places.map(function(p,i){return '<article class="rise" data-i="'+i+'"><figure class="ph" data-name="'+p.name+'">'+photo(p)+'</figure><p class="far">'+p.tag+'</p><h3>'+p.name+'</h3><p>'+p.short+'</p><button class="more" type="button" data-i="'+i+'">Details and itinerary →</button></article>'}).join("");
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

  // --- guest reviews (sample text until real reviews are added)
  var reviews=[
    ["Like staying with family","A real guest review goes here. This sample shows the length we're aiming for: a few sentences about arriving tired from the airport and being met with tea, the warmth of the hosts, how clean and quiet the room was, and how the view of the mountains from the window made it hard to leave in the morning.","Guest name","Agoda","month and year"],
    ["The best local tips","A real guest review goes here. Something like: the host helped us plan every day, sorted our permits for Nubra and Pangong, found us a reliable driver, and told us about places we would never have found on our own. We came back each evening with stories and they always wanted to hear them.","Guest name","Google","month and year"],
    ["Food we still talk about","A real guest review goes here. For example: breakfast in the dining room with the mountains outside, homemade thenthuk on a cold evening, and a cooking session with the family that was the highlight of our trip. The rooms were spotless, the water was hot and the Wi-Fi worked well enough for calls.","Guest name","Agoda","month and year"]
  ];
  document.getElementById("reviewList").innerHTML=reviews.map(function(r){return '<article class="review rise"><span class="sample">Sample text</span><span class="stars" aria-label="5 out of 5">★★★★★</span><h3>'+r[0]+'</h3><p>'+r[1]+'</p><footer><b>'+r[2]+'</b> · '+r[3]+' · '+r[4]+'</footer></article>'}).join("");

  // --- gallery: [file, size class, alt]
  var gal=[["10.jpg","w t","Hotel Green View in the evening light"],["3.jpg","","View of Leh from a room window"],["2.jpg","","View from the balcony"],["5.jpg","","Double room"],["6.jpg","","Bright double room"],["1.jpg","w","The front of Hotel Green View"],["4.jpg","t","Balcony seat among the poplars"],["7.jpg","","Dining room with a view"],["8.jpg","","Courtyard and parking"],["9.jpg","w","Attached bathroom"],["11.jpg","w","Entrance to Hotel Green View"],["12.jpg","w","Room key with the Green View leaf"]];
  document.getElementById("galleryGrid").innerHTML=gal.map(function(g){return '<figure class="ph '+g[1]+'"><img src="'+IMG+'gallery_images/'+g[0]+'" alt="'+g[2]+'" loading="lazy"></figure>'}).join("");

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
    var picked=[].slice.call(checks.querySelectorAll("input:checked")).map(function(c){return c.value});
    var text="Julley! Could you send me today's rate at Hotel Green View?\nArrival: "+$("f-in")+"\nDeparture: "+$("f-out")+"\nGuests: "+$("f-guests")+"\nRoom: "+$("f-room")+(picked.length?"\nInterested in: "+picked.join(", "):"")+"\nName: "+$("f-name");
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
  var hi={nav_rooms:"कमरे",nav_exp:"अनुभव",nav_explore:"लद्दाख घूमें",nav_gallery:"गैलरी",nav_contact:"संपर्क",
    hero_h:"लेह में आपका <em>हरा-भरा कोना</em>",hero_p:"पहाड़ों के नज़ारे, घर के बने खाने और ऐसे मेज़बान के साथ एक आरामदायक, पारिवारिक गेस्ट हाउस, जो लद्दाख में आपके हर दिन की योजना बनाने में मदद करता है।",
    ask_rate:"आज का किराया पूछें",cta_rooms:"कमरे देखें",rooms_eb:"हमारे साथ ठहरें",rooms_h:"कमरे",rooms_p:"हर कमरे में तीन मेहमान तक ठहर सकते हैं और चौबीसों घंटे गर्म पानी मिलता है। किराया मौसम के अनुसार बदलता है, आज का किराया हमसे पूछें।",
    rates_eb:"आज का किराया पूछें",rates_h:"अपनी तारीखें बताइए, हम सबसे अच्छा किराया भेजेंगे",
    fac_eb:"सुविधाएँ",fac_h:"ऊँचाई पर दिन भर घूमने के बाद ज़रूरत की हर चीज़",food_eb:"हमारी रसोई से",food_h:"घर का बना खाना, जैसा हम खाते हैं",
    exp_eb:"हमारे साथ अनुभव",exp_h:"लेह को वैसे देखें जैसे हम जानते हैं",exp_p:"ठहरने के साथ हमारा परिवार लेह के आसपास कुछ छोटी सैर कराता है। पहले से बुक करने की ज़रूरत नहीं, जब मन हो हमें बता दीजिए।",
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
