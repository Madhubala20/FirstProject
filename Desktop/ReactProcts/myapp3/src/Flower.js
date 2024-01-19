// import React from 'react';
// import ProductCard from './ProductCard';

// const Flower = () => {
//     const getRandomTitle = () => {
//         const titles = ['Rose Bouquet', 'Sunflower Arrangement', 'Tulip Collection'];
//         const randomIndex = Math.floor(Math.random() * titles.length);
//         return titles[randomIndex];
//       };
//       const getRandomDescription = () => {
//         const descriptions = [
//           'A beautiful bouquet to express your feelings.',
//           'Brighten someone\'s day with these vibrant flowers.',
//           'Elegant tulips for any special occasion.',
//         ];
//         const randomIndex = Math.floor(Math.random() * descriptions.length);
//     return descriptions[randomIndex];
//   };
//   const getRandomImageUrl = () => {
//     const randomNumber = Math.floor(Math.random() * 1000);
//     return `https://picsum.photos/200/300/?random=${randomNumber}`;
//   };
//   const flowerProducts = Array.from({ length: 3 }, (_, index) => ({
//     title: getRandomTitle(),
//     description: getRandomDescription(),
//     imageUrl: getRandomImageUrl(),
//     key: index,
//   }));
    
//   return (
//   <div> 
//     <h2>Flower Page</h2>
//   <div className="product-container">
//     {flowerProducts.map((product) => (
//       <ProductCard
//         key={product.key}
//         title={product.title}
//         description={product.description}
//         imageUrl={product.imageUrl}
//       />
//     ))}
//   </div>
//   </div>
//   )
// };

// export default Flower;
//trial 3
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Flower = () => {
  const [flowerData, setFlowerData] = useState([]);

  useEffect(() => {
    const fetchFlowerData = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=flowers&count=15&client_id=hRX0Nlohuglto-kRIrrzYeyCtxt1epsEjl6V54zXyB0`
        );
        const data = await response.json();
        setFlowerData(data);
      } catch (error) {
        console.error('Error fetching flower data:', error);
      }
    };

    fetchFlowerData();
  }, []);

  const getImageUrlWithSize = (imageUrl, width = 300, height = 200) => {
    const url = new URL(imageUrl);
    url.searchParams.set('w', width.toString());
    url.searchParams.set('h', height.toString());
    return url.toString();
  };

  return (
    <div>
      <h2>Flower Page</h2>
      <div className="product-container">
        {flowerData.map((flower, index) => (
          <ProductCard
            key={index}
            title={`Flower Product ${index + 1}`}
            description="Beautiful flower for any occasion."
            imageUrl={getImageUrlWithSize(flower.urls.regular)}
          />
        ))}
      </div>
    </div>
  );
};

export default Flower;
