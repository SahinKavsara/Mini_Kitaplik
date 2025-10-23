import React from 'react';

const AramaCubugu = ({ aramaMetni, setAramaMetni }) => {
  return (
    <input
      type="text"
      placeholder="Başlık veya yazar ara..."
      value={aramaMetni}
      onChange={(e) => setAramaMetni(e.target.value)}
      style={{ flexGrow: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
    />
  );
};

export default AramaCubugu;