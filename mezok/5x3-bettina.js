mezo({
  vizszintes: 5,
  fuggoleges: 2,
  nev: 'Bettina2003 háza',
  leiras: 'Ez egy ház'
  ralapeskor : function () {
    
  nev = parancs("Add meg a neved!");
  
  koszones = "Szia" +nev;
  
  kiir (koszones);
  
  szam = kérdez ("Menny 152+948?");
  
  if (szam ==1000) kiir ("Helyes!")
  
  else kiir ("Helytelen!");
  }
})

