document.addEventListener("DOMContentLoaded", function() {
    
    var modal = document.getElementById("karsilamaModal");
    var kapatBtn = document.getElementById("kapatX");
    var tamamBtn = document.getElementById("tamamBtn");

    if (modal) {
        setTimeout(function() {
            modal.classList.add("aktif-modal");
        }, 100);

        kapatBtn.addEventListener("click", function() {
            modal.classList.remove("aktif-modal");
        });

        tamamBtn.addEventListener("click", function() {
            modal.classList.remove("aktif-modal");
        });

        modal.addEventListener("click", function(e) {
            if (e.target === modal) {
                modal.classList.remove("aktif-modal");
            }
        });
    }

    var linkler = document.querySelectorAll("nav a");

    linkler.forEach(function(link) {
        link.addEventListener("mouseover", function() {
            this.style.color = "#f1c40f"; 
        });

        link.addEventListener("mouseout", function() {
            this.style.color = ""; 
        });

        link.addEventListener("click", function() {
            linkler.forEach(function(l) {
                l.classList.remove("aktif");
            });
            this.classList.add("aktif");
        });
    });

    var temaBtn = document.getElementById("temaButonu");
    var temalar = ["varsayilan", "tema-koyu", "tema-doga"];
    var suankiTemaIndex = 0;

    if (temaBtn) {
        temaBtn.addEventListener("click", function() {
            if (temalar[suankiTemaIndex] !== "varsayilan") {
                document.body.classList.remove(temalar[suankiTemaIndex]);
            }
            suankiTemaIndex++;
            if (suankiTemaIndex >= temalar.length) { suankiTemaIndex = 0; }
            if (temalar[suankiTemaIndex] !== "varsayilan") {
                document.body.classList.add(temalar[suankiTemaIndex]);
            }
            var temaIsimleri = ["🎨 Tema: Normal", "🌙 Tema: Koyu", "🌿 Tema: Doğa"];
            temaBtn.textContent = temaIsimleri[suankiTemaIndex];
        });
    }

    var listeAlani = document.getElementById("aktiviteListesi");
    if (listeAlani) {
        var aktiviteler = ["Tekne Turu", "Tüplü Dalış", "Gurme Restoranlar", "Tarihi Fener Gezisi"];
        var detaylar = [
            "Maviliklere yelken açın, koyları keşfedin.",
            "Deniz altındaki renkli dünyayı görün.",
            "Deniz ürünlerinin en tazesini tadın.",
            "Şehrin tarihine tanıklık edin ve manzarayı izleyin."
        ];
        var bilgiKutusu = document.getElementById("bilgiKutusu");

        aktiviteler.forEach(function(item, index) {
            var li = document.createElement("li");
            li.textContent = item;
            li.addEventListener("mouseover", function() {
                bilgiKutusu.style.display = "block";
                bilgiKutusu.textContent = "💡 " + detaylar[index];
            });
            li.addEventListener("mouseout", function() {
                bilgiKutusu.style.display = "none";
            });
            listeAlani.appendChild(li);
        });
    }

    var begenBtn = document.getElementById("begenBtn");
    var sayacText = document.getElementById("sayac");
    var sayi = 100; 

    if (begenBtn) {
        sayacText.textContent = sayi;
        begenBtn.addEventListener("click", function() {
            sayi++;
            sayacText.textContent = sayi;
            begenBtn.textContent = "👍 Beğendin!";
            setTimeout(function() { begenBtn.textContent = "👍 Beğen"; }, 1000);
        });
    }

    var form = document.getElementById("iletisimFormu");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            var ad = document.getElementById("ad").value;
            var mail = document.getElementById("mail").value;
            var mesaj = document.getElementById("mesaj").value;

            if (ad === "" || mail === "" || mesaj === "") {
                alert("⚠️ Lütfen boş alan bırakmayın!");
            } else {
                alert("✅ Teşekkürler " + ad + ", mesajın bize ulaştı!");
                form.reset();
            }
        });
    }

    var resim = document.getElementById("etkilesimliResim");
    if (resim) {
        resim.addEventListener("click", function() {
            resim.classList.toggle("buyumus");
        });
    }
});