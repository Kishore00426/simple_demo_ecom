// src/components/CategoryNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryNavbar.css';

const categories = [
  {
    name: 'Electronics',
    image: '/assets/images/electronics.jpg',
    path: '/category/electronics',
  },
  {
    name: 'Appliances',
    image: '/assets/images/appliances.jpg',
    path: '/category/appliances',
  },
  {
    name: 'Decors',
    image: '/assets/images/decors.jpg',
    path: '/category/decors',
  },
  {
    name: 'Toys',
    image: '/assets/images/toys.jpg',
    path: '/category/toys',
  },
   {
    name: 'Books',
    image: '/assets/images/books.jpg',
    path: '/category/toys',
  },
  {
    name: 'Fashion',
    image: '/assets/images/fashion.jpg',
    path: '/category/fashion',
  },  
];

function CategoryNavbar() {
  return (
    <div className="category-navbar">
      {categories.map((category) => (
        <Link to={category.path} key={category.name} className="category-card">
          <img src={category.image} alt={category.name} className="category-image" />
          <span className="category-name">{category.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default CategoryNavbar;
