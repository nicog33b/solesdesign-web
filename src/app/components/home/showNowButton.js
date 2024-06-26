// ShopNowButton.js
import React from 'react';
import Link from 'next/link'
import { BiShoppingBag } from 'react-icons/bi';

const ShopNowButton = () => {
  return (
    <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center">
      <BiShoppingBag className="text-5xl mb-4 my-auto mx-auto text-red-300" />
      <h3 className="text-xl font-semibold mb-2 text-black">¡Descubre Nuestra Tienda!</h3>
      <p className="text-sm text-black">Explora nuestra colección exclusiva y encuentra tu estilo único.</p>
       <Link href='/tienda' >
      <button  className="mt-4 bg-yellow-500 hover:bg-white text-black px-4 py-2 rounded-full hover:bg-secondary-dark focus:outline-none focus:shadow-outline">
        Ir a la Tienda
      </button>
      </Link>
      
    </div>
  );
};

export default ShopNowButton;
