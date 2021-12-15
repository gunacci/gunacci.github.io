
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

if ( document.URL.includes("index.html")||document.URL.includes("oNama.html")||document.URL.includes("autor.html") ) {
  let sveSlike = document.querySelectorAll("img");

for(let i = 0; i < sveSlike.length; i++){
  sveSlike[i].addEventListener("click", function() {
         document.getElementById("modalniRoditelj").style.display="flex";
        document.getElementById("modalniKontejner").innerHTML=`<img src="${sveSlike[i].src}" alt="${sveSlike[i].alt}"/ id="modalnaSlika">`+`<p id="modalniTekst"></p>`;
        document.getElementById("modalniKontejner").style.display="block";
       
  });
}

  document.getElementById("modalniRoditelj").addEventListener("click", function() {
    document.getElementById("modalniRoditelj").style.display="none";
    document.getElementById("modalniKontejner").style.display="none";
  });

  document.getElementById("modalniKontejner").addEventListener("click", function() {
    document.getElementById("modalniRoditelj").style.display="none";
    document.getElementById("modalniKontejner").style.display="none";
  });
}

// modalni div prodavnica

else if ( document.URL.includes("prodavnica.html") ) {

  let prodavnicaSlike = main.querySelectorAll("img");
  let prodavnicaTekstNaslovi= main.querySelectorAll("h4");
  let prodavnicaOpisi=main.querySelectorAll("p");
  let prodavnicaCene=main.querySelectorAll(".cena");
  for(let i = 0; i < prodavnicaSlike .length; i++){
    prodavnicaSlike [i].addEventListener("click", function() {
           document.getElementById("modalniRoditelj").style.display="flex";
          document.getElementById("modalniKontejner2").innerHTML=`<div><img src="${prodavnicaSlike[i].src}" alt="${prodavnicaSlike[i].alt}" id="modalnaSlika2"/></div>`+`<article class="jednostavanPasus">
          <h4>${prodavnicaTekstNaslovi[i].innerHTML}</h4>
          <p> ${prodavnicaOpisi[i].innerHTML}
          </p>
              <span class="cena">${prodavnicaCene[i].innerHTML}</span></a>
              <span class="korpa"><i class="fa fa-shopping-cart"></i></span>
      </article>`;
          document.getElementById("modalniKontejner2").style.display="flex";
          document.getElementById("modalniRoditelj").addEventListener("click", function() {
            document.getElementById("modalniRoditelj").style.display="none";
            document.getElementById("modalniKontejner2").style.display="none";
    });
  }


  


  
    
  );
  
}
}