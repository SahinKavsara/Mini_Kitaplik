
export const KITAPLAR = [
  { id: 1, baslik: "Suç ve Ceza", yazar: "Fyodor Dostoyevski", kategori: "Klasik" },
  { id: 2, baslik: "Sefiller", yazar: "Victor Hugo", kategori: "Klasik" },
  { id: 3, baslik: "Anna Karenina", yazar: "Lev Tolstoy", kategori: "Roman" },
  { id: 4, baslik: "Don Kişot", yazar: "Miguel de Cervantes", kategori: "Macera" },
  { id: 5, baslik: "Büyük Umutlar", yazar: "Charles Dickens", kategori: "Roman" },
  { id: 6, baslik: "Madame Bovary", yazar: "Gustave Flaubert", kategori: "Roman" },
  { id: 7, baslik: "Gurur ve Önyargı", yazar: "Jane Austen", kategori: "Aşk" },
  { id: 8, baslik: "Kırmızı ve Siyah", yazar: "Stendhal", kategori: "Roman" },
  { id: 9, baslik: "Seni Çok Özledim", yazar: "Osman Gültekin", kategori: "Aşk" },
  { id: 10, baslik: "Çok Pişmanım", yazar: "Aykut Elmas", kategori: "Aşk" },
];

export const KATEGORILER = [
  "Tümü",
  ...new Set(KITAPLAR.map(kitap => kitap.kategori))
];
