const restaurants = [
  {
    name: 'The Full Pallete',
    location: 'New York',
    menu: {
      entrees: [
        {name: 'Escargot', description: 'With southern French spices', price: 25},
        {name: 'Duck Foie Gras', description: 'With black truffle shavings', price: 35},
        {name: 'Fried Egg', description: 'Seasoned with truffle cream and cheese', price: 20},
      ],

      main: [
        {
          name: 'Herb-Encrusted Steak',
          description: 'With delicately sliced and seasoned vegetables',
          price: 40,
        },
        {
          name: "Ox Tail Shepard's Pie",
          description: 'With black truffle and pureed parsnips',
          price: 35,
        },
        {name: 'Filet of Sole', description: 'With citrus dressing', price: 44},
      ],

      desserts: [
        {name: 'Paris-Brest', description: 'Revisted', price: 18},
        {name: 'Chocolate Macaroons', description: 'With vanilla ice cream', price: 22},
        {name: 'Chocolate Mousse', description: 'With spices and black truffle', price: 23},
      ],
    },
  },

  {
    name: 'The Enchanted Plate',
    location: 'New York',
    menu: {
      entrees: [
        {name: 'Foie Gras Ravioli', description: 'With truffle cream', price: 25},
        {name: 'Oscietra Caviar', description: 'With buckwheat blinis', price: 35},
        {name: 'Lobster and Leek Foam', description: 'Marinated with orange zest', price: 20},
        {name: 'Duck Foie Gras', description: 'With fig jam and grilled baguette', price: 35},
      ],

      main: [
        {
          name: 'Fresh Buttered Scallops',
          description: 'With white celery puree',
          price: 40,
        },
        {
          name: 'Pan-Fried Lobster',
          description: 'With mashed sweet potatoes',
          price: 35,
        },
        {name: 'Braised Ox Tail', description: 'With wild rice and lemon zest', price: 44},
      ],

      desserts: [
        {
          name: 'Chocolate and Hazelnut Macaroon',
          description: 'With caramel butter ice cream',
          price: 18,
        },
        {name: 'Baba au rhum', description: 'With lemon drizzle', price: 22},
        {name: 'Lemon Meringue Pie', description: 'Destructured', price: 23},
      ],
    },
  },

  {
    name: 'Bastille',
    location: 'New York',
    menu: {
      entrees: [
        {name: 'Citrus Squid Carpaccio', description: 'With orange zest', price: 25},
        {
          name: "Grandmother's Vegetable Soup",
          description: 'Carrots, parsnips, Jerusalem artichoke',
          price: 35,
        },
        {name: 'Onion Soup', description: 'Revisted', price: 20},
      ],

      main: [
        {
          name: 'Scallops',
          description: 'With mashed parsnip',
          price: 40,
        },
        {
          name: 'Margret de canard',
          description: 'With mashed potatoes',
          price: 35,
        },
        {name: 'Game Hen', description: 'With vegetable gnocchis', price: 44},
      ],

      desserts: [
        {name: 'Floral Ice Cream', description: 'With hazelnut butter', price: 18},
        {name: 'Chocolate Lava Cake', description: 'Revisited', price: 22},
        {name: 'Napolean', description: 'With blueberries and marzipan', price: 23},
      ],
    },
  },

  {
    name: 'Le Gourmand',
    location: 'New York',
    menu: {
      entrees: [
        {name: 'Tuna Carpaccio', description: 'Seasoned with yuzu', price: 25},
        {name: 'Crunchy Lobster Croquets', description: 'With seasonal vegetables', price: 35},
        {name: 'Mushroom soup', description: 'With truffles', price: 20},
      ],

      main: [
        {
          name: 'Roast Chicken',
          description: 'With provincal herbs and truffle cream',
          price: 40,
        },
        {
          name: 'Roasted Lobster',
          description: 'With seasonal vegetables',
          price: 35,
        },
        {name: 'Angust Beef Ribs', description: 'With mashed parsnips', price: 44},
      ],

      desserts: [
        {name: 'Assorted Dessert Plate', description: "Chef's choice", price: 18},
        {name: 'Creme brulee', description: 'Revisited', price: 22},
        {name: 'Tiramisu', description: 'With hazelnuts', price: 23},
      ],
    },
  },
];

export default restaurants;
