import React from 'react';
import { KATEGORILER } from '../data';

const KategoriFiltre = ({ secilenKategori, setSecilenKategori }) => {
  return (
    <select
      value={secilenKategori}
      onChange={(e) => setSecilenKategori(e.target.value)}
      style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginLeft: '10px' }}
    >
      {KATEGORILER.map(kategori => (
        <option key={kategori} value={kategori}>{kategori}</option>
      ))}
    </select>
  );
};

export default KategoriFiltre;