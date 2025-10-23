import React from 'react';

const KitapKarti = ({ id, baslik, yazar, kategori, favorideMi, favoriDurumunuDegistir }) => {
  const butonStyle = {
    padding: '8px 15px',
    borderRadius: '20px',
    cursor: 'pointer',
    border: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.3s'
  };

  const favorideStyle = {
    ...butonStyle,
    backgroundColor: '#ffc107', // Sarı ton
    color: '#333',
  };

  const ekleStyle = {
    ...butonStyle,
    backgroundColor: '#eee',
    color: '#333',
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px',
      margin: '10px 0',
      border: '1px solid #ddd',
      borderRadius: '6px',
    }}>
      <div>
        <h3 style={{ margin: '0', fontSize: '1.2em' }}>{baslik}</h3>
        <p style={{ margin: '5px 0 0', fontSize: '0.9em', color: '#666' }}>
          {yazar} · {kategori}
        </p>
      </div>
      <button
        onClick={() => favoriDurumunuDegistir(id)}
        style={favorideMi ? favorideStyle : ekleStyle}
      >
        {favorideMi ? '⭐ Favoride' : '⭐ Favori Ekle'}
      </button>
    </div>
  );
};

export default KitapKarti;