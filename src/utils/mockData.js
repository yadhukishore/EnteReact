export const restaurants = [
    {id:111, resName: "Pizza Hut", foodName: "Pepperoni Pizza" ,rating:3.4},
    {id:112, resName: "McDonald's", foodName: "Big Mac",rating:2.2 },
    {id:121, resName: "Hotel Arayas", foodName: "Cutlet",rating:4.1 },
    {id:211,resName: "Subway", foodName: "Subway Club",rating:3.8 },
    {id:222, resName: "KFC", foodName: "Original Recipe Chicken",rating:4.4 },
    {id:333, resName: "Starbucks", foodName: "Caramel Macchiato",rating:2.8 },
  ];

  export const Hotels = [
    {
      id:111,
       name: "Pizza Hut",
       des: "North Indian kababs for $450",
       menu: {
         items: [
           {
             id: 1,
             title: "Teetering Taco Tower",
             description: "A massive and frankly distressingly large tower of tacos with every filling you can imagine, and far more tacos than you need",
             price: 15,
             currency: "$",
             active: true,
             category: ["dinner", "sides"],
             dietary: {
               vegan: false,
               vegetarian: false,
               glutenFree: true
             },
             photo: {
               imageUrl: "https://example.com/taco-tower.jpg",
               attribution: {
                 text: "Photo by John Doe",
                 url: "https://example.com/johndoe"
               }
             }
           },
           {
             id: 222,
             title: "Veggie Delight",
             description: "A delightful combination of fresh vegetables, topped with our signature sauce",
             price: 12,
             currency: "$",
             active: true,
             category: ["dinner", "vegetarian"],
             dietary: {
               vegan: false,
               vegetarian: true,
               glutenFree: true
             },
             photo: {
               imageUrl: "https://example.com/veggie-delight.jpg",
               attribution: {
                 text: "Photo by Jane Doe",
                 url: "https://example.com/janedoe"
               }
             }
           }
         ]
       }
    },
    {
      id: 222, 
      name: "KFC",
      des: "Finger Lickin' Good Chicken for $10",
      menu: {
        items: [
          {
            id: 1,
            title: "Original Recipe Chicken",
            description: "Our secret recipe, slow-cooked, then pressure-cooked to lock in the juices. Served with a side of your choice.",
            price: 10,
            currency: "$",
            active: true,
            category: ["dinner", "chicken"],
            dietary: {
              vegan: false,
              vegetarian: false,
              glutenFree: true
            },
            photo: {
              imageUrl: "https://example.com/original-recipe-chicken.jpg",
              attribution: {
                text: "Photo by KFC",
                url: "https://example.com/kfc"
              }
            }
          },
          {
            id: 2,
            title: "Zinger Sandwich",
            description: "A crispy, juicy chicken sandwich with a tangy BBQ sauce, topped with a crispy pickle and a slice of cheese.",
            price: 12,
            currency: "$",
            active: true,
            category: ["dinner", "sandwich"],
            dietary: {
              vegan: false,
              vegetarian: false,
              glutenFree: false
            },
            photo: {
              imageUrl: "https://example.com/zinger-sandwich.jpg",
              attribution: {
                text: "Photo by KFC",
                url: "https://example.com/kfc"
              }
            }
          }
        ]
      }
   }
  ];
 
   