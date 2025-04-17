import React, { useState } from 'react';
import CategoryTable from './CategoryTable';
import Search from './Search';
import './CategoryPage.css';

const CategoryPage = () => {
  const [entries, setEntries] = useState([
    { id: 1, type: 'Income', description: 'Gaji', amount: 5000000 },
    { id: 2, type: 'Expense', description: 'Makan', amount: -50000 },
    { id: 3, type: 'Expense', description: 'Transportasi', amount: -20000 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleAddEntry = () => {
    const type = prompt("Masukkan tipe (Income/Expense):");
    const description = prompt("Masukkan deskripsi:");
    const amount = parseInt(prompt("Masukkan jumlah:"), 10);

    if (!type || !description || isNaN(amount)) {
      alert("Input tidak valid.");
      return;
    }

    const newEntry = {
      id: Date.now(),
      type,
      description,
      amount: type.toLowerCase() === 'expense' ? -Math.abs(amount) : Math.abs(amount),
    };

    setEntries(prevEntries => [...prevEntries, newEntry]);
  };

  // 🔎 Filter berdasarkan search term
  const filteredEntries = entries.filter(entry =>
    entry.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '1rem', marginLeft: '250px' }}>
      <h1>Kategori</h1>
      <button onClick={handleAddEntry} style={{ marginBottom: '1rem' }}>➕ Tambah</button>

      {/* 🔍 SearchBar: stateless component + props */}
      <Search onSearch={setSearchTerm} />

      {/* Table with filtered results */}
      <CategoryTable entries={filteredEntries} />
    </div>
  );
};

export default CategoryPage;