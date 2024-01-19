// import React from 'react'
// import ProductCard from './ProductCard'

// export default function Cake() {
//     const getRandomImageUrl = (index) => {
//         const randomNumber = Math.floor(Math.random() * 1000);
        
//       return `https://picsum.photos/200/300/?random=${randomNumber}&index=${index}`;
//       };
    
//       const cakes = [
//         {
//           title: 'Chocolate Cake',
//           description: 'Delicious chocolate cake for your sweet tooth.',
//         },
//         {
//           title: 'Vanilla Cake',
//           description: 'Classic vanilla cake for any celebration.',
//         },
//         {
//           title: 'Strawberry Shortcake',
//           description: 'Fresh strawberries on a light and fluffy cake.',
//         },
//         // Add more cakes as needed
//         {
//             title: 'Pine Apple Shortcake',
//             description: 'Fresh strawberries on a light and fluffy cake.',
//           },
//           {
//             title: 'Mango Cake',
//             description: 'Fresh strawberries on a light and fluffy cake.',
//           },
//           {
//             title: 'Black-Forest Shortcake',
//             description: 'Fresh strawberries on a light and fluffy cake.',
//           },{
//             title: 'Plum Shortcake',
//             description: 'Fresh strawberries on a light and fluffy cake.',
//           },
//       ];
//   return (
//     <div><h2>Cake Page</h2>
//     <div className="product-container">
//       {cakes.map((cake, index) => (
//         <ProductCard
//           key={index}
//           title={cake.title}
//           description={cake.description}
//           imageUrl={getRandomImageUrl(index)}
//         />
//       ))}
//     </div>
//     </div>
//   )
// }
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
export default function Cake() {
const [cakeData, setCakeData] = useState([]);
useEffect(() => {
  const fetchCakeData = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?query=cake&count=15&client_id=hRX0Nlohuglto-kRIrrzYeyCtxt1epsEjl6V54zXyB0`
      );
      const data = await response.json();
      setCakeData(data);
    } catch (error) {
      console.error('Error fetching cake data:', error);
    }
  };

  fetchCakeData();
}, []);
const getImageUrlWithSize = (imageUrl, width = 300, height = 200) => {
  const url = new URL(imageUrl);
  url.searchParams.set('w', width.toString());
  url.searchParams.set('h', height.toString());
  return url.toString();
};
  return (
    <div><h2>Cake Page</h2>
    <div className="product-container">
      {cakeData.map((cake, index) => (
        <ProductCard
          key={index}
          title={`Cake ${index + 1}`}
          description="Delicious cake for any celebration."
          // imageUrl={cake.urls.regular}
          imageUrl={getImageUrlWithSize(cake.urls.regular)}
        />
      ))}
    </div>
    </div>
  )
}

