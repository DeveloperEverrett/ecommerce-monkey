import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { GiMonkey } from 'react-icons/gi';
import logo from '../public/assets/speaker1.webp';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
          <GiMonkey size={35} />
        </Link>
      </p>

      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  );
};

export default Navbar;
