import React from 'react';
import './CategoryTable.css';

const CategoryTable = ({ entries }) => {
  return (
    <table className="category-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Description</th>
          <th>Amount (Rp)</th>
        </tr>
      </thead>
      <tbody>
        {entries.map(entry => (
          <tr key={entry.id}>
            <td>{entry.type}</td>
            <td>{entry.description}</td>
            <td className={entry.amount < 0 ? 'amount-expense' : 'amount-income'}>
              {entry.amount.toLocaleString('id-ID')}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoryTable;