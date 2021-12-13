
//Ucitavanje padajuceg menija


function ucitajBocniMeni() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Zatvara padajucu listu 
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// modalni div

let sveSlike = document.querySelectorAll("img");

for(let i = 0; i < sveSlike.length; i++){
  sveSlike[i].addEventListener("click", function() {
         document.getElementById("modalniRoditelj").style.display="flex";
        document.getElementById("modalniKontejner").innerHTML=`<img src="${sveSlike[i].src}" alt="${sveSlike[i].alt}"/ id="modalnaSlika">`+`<p id="modalniTekst"></p>`;
        document.getElementById("modalniKontejner").style.display="block";
        /*if( sveSlike[i].hasAttribute("alt"))
        {
          document.getElementById("modalniTekst").innerHTML=`${sveSlike[i].alt}`;
          document.getElementById("modalniTekst").id="modalniStil";
          document.getElementById("modalniTekst").style.display="inline-block";
        }
        else;*/
  });
}

  document.getElementById("modalniRoditelj").addEventListener("click", function() {
    document.getElementById("modalniRoditelj").style.display="none";
    document.getElementById("modalniKontejner").style.display="none";
  });


  let prodavnicaSlike = document.querySelectorAll("slikaArtikal");
  for(let i = 0; i < prodavnicaSlike.length; i++){
    sveSlike[i].addEventListener("click", function() {
           document.getElementById("modalniRoditelj2").style.display="block";
          document.getElementById("modalniKontejner2").innerHTML=`<img src="${prodavnicaSlike[i].img.src}" alt="${prodavnicaSlike[i].img.alt}"/ id="modalnaSlika">`+`<p id="modalniTekst"></p>`;
          document.getElementById("modalniKontejner2").style.display="block";
          if( sveSlike[i].hasAttribute("alt"))
          {
            document.getElementById("modalniTekst").innerHTML=`${prodavnicaSlike[i][i].p.innerHTML}`;
            document.getElementById("modalniTekst").id="modalniStil";
            document.getElementById("modalniTekst").style.display="inline-block";
          }
          else;
    });
  }

  document.getElementById("modalniRoditelj2").addEventListener("click", function() {
    document.getElementById("modalniRoditelj2").style.display="none";
    document.getElementById("modalniKontejner2").style.display="none";
    document.getElementById("modalniTekst").style.display="none";
  });