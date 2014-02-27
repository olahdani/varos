function letezoMezo(vizszintes, fuggoleges) {
  // A fájlnév egyszerűen a koordinátákból képezzük.
  fajlnev = "/mezok/" + vizszintes + 'x' + fuggoleges + '.js';
  var js = document.createElement("script");
  js.type = "text/javascript";
  js.src = fajlnev;

  document.body.appendChild(js);
}

alapKep = 'haz.png';
function mezo(mezoOpciok) {
  var mezo = document.createElement("div");
  mezo.classList.add('mezo');
  mezo.style.backgroundImage = "url(/kepek/" + (mezoOpciok.kep || alapKep) + ")";
  mezo.style.left = (mezoOpciok.vizszintes * 64) + "px"
  mezo.style.top = (mezoOpciok.fuggoleges * 64) + "px"
  document.body.appendChild(mezo);
}

