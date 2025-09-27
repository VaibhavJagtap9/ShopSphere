// product.js

const products = [
  //1
  {
    name: "Classic Oxford Button-Down Shirt",
    description:
      "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit. Perfect for both formal and casual occasions, it comes with long sleeves, a button placket, and a yoke at the back. The shirt is finished with a gently rounded hem and adjustable button cuffs.",
    price: 39.99,
    discountPrice: 34.99,
    countInStock: 20,
    sku: "OX-SH-001",
    category: "Top Wear",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Blue", "Yellow"],
    collections: "Business Casual",
    material: "Cotton",
    gender: "Men",
    images: [
      { url: "/images/one/oxford-shirt-front-red.jpeg", altText: "Classic Oxford Button-Down Shirt Front View" },
      { url: "/images/one/oxford-shirt-back-blue.jpeg", altText: "Classic Oxford Button-Down Shirt Back View" },
      { url: "/images/one/oxford-shirt-back-yellow.jpeg", altText: "Classic Oxford Button-Down Shirt Back View" },
    ],
    rating: 4.5,
    numReviews: 12,
  },
  //2
  {
    name: "Slim-Fit Stretch Shirt",
    description:
      "A versatile slim-fit shirt perfect for business or evening events. Designed with a fitted silhouette, the added stretch provides maximum comfort throughout the day. Features a crisp turn-down collar, button placket, and adjustable cuffs.",
    price: 1,
    discountPrice: 24.99,
    countInStock: 35,
    sku: "SLIM-SH-002",
    category: "Top Wear",
    brand: "Modern Fit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Yellow", "Orange", "White "],
    collections: "Formal Wear",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      { url: "/images/two/slim-fit-front-yellow.jpeg", altText: "Slim-Fit Stretch Shirt Front View" },
      { url: "/images/two/slim-fit-front-orange.jpeg", altText: "Slim-Fit Stretch Shirt Front View" },
      { url: "/images/two/slim-fit-front-white.jpeg", altText: "Slim-Fit Stretch Shirt Back View" },
    ],
    rating: 4.8,
    numReviews: 15,
  },
  //3
  {
    name: "Casual Denim Shirt",
    description:
      "This casual denim shirt is made from lightweight cotton denim. It features a regular fit, snap buttons, and a straight hem. With Western-inspired details, this shirt is perfect for layering or wearing solo.",
    price: 49.99,
    discountPrice: 44.99,
    countInStock: 15,
    sku: "CAS-DEN-003",
    category: "Top Wear",
    brand: "Street Style",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Pink ", "Black", "Gray"],
    collections: "Casual Wear",
    material: "Denim",
    gender: "Men",
    images: [
      { url: "/images/three/denim-shirt-front-pink.jpeg", altText: "Casual Denim Shirt Front View" },
      { url: "/images/three/denim-shirt-front-black.jpeg", altText: "Casual Denim Shirt Front View" },
      { url: "/images/three/denim-shirt-front-gray.jpeg", altText: "Casual Denim Shirt Front View" },
    ],
    rating: 4.6,
    numReviews: 8,
  },
  //4
  {
    name: "Printed Resort Shirt",
    description:
      "Designed for summer, this printed resort shirt is perfect for vacation or weekend getaways. It features a relaxed fit, short sleeves, and a camp collar. The all-over tropical print adds a playful vibe.",
    price: 29.99,
    discountPrice: 22.99,
    countInStock: 25,
    sku: "PRNT-RES-004",
    category: "Top Wear",
    brand: "Beach Breeze",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Yellow"],
    collections: "Vacation Wear",
    material: "Viscose",
    gender: "Men",
    images: [
      { url: "/images/four/resort-shirt-front-red.jpeg", altText: "Printed Resort Shirt Front View" },
      { url: "/images/four/resort-shirt-front-blue.jpeg", altText: "Printed Resort Shirt Front View" },
      { url: "/images/four/resort-shirt-front-yellow.jpeg", altText: "Printed Resort Shirt Front View" },
    ],
    rating: 4.4,
    numReviews: 10,
  },
  //5
  {
    name: "Slim-Fit Easy-Iron Shirt",
    description:
      "A slim-fit, easy-iron shirt in woven cotton fabric with a fitted silhouette. Features a turn-down collar, classic button placket, and a yoke at the back. Long sleeves and adjustable button cuffs with a rounded hem.",
    price: 34.99,
    discountPrice: 29.99,
    countInStock: 30,
    sku: "SLIM-EIR-005",
    category: "Top Wear",
    brand: "Urban Chic",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Yellow", "Orange", "White "],
    collections: "Business Wear",
    material: "Cotton",
    gender: "Men",
    images: [
      { url: "/images/five/easy-iron-front-yellow.jpeg", altText: "Slim-Fit Easy-Iron Shirt Front View" },
      { url: "/images/five/easy-iron-front-orange.jpeg", altText: "Slim-Fit Easy-Iron Shirt Front View" },
      { url: "/images/five/easy-iron-Front-white.jpeg", altText: "Slim-Fit Easy-Iron Shirt Front View" },
    ],
    rating: 5,
    numReviews: 14,
  },
  //6
  {
    name: "Polo T-Shirt with Ribbed Collar",
    description:
      "A wardrobe classic, this polo t-shirt features a ribbed collar and cuffs. Made from 100% cotton, it offers breathability and comfort throughout the day. Tailored in a slim fit with a button placket at the neckline.",
    price: 24.99,
    discountPrice: 19.99,
    countInStock: 50,
    sku: "POLO-TSH-006",
    category: "Top Wear",
    brand: "Polo Classics",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black ", "Pink", "Gray"],
    collections: "Casual Wear",
    material: "Cotton",
    gender: "Men",
    images: [
      { url: "/images/six/polo-front-black.jpeg", altText: "Polo T-Shirt Front View" },
      { url: "/images/six/polo-front-pink.jpeg", altText: "Polo T-Shirt Front View" },
      { url: "/images/six/polo-front-gray.jpeg", altText: "Polo T-Shirt Front View" },
    ],
    rating: 4.3,
    numReviews: 22,
  },
  //7
  {
    name: "Oversized Graphic T-Shirt",
    description:
      "An oversized graphic t-shirt that combines comfort with street style. Featuring bold prints across the chest, this relaxed fit tee offers a modern vibe, perfect for pairing with jeans or joggers.",
    price: 19.99,
    discountPrice: 15.99,
    countInStock: 40,
    sku: "OVS-GRF-007",
    category: "Top Wear",
    brand: "Street Vibes",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Red", "Yellow"],
    collections: "Streetwear",
    material: "Cotton",
    gender: "Men",
    images: [
      { url: "/images/seven/oversized-graphic-front-blue.jpeg", altText: "Oversized Graphic T-Shirt Front View" },
      { url: "/images/seven/oversized-graphic-front-red.jpeg", altText: "Oversized Graphic T-Shirt Front View" },
      { url: "/images/seven/oversized-graphic-front-yellow.jpeg", altText: "Oversized Graphic T-Shirt Front View" }
    ],
    rating: 4.6,
    numReviews: 30,
  },
  //8
  {
    name: "Regular-Fit Henley Shirt",
    description:
      "A modern take on the classic Henley shirt, this regular-fit style features a buttoned placket and ribbed cuffs. Made from a soft cotton blend with a touch of elastane for stretch.",
    price: 22.99,
    discountPrice: 18.99,
    countInStock: 35,
    sku: "REG-HEN-008",
    category: "Top Wear",
    brand: "Heritage Wear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Yellow", "Orange"],
    collections: "Casual Wear",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      { url: "/images/eight/henley-front-white.jpeg", altText: "Regular-Fit Henley Shirt Front View" },
      { url: "/images/eight/henley-front-yellow.jpeg", altText: "Regular-Fit Henley Shirt Front View" },
      { url: "/images/eight/henley-front-orange.jpeg", altText: "Regular-Fit Henley Shirt Front View" },

    ],
    rating: 4.5,
    numReviews: 25,
  },
  //9
  {
    name: "Long-Sleeve Thermal Tee",
    description:
      "Stay warm with this long-sleeve thermal tee, made from soft cotton with a waffle-knit texture. Ideal for layering in cooler months, the slim-fit design ensures a snug yet comfortable fit.",
    price: 27.99,
    discountPrice: 22.99,
    countInStock: 20,
    sku: "LST-THR-009",
    category: "Top Wear",
    brand: "Winter Basics",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gray ", "Pink", "Black"],
    collections: "Winter Essentials",
    material: "Cotton",
    gender: "Men",
    images: [
      { url: "/images/nine/thermal-front-gray.jpeg", altText: "Long-Sleeve Thermal Tee Front View" },
      { url: "/images/nine/thermal-front-pink.jpeg", altText: "Long-Sleeve Thermal Tee Front View" },
      { url: "/images/nine/thermal-front-black.jpeg", altText: "Long-Sleeve Thermal Tee Front View" },
    ],
    rating: 4.4,
    numReviews: 18,
  },
  //10
  {
    name: "V-Neck Classic T-Shirt",
    description:
      "A classic V-neck t-shirt for everyday wear. This regular-fit tee is made from breathable cotton and features a clean, simple design with a flattering V-neckline. Lightweight fabric and soft texture make it perfect for casual looks.",
    price: 14.99,
    discountPrice: 11.99,
    countInStock: 60,
    sku: "VNECK-CLS-010",
    category: "Top Wear",
    brand: "Everyday Comfort",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Yellow"],
    collections: "Basics",
    material: "Cotton",
    gender: "Men",
    images: [
      { url: "/images/ten/vneck-front-red.jpeg", altText: "V-Neck Classic T-Shirt Front View" },
      { url: "/images/ten/vneck-front-blue.jpeg", altText: "V-Neck Classic T-Shirt Front View" },
      { url: "/images/ten/vneck-front-yellow.jpeg", altText: "V-Neck Classic T-Shirt Front View" },

    ],
    rating: 4.7,
    numReviews: 28,
  },
  //11
  {
    name: "Slim Fit Joggers",
    description:
      "Slim-fit joggers with an elasticated drawstring waist. Features ribbed hems and side pockets. Ideal for casual outings or workouts.",
    price: 40,
    discountPrice: 35,
    countInStock: 20,
    sku: "BW-001",
    category: "Bottom Wear",
    brand: "ActiveWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Yellow", "Orange", "White "],
    collections: "Casual Collection",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      { url: "/images/eleven/joggers-front-yellow.jpeg", altText: "Slim Fit Joggers Front View" },
      { url: "/images/eleven/joggers-front-orange.jpeg", altText: "Slim Fit Joggers Front View" },
      { url: "/images/eleven/joggers-front-white.jpeg", altText: "Slim Fit Joggers Front View" },

    ],
    rating: 4.5,
    numReviews: 12,
  },

  //12
  {
    name: "Cargo Joggers",
    description:
      "Relaxed-fit cargo joggers featuring multiple pockets for functionality. Drawstring waist and cuffed hems for a modern look.",
    price: 45,
    discountPrice: 40,
    countInStock: 15,
    sku: "BW-002",
    category: "Bottom Wear",
    brand: "UrbanStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black ", "Pink", "Gray"],
    collections: "Urban Collection",
    material: "Cotton",
    gender: "Men",
    images: [
      { url: "/images/Twelve/cargo-joggers-front-black.jpeg", altText: "Cargo Joggers Front View" },
      { url: "/images/Twelve/cargo-joggers-front-pink.jpeg", altText: "Cargo Joggers Front View" },
      { url: "/images/Twelve/cargo-joggers-front-gray.jpeg", altText: "Cargo Joggers Front View" },

    ],
    rating: 4.7,
    numReviews: 20,
  },

  //13
  {
    name: "Tapered Sweatpants",
    description:
      "Tapered sweatpants designed for comfort. Elastic waistband with adjustable drawstring, perfect for lounging or athletic activities.",
    price: 35,
    discountPrice: 30,
    countInStock: 25,
    sku: "BW-003",
    category: "Bottom Wear",
    brand: "ChillZone",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Yellow"],
    collections: "Lounge Collection",
    material: "Fleece",
    gender: "Men",
    images: [
      { url: "/images/thirteen/sweatpants-front-red.jpeg", altText: "Tapered Sweatpants Front View" },
      { url: "/images/thirteen/sweatpants-front-blue.jpeg", altText: "Tapered Sweatpants Front View" },
      { url: "/images/thirteen/sweatpants-front-yellow.jpeg", altText: "Tapered Sweatpants Front View" },

    ],
    rating: 4.3,
    numReviews: 18,
  },

  //14
  {
    name: "Denim Jeans",
    description:
      "Classic slim-fit denim jeans with a slight stretch for comfort. Features a zip fly and five-pocket styling for a timeless look.",
    price: 60,
    discountPrice: 50,
    countInStock: 30,
    sku: "BW-004",
    category: "Bottom Wear",
    brand: "DenimCo",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Blue "],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Men",
    images: [
      { url: "/images/fourteen/denim-jeans-front-black.jpeg", altText: "Denim Jeans Front View" },
      { url: "/images/fourteen/denim-jeans-front-gray.jpeg", altText: "Denim Jeans Front View" },
      { url: "/images/fourteen/denim-jeans-front-blue.jpeg", altText: "Denim Jeans Front View" },
    ],
    rating: 4.6,
    numReviews: 22,
  },

  //start from here
  //15
  {
    name: "Chino Pants",
    description:
      "Slim-fit chino pants made from stretch cotton twill. Features a button closure and front and back pockets. Ideal for both casual and semi-formal wear.",
    price: 55,
    discountPrice: 48,
    countInStock: 40,
    sku: "BW-005",
    category: "Bottom Wear",
    brand: "CasualLook",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pink ", "Black", "Gray"],
    collections: "Smart Casual Collection",
    material: "Cotton",
    gender: "Men",
    images: [
      { url: "/images/fifteen/chino-front-pink.jpeg", altText: "Chino Pants Front View" },
      { url: "/images/fifteen/chino-front-black.jpeg", altText: "Chino Pants Front View" },
      { url: "/images/fifteen/chino-front-gray.jpeg", altText: "Chino Pants Front View" },

    ],
    rating: 4.8,
    numReviews: 15,
  },

  //16
  {
    name: "Track Pants",
    description:
      "Comfortable track pants with an elasticated waistband and tapered leg. Features side stripes for a sporty look. Ideal for athletic and casual wear.",
    price: 40,
    discountPrice: 35,
    countInStock: 20,
    sku: "BW-006",
    category: "Bottom Wear",
    brand: "SportX",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Yellow"],
    collections: "Activewear Collection",
    material: "Polyester",
    gender: "Men",
    images: [
      { url: "/images/sixteen/track-pants-front-red.jpeg", altText: "Track Pants Front View" },
      { url: "/images/sixteen/track-pants-front-blue.jpeg", altText: "Track Pants Front View" },
      { url: "/images/sixteen/track-pants-front-yellow.jpeg", altText: "Track Pants Front View" },
    ],
    rating: 4.2,
    numReviews: 17,
  },

  //17
  {
    name: "Slim Fit Trousers",
    description:
      "Tailored slim-fit trousers with belt loops and a hook-and-eye closure. Suitable for formal occasions or smart-casual wear.",
    price: 65,
    discountPrice: 55,
    countInStock: 15,
    sku: "BW-007",
    category: "Bottom Wear",
    brand: "ExecutiveStyle",
    sizes: ["M", "L", "XL"],
    colors: ["White", "Yellow", "Orange"],
    collections: "Office Wear",
    material: "Polyester",
    gender: "Men",
    images: [
      { url: "/images/seventeen/trousers-front-white.jpeg", altText: "Slim Fit Trousers Front View" },
      { url: "/images/seventeen/trousers-front-yellow.jpeg", altText: "Slim Fit Trousers Front View" },
      { url: "/images/seventeen/trousers-front-orange.jpeg", altText: "Slim Fit Trousers Front View" },

    ],
    rating: 4.7,
    numReviews: 10,
  },

  //18
  {
    name: "Cargo Pants",
    description:
      "Loose-fit cargo pants with multiple utility pockets. Features adjustable ankle cuffs and a drawstring waist for versatility and comfort.",
    price: 50,
    discountPrice: 45,
    countInStock: 25,
    sku: "BW-008",
    category: "Bottom Wear",
    brand: "StreetWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pink ", "Black", "Gray"],
    collections: "Street Style Collection",
    material: "Cotton",
    gender: "Men",
    images: [
      { url: "/images/eighteen/cargo-pants-front-pink.jpeg", altText: "Cargo Pants Front View" },
      { url: "/images/eighteen/cargo-pants-front-black.jpeg", altText: "Cargo Pants Front View" },
      { url: "/images/eighteen/cargo-pants-front-gray.jpeg", altText: "Cargo Pants Front View" },

    ],
    rating: 4.5,
    numReviews: 13,
  },

  //19
  {
    name: "Relaxed Fit Sweatpants",
    description:
      "Relaxed-fit sweatpants made from soft fleece fabric. Features an elastic waist and adjustable drawstring for a custom fit.",
    price: 35,
    discountPrice: 30,
    countInStock: 35,
    sku: "BW-009",
    category: "Bottom Wear",
    brand: "LoungeWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Yellow"],
    collections: "Lounge Collection",
    material: "Fleece",
    gender: "Men",
    images: [
      { url: "/images/nineteen/relaxed-sweatpants-front-red.jpeg", altText: "Relaxed Fit Sweatpants Front View" },
      { url: "/images/nineteen/relaxed-sweatpants-front-blue.jpeg", altText: "Relaxed Fit Sweatpants Front View" },
      { url: "/images/nineteen/relaxed-sweatpants-front-yellow.jpeg", altText: "Relaxed Fit Sweatpants Front View" },

    ],
    rating: 4.3,
    numReviews: 14,
  },

  //20
  {
    name: "Formal Dress Pants",
    description:
      "Classic formal dress pants with a slim fit. Made from lightweight, wrinkle-resistant fabric for a polished look at the office or formal events.",
    price: 70,
    discountPrice: 60,
    countInStock: 20,
    sku: "BW-010",
    category: "Bottom Wear",
    brand: "ElegantStyle",
    sizes: ["M", "L", "XL"],
    colors: ["Yellow", "Orange", "White "],
    collections: "Formal Collection",
    material: "Polyester",
    gender: "Men",
    images: [
      { url: "/images/twenty/dress-pants-front-yellow.jpeg", altText: "Formal Dress Pants Front View" },
      { url: "/images/twenty/dress-pants-front-orange.jpeg", altText: "Formal Dress Pants Front View" },
      { url: "/images/twenty/dress-pants-front-white.jpeg", altText: "Formal Dress Pants Front View" },

    ],
    rating: 4.9,
    numReviews: 8,
  },
  //21
  {
    name: "High-Waist Skinny Jeans",
    description:
      "High-waist skinny jeans in stretch denim with a button and zip fly. Features a flattering fit that hugs your curves and enhances your silhouette.",
    price: 50,
    discountPrice: 45,
    countInStock: 30,
    sku: "BW-W-001",
    category: "Bottom Wear",
    brand: "DenimStyle",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Pink ", "Black", "Gray"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Women",
    images: [
      { url: "/images/twenty one/highWaistSkinnyJeans-pink.jpeg", altText: "High-Waist Skinny Jeans" },
      { url: "/images/twenty one/highWaistSkinnyJeans-black.jpeg", altText: "High-Waist Skinny Jeans" },
      { url: "/images/twenty one/highWaistSkinnyJeans-gray.jpeg", altText: "High-Waist Skinny Jeans" },

    ],
    rating: 4.8,
    numReviews: 20,
  },

  //22
  {
    name: "Wide-Leg Trousers",
    description:
      "Flowy, wide-leg trousers with a high waist and side pockets. Perfect for an elegant look that combines comfort and style.",
    price: 60,
    discountPrice: 55,
    countInStock: 25,
    sku: "BW-W-002",
    category: "Bottom Wear",
    brand: "ElegantWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Yellow"],
    collections: "Formal Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      { url: "/images/twenty two/wideLegTrousers-red.jpeg", altText: "Wide-Leg Trousers Front View" },
      { url: "/images/twenty two/wideLegTrousers-blue.jpeg", altText: "Wide-Leg Trousers Front View" },
      { url: "/images/twenty two/wideLegTrousers-yellow.jpeg", altText: "Wide-Leg Trousers Front View" },

    ],
    rating: 4.7,
    numReviews: 15,
  },

  //23
  {
    name: "Stretch Leggings",
    description:
      "Soft, stretch leggings in a high-rise style. Perfect for lounging, working out, or casual wear, with a smooth fit that flatters your body.",
    price: 25,
    discountPrice: 20,
    countInStock: 40,
    sku: "BW-W-003",
    category: "Bottom Wear",
    brand: "ComfyFit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Orange", "Yellow", "White "],
    collections: "Activewear Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      { url: "/images/twenty three/stretchLeggings-orange.jpeg", altText: "Stretch Leggings Front View" },
      { url: "/images/twenty three/stretchLeggings-yellow.jpeg", altText: "Stretch Leggings Front View" },
      { url: "/images/twenty three/stretchLeggings-white.jpeg", altText: "Stretch Leggings Front View" },

    ],
    rating: 4.5,
    numReviews: 30,
  },

  //24
  {
    name: "Pleated Midi Skirt",
    description:
      "Elegant pleated midi skirt with a high waistband and soft fabric that drapes beautifully. Ideal for both formal and casual occasions.",
    price: 55,
    discountPrice: 50,
    countInStock: 20,
    sku: "BW-W-004",
    category: "Bottom Wear",
    brand: "ChicStyle",
    sizes: ["S", "M", "L"],
    colors: ["Pink ", "Black", "Gray"],
    collections: "Spring Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      { url: "/images/twenty four/pleatedMidiSkirt-pink.jpeg", altText: "Pleated Midi Skirt Front View" },
      { url: "/images/twenty four/pleatedMidiSkirt-black.jpeg", altText: "Pleated Midi Skirt Front View" },
      { url: "/images/twenty four/pleatedMidiSkirt-gray.jpeg", altText: "Pleated Midi Skirt Front View" },

    ],
    rating: 4.6,
    numReviews: 18,
  },

  //25
  {
    name: "Flared Palazzo Pants",
    description:
      "High-waist palazzo pants with a loose, flowing fit. Comfortable and stylish, making them perfect for casual outings or beach days.",
    price: 45,
    discountPrice: 40,
    countInStock: 35,
    sku: "BW-W-005",
    category: "Bottom Wear",
    brand: "BreezyVibes",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Yellow"],
    collections: "Summer Collection",
    material: "Linen Blend",
    gender: "Women",
    images: [
      { url: "/images/twenty five/flaredPalazzoPants-red.jpeg", altText: "Flared Palazzo Pants Front View" },
      { url: "/images/twenty five/flaredPalazzoPants-blue.jpeg", altText: "Flared Palazzo Pants Front View" },
      { url: "/images/twenty five/flaredPalazzoPants-yellow.jpeg", altText: "Flared Palazzo Pants Front View" },


    ],
    rating: 4.4,
    numReviews: 22,
  },

  //26
  {
    name: "High-Rise Joggers",
    description:
      "Comfortable high-rise joggers with an elastic waistband and drawstring for a perfect fit. Great for lounging or working out.",
    price: 40,
    discountPrice: 35,
    countInStock: 30,
    sku: "BW-W-006",
    category: "Bottom Wear",
    brand: "ActiveWear",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Yellow", "Orange", "White "],
    collections: "Loungewear Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      { url: "/images/twenty six/highRiseJoggers-yellow.jpeg", altText: "High-Rise Joggers Front View" },
      { url: "/images/twenty six/highRiseJoggers-orange.jpeg", altText: "High-Rise Joggers Front View" },
      { url: "/images/twenty six/highRiseJoggers-white.jpeg", altText: "High-Rise Joggers Front View" },

    ],
    rating: 4.3,
    numReviews: 25,
  },

  //27
  {
    name: "Paperbag Waist Shorts",
    description:
      "Stylish paperbag waist shorts with a belted waist and wide legs. Perfect for summer outings and keeping cool in style.",
    price: 35,
    discountPrice: 30,
    countInStock: 20,
    sku: "BW-W-007",
    category: "Bottom Wear",
    brand: "SunnyStyle",
    sizes: ["S", "M", "L"],
    colors: ["Pink ", "Black", "Gray"],
    collections: "Summer Collection",
    material: "Cotton",
    gender: "Women",
    images: [
      { url: "/images/twenty seven/paperbagWaistShorts-pink.jpeg", altText: "Paperbag Waist Shorts Front View" },
      { url: "/images/twenty seven/paperbagWaistShorts-black.jpeg", altText: "Paperbag Waist Shorts Front View" },
      { url: "/images/twenty seven/paperbagWaistShorts-gray.jpeg", altText: "Paperbag Waist Shorts Front View" },

    ],
    rating: 4.5,
    numReviews: 19,
  },

  //28
  {
    name: "Stretch Denim Shorts",
    description:
      "Comfortable stretch denim shorts with a high-waisted fit and raw hem. Perfect for pairing with your favorite tops during warmer months.",
    price: 40,
    discountPrice: 35,
    countInStock: 25,
    sku: "BW-W-008",
    category: "Bottom Wear",
    brand: "DenimStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Red", "Yellow"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Women",
    images: [
      { url: "/images/twenty eight/stretchDenimShorts-blue.jpeg", altText: "Stretch Denim Shorts Front View" },
      { url: "/images/twenty eight/stretchDenimShorts-red.jpeg", altText: "Stretch Denim Shorts Front View" },
      { url: "/images/twenty eight/stretchDenimShorts-yellow.jpeg", altText: "Stretch Denim Shorts Front View" },

    ],
    rating: 4.7,
    numReviews: 15,
  },

  //29
  {
    name: "Culottes",
    description:
      "Wide-leg culottes with a flattering high waist and cropped length. The perfect blend of comfort and style for any casual occasion.",
    price: 50,
    discountPrice: 45,
    countInStock: 30,
    sku: "BW-W-009",
    category: "Bottom Wear",
    brand: "ChicStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Yellow", "Orange", "White "],
    collections: "Casual Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      { url: "/images/twenty nine/culottes-yellow.jpeg", altText: "Culottes Front View" },
      { url: "/images/twenty nine/culottes-orange.jpeg", altText: "Culottes Front View" },
      { url: "/images/twenty nine/culottes-white.jpeg", altText: "Culottes Front View" },

    ],
    rating: 4.6,
    numReviews: 23,
  },

  //30
  {
    name: "Classic Pleated Trousers",
    description:
      "Timeless pleated trousers with a tailored fit. A wardrobe essential for workwear or formal occasions.",
    price: 70,
    discountPrice: 65,
    countInStock: 25,
    sku: "BW-W-010",
    category: "Bottom Wear",
    brand: "ElegantWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black ", "Pink", "Gray"],
    collections: "Formal Collection",
    material: "Wool Blend",
    gender: "Women",
    images: [
      { url: "/images/thirty/classicPleatedTrousers-black.jpeg", altText: "Classic Pleated Trousers Front View" },
      { url: "/images/thirty/classicPleatedTrousers-pink.jpeg", altText: "Classic Pleated Trousers Front View" },
      { url: "/images/thirty/classicPleatedTrousers-gray.jpeg", altText: "Classic Pleated Trousers Front View" },

    ],
    rating: 4.8,
    numReviews: 20,
  },
  //31
  {
    name: "Knitted Cropped Top",
    description:
      "A stylish knitted cropped top with a flattering fitted silhouette. Perfect for pairing with high-waisted jeans or skirts for a casual look.",
    price: 40,
    discountPrice: 35,
    countInStock: 25,
    sku: "TW-W-001",
    category: "Top Wear",
    brand: "ChicKnit",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Blue", "Yellow"],
    collections: "Knits Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      { url: "/images/thirty one/knitted-cropped-top-red.jpeg", altText: "Knitted Cropped Top" },
      { url: "/images/thirty one/knitted-cropped-top-blue.jpeg", altText: "Knitted Cropped Top" },
      { url: "/images/thirty one/knitted-cropped-top-yellow.jpeg", altText: "Knitted Cropped Top" },

    ],
    rating: 4.6,
    numReviews: 15,
  },

  //32
  {
    name: "Boho Floral Blouse",
    description:
      "Flowy boho blouse with floral patterns, featuring a relaxed fit and balloon sleeves. Ideal for casual summer days.",
    price: 50,
    discountPrice: 45,
    countInStock: 30,
    sku: "TW-W-002",
    category: "Top Wear",
    brand: "BohoVibes",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Yellow", "Orange", "White "],
    collections: "Summer Collection",
    material: "Viscose",
    gender: "Women",
    images: [
      { url: "/images/thirty two/boho-floral-blouse-yellow.jpeg", altText: "Boho Floral Blouse" },
      { url: "/images/thirty two/boho-floral-blouse-orange.jpeg", altText: "Boho Floral Blouse" },
      { url: "/images/thirty two/boho-floral-blouse-white.jpeg", altText: "Boho Floral Blouse" },

    ],
    rating: 4.7,
    numReviews: 20,
  },

  //33
  {
    name: "Casual T-Shirt",
    description:
      "A soft, breathable casual t-shirt with a classic fit. Features a round neckline and short sleeves, perfect for everyday wear.",
    price: 25,
    discountPrice: 20,
    countInStock: 50,
    sku: "TW-W-003",
    category: "Top Wear",
    brand: "ComfyTees",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray"],
    collections: "Essentials",
    material: "Cotton",
    gender: "Women",
    images: [
      { url: "/images/thirty three/casual-tshirt-black.jpeg", altText: "Casual T-Shirt" },
      { url: "/images/thirty three/casual-tshirt-white.jpeg", altText: "Casual T-Shirt" },
      { url: "/images/thirty three/casual-tshirt-gray.jpeg", altText: "Casual T-Shirt" },

    ],
    rating: 4.5,
    numReviews: 25,
  },

  //34
  {
    name: "Off-Shoulder Top",
    description:
      "An elegant off-shoulder top with ruffled sleeves and a flattering fit. Ideal for adding a touch of femininity to your outfit.",
    price: 45,
    discountPrice: 40,
    countInStock: 35,
    sku: "TW-W-004",
    category: "Top Wear",
    brand: "Elegance",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "White", "Red"],
    collections: "Evening Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      { url: "/images/thirty four/off-shoulder-top-blue.jpeg", altText: "Off-Shoulder Top" },
      { url: "/images/thirty four/off-shoulder-top-white.jpeg", altText: "Off-Shoulder Top" },
      { url: "/images/thirty four/off-shoulder-top-red.jpeg", altText: "Off-Shoulder Top" },

    ],
    rating: 4.7,
    numReviews: 18,
  },

  //35
{
  name: "Floral Print Peplum Top",
  description:
    "A charming peplum top with a flattering waistline and soft floral prints. Features short puff sleeves and a round neckline, making it a perfect choice for casual outings or semi-formal events.",
  price: 42,
  discountPrice: 36,
  countInStock: 35,
  sku: "TW-W-035",
  category: "Top Wear",
  brand: "StyleAura",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "White", "Black"],
  collections: "Spring Blossom",
  material: "Cotton Blend",
  gender: "Women",
  images: [
    { url: "/images/thirty five/floral-peplum-top-red.jpeg", altText: "Floral Print Peplum Top - Red" },
    { url: "/images/thirty five/floral-peplum-top-white.jpeg", altText: "Floral Print Peplum Top - White" },
    { url: "/images/thirty five/floral-peplum-top-black.jpeg", altText: "Floral Print Peplum Top - Black" },
  ],
  rating: 4.6,
  numReviews: 19,
},

  //36
  {
    name: "Graphic Print Tee",
    description:
      "A trendy graphic print tee with a relaxed fit. Pair it with jeans or skirts for a cool and casual look.",
    price: 30,
    discountPrice: 25,
    countInStock: 45,
    sku: "TW-W-006",
    category: "Top Wear",
    brand: "StreetStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black ", "Pink", "White"],
    collections: "Urban Collection",
    material: "Cotton",
    gender: "Women",
    images: [
      { url: "/images/thirty six/graphic-print-tee-black.jpeg", altText: "Graphic Print Tee" },
      { url: "/images/thirty six/graphic-print-tee-pink.jpeg", altText: "Graphic Print Tee" },
      { url: "/images/thirty six/graphic-print-tee-white.jpeg", altText: "Graphic Print Tee" },

    ],
    rating: 4.6,
    numReviews: 30,
  },

  //37
  {
    name: "Ribbed Long-Sleeve Top",
    description:
      "A cozy ribbed long-sleeve top that offers comfort and style. Perfect for layering during cooler months.",
    price: 55,
    discountPrice: 50,
    countInStock: 30,
    sku: "TW-W-007",
    category: "Top Wear",
    brand: "ComfortFit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Yellow"],
    collections: "Fall Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      { url: "/images/thirty seven/ribbed-long-sleeve-top-red.jpeg", altText: "Ribbed Long-Sleeve Top" },
      { url: "/images/thirty seven/ribbed-long-sleeve-top-blue.jpeg", altText: "Ribbed Long-Sleeve Top" },
      { url: "/images/thirty seven/ribbed-long-sleeve-top-yellow.jpeg", altText: "Ribbed Long-Sleeve Top" },

    ],
    rating: 4.7,
    numReviews: 26,
  },

  //38
  {
    name: "Ruffle-Sleeve Blouse",
    description:
      "A lightweight ruffle-sleeve blouse with a flattering fit. Perfect for a feminine touch to any outfit.",
    price: 45,
    discountPrice: 40,
    countInStock: 20,
    sku: "TW-W-008",
    category: "Top Wear",
    brand: "FeminineWear",
    sizes: ["S", "M", "L"],
    colors: ["Yellow", "Orange", "White "],
    collections: "Summer Collection",
    material: "Viscose",
    gender: "Women",
    images: [
      { url: "/images/thirty eight/ruffle-sleeve-blouse-yellow.jpeg", altText: "Ruffle-Sleeve Blouse" },
      { url: "/images/thirty eight/ruffle-sleeve-blouse-orange.jpeg", altText: "Ruffle-Sleeve Blouse" },
      { url: "/images/thirty eight/ruffle-sleeve-blouse-white.jpeg", altText: "Ruffle-Sleeve Blouse" },

    ],
    rating: 4.5,
    numReviews: 19,
  },

  //39
  {
    name: "Classic Button-Up Shirt",
    description:
      "A versatile button-up shirt that can be dressed up or down. Made from soft fabric with a tailored fit, it's perfect for both casual and formal occasions.",
    price: 60,
    discountPrice: 55,
    countInStock: 25,
    sku: "TW-W-009",
    category: "Top Wear",
    brand: "ClassicStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pink ", "Black", "Gray"],
    collections: "Office Collection",
    material: "Cotton",
    gender: "Women",
    images: [
      { url: "/images/thirty nine/classic-button-up-shirt-pink.jpeg", altText: "Classic Button-Up Shirt" },
      { url: "/images/thirty nine/classic-button-up-shirt-black.jpeg", altText: "Classic Button-Up Shirt" },
      { url: "/images/thirty nine/classic-button-up-shirt-gray.jpeg", altText: "Classic Button-Up Shirt" },

    ],
    rating: 4.8,
    numReviews: 25,
  },

  //40
  {
    name: "V-Neck Wrap Top",
    description:
      "A chic v-neck wrap top with a tie waist. Its elegant style makes it perfect for both casual and semi-formal occasions.",
    price: 50,
    discountPrice: 45,
    countInStock: 30,
    sku: "TW-W-010",
    category: "Top Wear",
    brand: "ChicWrap",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Red", "Yellow"],
    collections: "Evening Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      { url: "/images/Forty/vneck-wrap-top-blue.jpeg", altText: "V-Neck Wrap Top" },
      { url: "/images/Forty/vneck-wrap-top-red.jpeg", altText: "V-Neck Wrap Top" },
      { url: "/images/Forty/vneck-wrap-top-yellow.jpeg", altText: "V-Neck Wrap Top" },

    ],
    rating: 4.7,
    numReviews: 22,
  },


];

module.exports = products;