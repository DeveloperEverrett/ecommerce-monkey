import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { GiMonkey } from 'react-icons/gi';
import logo from '../public/assets/speaker1.webp';

import Cart from './Cart';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">
          <GiMonkey size={35} />
        </Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty"> {totalQuantities} </span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
