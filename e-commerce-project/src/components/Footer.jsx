import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1f2937', // Equivalent to bg-gray-800
    color: '#ffffff',
    padding: '40px 0',
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '32px',
  };

  const headingStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '16px',
  };

  const linkStyle = {
    color: '#9ca3af', // Equivalent to text-gray-400
    textDecoration: 'none',
    display: 'block',
    marginBottom: '8px',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
    color: '#ffffff',
  };

  const socialIconStyle = {
    color: '#9ca3af',
    fontSize: '24px',
    marginRight: '16px',
    transition: 'color 0.3s',
  };

  const dividerStyle = {
    borderTop: '1px solidrgb(35, 61, 104)', // Equivalent to border-gray-700
    marginTop: '42px',
    paddingTop: '16px',
    textAlign: 'center',
    color: '#6b7280', // Equivalent to text-gray-500
    fontSize: '14px',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Company Info */}
        <div>
          <h2 style={headingStyle}>E-Commerce Store</h2>
          <p style={{ color: '#9ca3af' }}>
            Your one-stop shop for all your needs. Quality products at the best prices.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 style={headingStyle}>Navigation</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <a href="/" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>Home</a>
            </li>
            <li>
              <a href="/products" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>Products</a>
            </li>
            <li>
              <a href="/about" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>About Us</a>
            </li>
            <li>
              <a href="/contact" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>Contact</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 style={headingStyle}>Services</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <a href="#" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>Shipping & Delivery</a>
            </li>
            <li>
              <a href="#" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>Returns & Exchanges</a>
            </li>
            <li>
              <a href="#" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>FAQs</a>
            </li>
            <li>
              <a href="#" style={linkStyle} onMouseOver={e => e.target.style.color = linkHoverStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>Support</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 style={headingStyle}>Follow Us</h3>
          <div style={{ display: 'flex' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={socialIconStyle}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={dividerStyle}>
        © {new Date().getFullYear()} E-Commerce Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
