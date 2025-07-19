// src/pages/Home.js
import React from 'react';
import Slider from 'react-slick';
import CategoryNavbar from '../components/CategoryNavbar';
import ProductCard from '../components/ProductCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import banner1 from "/assets/images/banner1.jpg";
import '../pages/Home.css'; // Import your CSS file for styling
const featuredProducts = [
  { id: 101, name: 'Wireless Mouse', price: 1299, image: 'https://via.placeholder.com/150?text=Mouse' },
  { id: 102, name: 'Bluetooth Speaker', price: 2499, image: 'https://via.placeholder.com/150?text=Speaker' },
  { id: 103, name: 'Casual Shirt', price: 899, image: 'https://via.placeholder.com/150?text=Casual+Shirt' },
  { id: 104, name: 'E-Book Reader', price: 7999, image: 'https://via.placeholder.com/150?text=E-Book' },
];

const carouselImages = [
  {
    src: '/assets/images/banner1.jpg',
    alt: 'Banner 1',
  },
  {
    src: '/assets/images/banner2.jpg',
    alt: 'Banner 2',
  },
  {
    src: '/assets/images/banner3.jpg',
    alt: 'Banner 3',
  },
];


function Home() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
  };

  return (
    <div style={{ padding: '1rem' }} className='home-container'>
      

      <strong>Welcome to Our E-Commerce Store!</strong>
      <p>Browse our top categories and featured products below!</p>

      <h2>Shop by Category</h2>
      <CategoryNavbar />
       {/* Carousel */}
      <div className="carousel-container">
        <Slider {...carouselSettings}>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} className="carousel-image" style={{ width: '100%', height: "380px" }} />
            </div>
          ))}
        </Slider>
      </div>
      <h2>Featured Products</h2>
      <div style={{ display: 'flex', overflowX: 'auto', gap: '1rem', padding: '1rem 0' }}>
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
     
    </div>
  );
}

export default Home;
