// import React from 'react'
// import ProductCard from './ProductCard';

// export default function ForHim() {
//     // const getRandomImageUrl = () => {
//     //     const randomNumber = Math.floor(Math.random() * 1000); // Adjust the range as needed
//     //     return `https://picsum.photos/200/300/?random=${randomNumber}`;
//     //   };
//     const getRandomImageUrl = (index) => {
//         const randomNumber = Math.floor(Math.random() * 1000); // Adjust the range as needed
//         return `https://picsum.photos/200/300/?random=${randomNumber}&index=${index}`;
//       };
//     const products = [
//         // {
//         //   title: 'Men Watch',
//         //   description: 'A stylish watch for him.',
//         //   imageUrl: 'https://picsum.photos/200/300/?random',
//         // },
//         // {
//         //   title: 'Leather Wallet',
//         //   description: 'High-quality leather wallet.',
//         //   imageUrl: 'https://picsum.photos/200/300/?random',
//         // },
//         // // Add more products as needed
//         // {
//         //     title: 'Shoos',
//         //     description: 'High-quality shoo for men.',
//         //     imageUrl: 'https://picsum.photos/200/300/?random',
//         //   },
//         //Trial-2
//         // {
//         //     title: "Men's Watch 1",
//         //     description: 'A stylish watch for him.',
//         //     imageUrl: getRandomImageUrl(),
//         //   },
//         //   {
//         //     title: "Men's Watch 2",
//         //     description: 'Another stylish watch for him.',
//         //     imageUrl: getRandomImageUrl(),
//         //   },
//         //   {
//         //     title: "Men's Watch 3",
//         //     description: 'Yet another stylish watch for him.',
//         //     imageUrl: getRandomImageUrl(),
//         //   }
//         //Trial-3
//         {
//             title: "Men's Watch 1",
//             description: 'A stylish watch for him.',
//           },
//           {
//             title: "Men's Watch 2",
//             description: 'Another stylish watch for him.',
//           },
//           {
//             title: "Men's Watch 3",
//             description: 'Yet another stylish watch for him.',
//           },
//           {
//             title: "Men's Watch 4",
//             description: 'Yet another stylish watch for him.',
//           },
//           {
//             title: "Men's Watch 5",
//             description: 'Yet another stylish watch for him.',
//           },
//           {
//             title: "Men's Watch 6",
//             description: 'Yet another stylish watch for him.',
//           },
//           {
//             title: "Men's Watch 7",
//             description: 'Yet another stylish watch for him.',
//           },
//           {
//             title: "Men's Watch 8",
//             description: 'Yet another stylish watch for him.',
//           },
//           {
//             title: "Men's Watch 9",
//             description: 'Yet another stylish watch for him.',
//           },
//           {
//             title: "Men's Watch 10",
//             description: 'Yet another stylish watch for him.',
//           },
//       ];
//   return (
//     <div>
//         <h2>For Him Page</h2>
//       <div className="product-container">
//         {products.map((product, index) => (
//           <ProductCard
//             key={index}
//             title={product.title}
//             description={product.description}
//             // imageUrl={product.imageUrl}
//             imageUrl={getRandomImageUrl(index)}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }
//next trial
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ForHim = () => {
  const [forHimData, setForHimData] = useState([]);

  useEffect(() => {
    const fetchForHimData = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=men's-shoes,men's-watch,men's-wallet,men's-formalshirt,men's-perfume&count=15&client_id=hRX0Nlohuglto-kRIrrzYeyCtxt1epsEjl6V54zXyB0`
        );
        const data = await response.json();
        setForHimData(data);
      } catch (error) {
        console.error('Error fetching For Him data:', error);
      }
    };

    fetchForHimData();
  }, []);

  const getImageUrlWithSize = (imageUrl, width = 300, height = 200) => {
    const url = new URL(imageUrl);
    url.searchParams.set('w', width.toString());
    url.searchParams.set('h', height.toString());
    return url.toString();
  };

  return (
    <div>
      <h2>For Him Page</h2>
      <div className="product-container">
        {forHimData.map((item, index) => (
          <ProductCard
            key={index}
            title={`For Him Product ${index + 1}`}
            description="Stylish product for him."
            imageUrl={getImageUrlWithSize(item.urls.regular)}
          />
        ))}
      </div>
    </div>
  );
};

export default ForHim;
