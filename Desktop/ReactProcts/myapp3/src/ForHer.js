// import React from 'react'
// import ProductCard from './ProductCard';

// export default function ForHer() {
//     const getRandomImageUrl = (index) => {
//         const randomNumber = Math.floor(Math.random() * 1000); // Adjust the range as needed
//         return `https://picsum.photos/200/300/?random=${randomNumber}&index=${index}`;
//       };
    
//       const products = [
//         {
//           title: "Women's Watch 1",
//           description: 'An elegant watch for her.',
//         },
//         {
//           title: "Women's Watch 2",
//           description: 'A sophisticated timepiece for her.',
//         },
//         {
//           title: "Women's Watch 3",
//           description: 'A stylish watch to complement her look.',
//         },
//         // Add more products as needed
//         {
//             title: "Women's Watch 4",
//             description: 'A stylish watch to complement her look.',
//           },
//           {
//             title: "Women's Watch 5",
//             description: 'A stylish watch to complement her look.',
//           },
//           {
//             title: "Women's Watch 6",
//             description: 'A stylish watch to complement her look.',
//           },
//           {
//             title: "Women's Watch 7",
//             description: 'A stylish watch to complement her look.',
//           },
//           {
//             title: "Women's Watch 8",
//             description: 'A stylish watch to complement her look.',
//           },
//           {
//             title: "Women's Watch 9",
//             description: 'A stylish watch to complement her look.',
//           },
//           {
//             title: "Women's Watch 10",
//             description: 'A stylish watch to complement her look.',
//           },
//       ];
    
//   return (
//     <div><h2>For Her Page</h2>
//     <div className="product-container">
//       {products.map((product, index) => (
//         <ProductCard
//           key={index}
//           title={product.title}
//           description={product.description}
//           imageUrl={getRandomImageUrl(index)}
//         />
//       ))}
//     </div>
//     </div>
//   )
// }

//trial-2
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ForHer = () => {
  const [forHerData, setForHerData] = useState([]);

  useEffect(() => {
    const fetchForHerData = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=women's-shoes,women's-watch,women's-handbag,women's-perfume,women's-clothes,women's-lipstikes&count=15&client_id=hRX0Nlohuglto-kRIrrzYeyCtxt1epsEjl6V54zXyB0`
        );
        const data = await response.json();
        setForHerData(data);
      } catch (error) {
        console.error('Error fetching For Her data:', error);
      }
    };

    fetchForHerData();
  }, []);

  const getImageUrlWithSize = (imageUrl, width = 300, height = 200) => {
    const url = new URL(imageUrl);
    url.searchParams.set('w', width.toString());
    url.searchParams.set('h', height.toString());
    return url.toString();
  };

  return (
    <div>
      <h2>For Her Page</h2>
      <div className="product-container">
        {forHerData.map((item, index) => (
          <ProductCard
            key={index}
            title={`For Her Product ${index + 1}`}
            description="Elegant product for her."
            imageUrl={getImageUrlWithSize(item.urls.regular)}
          />
        ))}
      </div>
    </div>
  );
};

export default ForHer;
