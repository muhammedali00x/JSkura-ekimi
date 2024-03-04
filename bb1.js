const takimlar = [
    { ad: "Takım 1", logo: "images/ajax.png" },
    { ad: "Takım 2", logo: "images/arsenal.png" },
    { ad: "Takım 3", logo: "images/barcelona.png" },
    { ad: "Takım 4", logo: "images/chelsea.png" },
    { ad: "Takım 5", logo: "images/galatasaray.png" },
    { ad: "Takım 6", logo: "images/inter.png" },
    { ad: "Takım 7", logo: "images/milan.png" },
    { ad: "Takım 8", logo: "images/realmadrid.png" }
  ];
  
  function kuraCek() {
    const kuraSonuclari = shuffle(takimlar);
    const gruplar = document.getElementById("gruplar");
    gruplar.innerHTML = "";
    
    for (let i = 0; i < kuraSonuclari.length; i += 2) {
      const grupDiv = document.createElement("div");
      grupDiv.classList.add("grup");
      
      const takim1 = kuraSonuclari[i];
      const takim2 = kuraSonuclari[i + 1];
      
      const takimlarHTML = `
        <img src="${takim1.logo}" alt="${takim1.ad}">
        <img src="${takim2.logo}" alt="${takim2.ad}">
      `;
      
      grupDiv.innerHTML = takimlarHTML;
      gruplar.appendChild(grupDiv);
    }
  }
  
  function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  