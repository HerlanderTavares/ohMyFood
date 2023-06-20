const restaurants = [
  {
    name: 'The Full Pallete',
    location: 'New York',
    menu: {
      entries: [
        {name: 'Escargot', description: 'With southern French spices', prices: 25},
        {name: 'Duck Foie Gras', description: 'With black truffle shavings', prices: 35},
        {name: 'Fried Egg', description: 'Seasoned with truffle cream and cheese', prices: 20},
      ],

      main: [
        {
          name: 'Herb-Encrusted Steak',
          description: 'With delicately sliced and seasoned vegetables',
          prices: 40,
        },
        {
          name: "Ox Tail Shepard's Pie",
          description: 'With black truffle and pureed parsnips',
          prices: 35,
        },
        {name: 'Filet of Sole', description: 'With citrus dressing', prices: 44},
      ],

      desserts: [
        {name: 'Paris-Brest', description: 'Revisted', prices: 18},
        {name: 'Chocolate Macaroons', description: 'With vanilla ice cream', prices: 22},
        {name: 'Chocolate Mousse', description: 'With spices and black truffle', prices: 23},
      ],
    },
  },

  {
    name: 'The Enchanted Plate',
    location: 'New York',
    menu: {
      entries: [
        {name: 'Foie Gras Ravioli', description: 'With truffle cream', prices: 25},
        {name: 'Oscietra Caviar', description: 'With buckwheat blinis', prices: 35},
        {name: 'Lobster and Leek Foam', description: 'Marinated with orange zest', prices: 20},
        {name: 'Duck Foie Gras', description: 'With fig jam and grilled baguette', prices: 35},
      ],

      main: [
        {
          name: 'Fresh Buttered Scallops',
          description: 'With white celery puree',
          prices: 40,
        },
        {
          name: 'Pan-Fried Lobster',
          description: 'With mashed sweet potatoes',
          prices: 35,
        },
        {name: 'Braised Ox Tail', description: 'With wild rice and lemon zest', prices: 44},
      ],

      desserts: [
        {
          name: 'Chocolate and Hazelnut Macaroon',
          description: 'With caramel butter ice cream',
          prices: 18,
        },
        {name: 'Baba au rhum', description: 'With lemon drizzle', prices: 22},
        {name: 'Lemon Meringue Pie', description: 'Destructured', prices: 23},
      ],
    },
  },

  {
    name: 'Bastille',
    location: 'New York',
    menu: {
      entries: [
        {name: 'Citrus Squid Carpaccio', description: 'With orange zest', prices: 25},
        {
          name: "Grandmother's Vegetable Soup",
          description: 'Carrots, parsnips, Jerusalem artichoke',
          prices: 35,
        },
        {name: 'Onion Soup', description: 'Revisted', prices: 20},
      ],

      main: [
        {
          name: 'Scallops',
          description: 'With mashed parsnip',
          prices: 40,
        },
        {
          name: 'Margret de canard',
          description: 'With mashed potatoes',
          prices: 35,
        },
        {name: 'Game Hen', description: 'With vegetable gnocchis', prices: 44},
      ],

      desserts: [
        {name: 'Floral Ice Cream', description: 'With hazelnut butter', prices: 18},
        {name: 'Chocolate Lava Cake', description: 'Revisited', prices: 22},
        {name: 'Napolean', description: 'With blueberries and marzipan', prices: 23},
      ],
    },
  },

  {
    name: 'Le Gourmand',
    location: 'New York',
    menu: {
      entries: [
        {name: 'Tuna Carpaccio', description: 'Seasoned with yuzu', prices: 25},
        {name: 'Crunchy Lobster Croquets', description: 'With seasonal vegetables', prices: 35},
        {name: 'Mushroom soup', description: 'With truffles', prices: 20},
      ],

      main: [
        {
          name: 'Roast Chicken',
          description: 'With provincal herbs and truffle cream',
          prices: 40,
        },
        {
          name: 'Roasted Lobster',
          description: 'With seasonal vegetables',
          prices: 35,
        },
        {name: 'Angust Beef Ribs', description: 'With mashed parsnips', prices: 44},
      ],

      desserts: [
        {name: 'Assorted Dessert Plate', description: "Chef's choice", prices: 18},
        {name: 'Creme brulee', description: 'Revisited', prices: 22},
        {name: 'Tiramisu', description: 'With hazelnuts', prices: 23},
      ],
    },
  },
];

export default restaurants;
