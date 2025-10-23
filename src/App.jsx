import React, { useState, useEffect, useMemo } from 'react';
import { KITAPLAR } from './data';
import AramaCubugu from './components/AramaCubugu';
import KategoriFiltre from './components/KategoriFiltre';
import KitapListe from './components/KitapListe';
import FavoriPaneli from './components/FavoriPaneli';

// localStorage'dan başlangıç değerini okuma fonksiyonu
const getLocalStorageValue = (key, defaultValue) => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch (error) {
    console.error(`localStorage okuma hatası (${key}):`, error);
    return defaultValue;
  }
};

function App() {
  // 1. State Tanımlamaları ve localStorage'dan okuma
  const [aramaMetni, setAramaMetniState] = useState(() =>
    getLocalStorageValue('sonAramaMetni', '')
  );
  const [secilenKategori, setSecilenKategori] = useState('Tümü');
  const [favoriKitapIdleri, setFavoriKitapIdleri] = useState(() =>
    getLocalStorageValue('favoriKitapIdleri', [])
  );

  // 2. localStorage İşlemleri (Kalıcılık)
  
  // Arama metnini kaydet
  useEffect(() => {
    localStorage.setItem('sonAramaMetni', JSON.stringify(aramaMetni));
  }, [aramaMetni]);

  // Favori ID'lerini kaydet
  useEffect(() => {
    localStorage.setItem('favoriKitapIdleri', JSON.stringify(favoriKitapIdleri));
  }, [favoriKitapIdleri]);


  // 3. Fonksiyonlar (Aksiyon Yöneticileri)

  // Arama metnini günceller (prop olarak AramaCubugu'na verilir)
  const handleSetAramaMetni = (yeniMetin) => {
    setAramaMetniState(yeniMetin);
  };

  // Favori ekleme/çıkarma işlemini yapar (prop olarak KitapKartı ve FavoriPaneli'ne verilir)
  const favoriDurumunuDegistir = (kitapId) => {
    setFavoriKitapIdleri(prevIds => {
      if (prevIds.includes(kitapId)) {
        // Favorilerden çıkar
        return prevIds.filter(id => id !== kitapId);
      } else {
        // Favorilere ekle
        return [...prevIds, kitapId];
      }
    });
  };

  // 4. Filtreleme Mantığı (useMemo ile performansı artırma)
  const filtreliKitaplar = useMemo(() => {
    return KITAPLAR.filter(kitap => {
      // Kategori Filtresi
      const kategoriUygun = secilenKategori === 'Tümü' || kitap.kategori === secilenKategori;

      // Arama Filtresi
      const arama = aramaMetni.toLowerCase();
      const aramaUygun = kitap.baslik.toLowerCase().includes(arama) || kitap.yazar.toLowerCase().includes(arama);

      return kategoriUygun && aramaUygun;
    });
  }, [aramaMetni, secilenKategori]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>Mini Kitaplık</h1>

      {/* Kontrol Alanı */}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <AramaCubugu aramaMetni={aramaMetni} setAramaMetni={handleSetAramaMetni} />
        <KategoriFiltre secilenKategori={secilenKategori} setSecilenKategori={setSecilenKategori} />
      </div>

      {/* Ana İçerik */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        
        {/* Sol Panel: Kitap Listesi */}
        <KitapListe
          filtreliKitaplar={filtreliKitaplar}
          favoriKitapIdleri={favoriKitapIdleri}
          favoriDurumunuDegistir={favoriDurumunuDegistir}
        />

        {/* Sağ Panel: Favoriler */}
        <FavoriPaneli
          favoriKitapIdleri={favoriKitapIdleri}
          tumKitaplar={KITAPLAR}
          favoriDurumunuDegistir={favoriDurumunuDegistir}
        />
      </div>
    </div>
  );
}

export default App;