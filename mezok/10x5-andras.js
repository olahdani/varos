mezo({
  vizszintes: 10,
  fuggoleges: 5,
  nev: 'András',
  leiras: 'Cottage',
kep: 'figura.png',
ralepeskor: function() {
 kiir ("Üdv idegen!");
 nev = kerdez("Mi a neved?");
   say = "Szia, " +nev;
   kiir(say)
   kiir ("Gondolj egy számra! (1-től-10-ig, pozitív, egész szám.) Miután eljutott odáig, hogy a program kitalálta a számot az első kiírás lesz a jó!");
   sz = kerdez ("Kisebb mint 10? (Ezeket írhatod: igen ; nem ;)");
    if (sz == "igen") {
      sz = kerdez("Kisebb mint 9?");
       if (sz == "igen") {
         sz = kerdez("Kisebb mint 8?");
          if (sz == "igen") {
            sz = kerdez("Kisebb mint 7?");
              if (sz == "igen") {
                sz = kerdez("Kisebb mint 6?");
                  if (sz == "igen") {
                    sz = kerdez("Kisebb mint 5?");
                      if (sz == "igen") {
                        sz = kerdez("Kisebb mint 4?");
                          if (sz == "igen") {
                            sz = kerdez("Kisebb mint 3?");
                              if (sz == "igen") {
                                sz = kerdez("Kisebb mint 2?");
                                  if (sz == "igen") {
                                  kiir("Te az 1-es számra gondoltál!");
                                                       }
                            else (sz == "nem") 
                            kiir("Te a 2-es számra gondoltál!");
                                                  }
                          else (sz == "nem") 
                          kiir("Te a 3-es számra gondoltál!");
                                                }          
                        else (sz == "nem") 
                        kiir("Te a 4-es számra gondoltál!");
                                             }
                      else (sz == "nem") 
                      kiir("Te az 5-es számra gondoltál!");
                                       }
                    else (sz == "nem") 
                    kiir("Te a 6-es számra gondoltál!");
                                 }
                  else (sz == "nem") 
                  kiir("Te a 7-es számra gondoltál!");
                            }
              else (sz == "nem") 
              kiir("Te a 8-es számra gondoltál!");
                          }          
           else (sz == "nem") 
           kiir("Te a 9-es számra gondoltál!");
                       }
        else (sz == "nem") 
        kiir("Te a 10-es számra gondoltál!")
}
})

