import React, { useState } from 'react';
import CategoryTable from './CategoryTable';
import Search from './Search';
import './CategoryPage.css';

const CategoryPage = () => {
  const [entries, setEntries] = useState([
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

  const handleDeleteEntry = (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus data ini?");
    if (confirmDelete) {
      setEntries(prev => prev.filter(entry => entry.id !== id));
    }
  };

  const filteredEntries = entries.filter(entry =>
    entry.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Kategori</h1>
      <button onClick={handleAddEntry} style={{ marginBottom: '1rem',  backgroundColor: 'orangered',  color: 'white',   }}>➕ Tambah</button>

      {/* 🔍 Komponen Search */}
      <Search onSearch={setSearchTerm} />

      {/* ✅ Hanya satu komponen tabel */}
      <CategoryTable entries={filteredEntries} onDelete={handleDeleteEntry} />
    </div>
  );
};

export default CategoryPage;
