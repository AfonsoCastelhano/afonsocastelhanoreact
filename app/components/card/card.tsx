/* components/Card.tsx */
'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/app/models/interfaces';

const Card: React.FC<Product> = ({ title, price, description, category, image, rating }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center">
      <div className="w-40 h-40 relative mb-4">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-contain rounded-md"
        />
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-500 text-sm mb-2">{category}</p>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-green-600 font-bold mb-2">Preço: ${price.toFixed(2)}</p>
      <p className="text-yellow-500 text-sm">
        Avaliação: {rating.rate} ★ ({rating.count} reviews)
      </p>
    </div>
  );
};

export default Card;