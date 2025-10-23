import React from 'react';

const FavoriPaneli = ({ favoriKitapIdleri, tumKitaplar, favoriDurumunuDegistir }) => {
  const favoriKitaplar = tumKitaplar.filter(kitap => favoriKitapIdleri.includes(kitap.id));

  return (
    <div style={{ flex: 1, padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h3 style={{ marginTop: '0' }}>Favoriler ({favoriKitaplar.length})</h3>
      {favoriKitaplar.length === 0 ? (
        <p>Favorilere eklenmiş kitap yok.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {favoriKitaplar.map(kitap => (
            <li key={kitap.id} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 'bold' }}>{kitap.baslik}</span>
              <button
                onClick={() => favoriDurumunuDegistir(kitap.id)}
                style={{
                  padding: '5px 10px',
                  border: '1px solid #dc3545',
                  backgroundColor: 'white',
                  color: '#dc3545',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.9em'
                }}
              >
                Kaldır
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriPaneli;