import React from 'react';
import { client } from '../lib/client';

import {
  Cart,
  Footer,
  FooterBanner,
  HeroBanner,
  Layout,
  Navbar,
} from '../components/';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading ">
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
};

export default Home;
