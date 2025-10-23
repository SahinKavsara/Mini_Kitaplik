import React from 'react';
import KitapKarti from './KitapKarti';

const KitapListe = ({ filtreliKitaplar, favoriKitapIdleri, favoriDurumunuDegistir }) => {
  return (
    <div style={{ flex: 2, marginRight: '20px' }}>
      {filtreliKitaplar.length === 0 ? (
        <p>Aradığınız kriterlere uygun kitap bulunamadı.</p>
      ) : (
        filtreliKitaplar.map(kitap => (
          <KitapKarti
            key={kitap.id}
            {...kitap}
            favorideMi={favoriKitapIdleri.includes(kitap.id)}
            favoriDurumunuDegistir={favoriDurumunuDegistir}
          />
        ))
      )}
    </div>
  );
};

export default KitapListe;