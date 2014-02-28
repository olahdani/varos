mezo({
  vizszintes: 5,
  fuggoleges: 2,
  nev: 'Bettina2003 háza',
  leiras: 'Ez egy ház',
  ralepeskor: function () {
    
  nev = parancs("Add meg a neved!");
  
  koszones = "Szia" +nev;
  
  kiir (koszones);
  
  szam = kerdez ("Mennyi 152+848?");
  
  if (szam ==1000) kiir ("Helyes!")
  
  else kiir ("Helytelen!");
  }
})

