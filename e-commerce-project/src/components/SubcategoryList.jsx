// src/components/SubcategoryList.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { subcategories } from '../det';
import './SubcategoryList.css';

function SubcategoryList() {
  const { id } = useParams();
  const list = subcategories[id] || [];

  return (
    <div className="subcategory-container">
      <h2>{id.charAt(0).toUpperCase() + id.slice(1)} Products</h2>
      <div className="subcategory-grid">
        {list.map((sub) => (
          <div key={sub.id} className="subcategory-card">
            <img src={sub.image} alt={sub.name} className="subcategory-image" />
            <h3>{sub.name}</h3>
            <p>₹{sub.price}</p>
            <Link to={`/subcategory/${sub.id}`} className="view-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubcategoryList;
