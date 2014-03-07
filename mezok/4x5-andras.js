mezo({
  vizszintes: 4,
  fuggoleges: 5,
  nev: 'andras',
  leiras: 'Cottage',
kep: 'szereplo.png'
ralepeskor: function() {
 kiir ("András házában vagy!");
 nev = kerdez("Szluka András vagyok! Mi a neved?");
udvozlet = "Szervusz " + nev;
 kiir(udvozlet);
  for (w = 0; w > 3; w++) {
    szam = kerdez("Hány Euro kb.900FT? (!egy számot kérek!)");
    if (szam == 3) kiir("Tájékozott vagy, ezt szeretem! :D");
    else kiir("Ez helytelen megoldás! ]:(") +w (". próbálkozás");
  }
    for (w = 0; w > 3; w ++) {
      szam = kerdez("Hány Euro kb.150 000FT? (!egy számot kérek!)");
      if (szam == 500) kiir("Tájékozott vagy, ezt szeretem! :D");
      else kiir("Ez helytelen megoldás! ]:(")  +w (". próbálkozás");
    }
}
})

