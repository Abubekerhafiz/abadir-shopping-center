// Abadir Supermarket - Product Catalog
// Prices in ETB, based on Addis Ababa market rates (2026)
// Each product has an emoji used for its tile. To use a real photo instead,
// add: img: 'images/your-photo.webp'  (falls back to emoji if missing)

const CATEGORIES = [
  { id: 'all',       label: 'All',       emoji: '🛒', tint: '#f1efe9' },
  { id: 'produce',   label: 'Produce',   emoji: '🥑', tint: '#f1efe9' },
  { id: 'bakery',    label: 'Bakery',    emoji: '🥖', tint: '#f1efe9' },
  { id: 'dairy',     label: 'Dairy & Eggs', emoji: '🥛', tint: '#f1efe9' },
  { id: 'pantry',    label: 'Pantry',    emoji: '🫘', tint: '#f1efe9' },
  { id: 'beverage',  label: 'Drinks',    emoji: '🥤', tint: '#f1efe9' },
  { id: 'snacks',    label: 'Snacks',    emoji: '🍪', tint: '#f1efe9' },
  { id: 'household', label: 'Household', emoji: '🧼', tint: '#f1efe9' },
  { id: 'frozen',    label: 'Frozen',    emoji: '🧊', tint: '#f1efe9' },
];

const products = [
  // === PRODUCE ===
  { id: 'p1',  name: 'Avocado (per kg)',        category: 'produce', price: 85,   emoji: '🥑', img: 'images/produce-avocado.jpg' },
  { id: 'p2',  name: 'Bananas (per kg)',        category: 'produce', price: 45,   emoji: '🍌', img: 'images/produce-banana.jpg' },
  { id: 'p3',  name: 'Mangoes (per kg)',        category: 'produce', price: 120,  emoji: '🥭', img: 'images/produce-mango.jpg' },
  { id: 'p5',  name: 'Pineapple (whole)',       category: 'produce', price: 95,   img: 'images/produce-pineapple.jpg', emoji: '🍍' },
  { id: 'p6',  name: 'Tomatoes (per kg)',       category: 'produce', price: 35,   emoji: '🍅', img: 'images/produce-tomato.jpg' },
  { id: 'p7',  name: 'Onions (per kg)',         category: 'produce', price: 55,   emoji: '🧅', img: 'images/produce-onion.jpg' },
  { id: 'p8',  name: 'Potatoes (per kg)',       category: 'produce', price: 40,   emoji: '🥔', img: 'images/produce-potato.jpg' },
  { id: 'p9',  name: 'Carrots (per kg)',        category: 'produce', price: 38,   emoji: '🥕', img: 'images/produce-carrot.jpg' },
  { id: 'p10', name: 'Cabbage (whole)',         category: 'produce', price: 25,   img: 'images/produce-cabbage.jpg', emoji: '🥬' },
  { id: 'p11', name: 'Lettuce (head)',          category: 'produce', price: 30,   emoji: '🥗', img: 'images/produce-lettuce.jpg' },
  { id: 'p12', name: 'Spinach (bunch)',         category: 'produce', price: 15,   emoji: '🌿', img: 'images/produce-spinach.jpg' },
  { id: 'p13', name: 'Green Peppers (per kg)',  category: 'produce', price: 42,   img: 'images/produce-peppers.jpg', emoji: '🫑' },
  { id: 'p14', name: 'Garlic (per kg)',         category: 'produce', price: 180,  img: 'images/produce-garlic.jpg', emoji: '🧄' },
  { id: 'p15', name: 'Ginger (per kg)',         category: 'produce', price: 95,   img: 'images/produce-ginger.jpg', emoji: '🫚' },
  { id: 'p16', name: 'Lemons (per kg)',         category: 'produce', price: 75,   emoji: '🍋', img: 'images/produce-lemon.jpg' },
  { id: 'p17', name: 'Oranges (per kg)',        category: 'produce', price: 55,   emoji: '🍊', img: 'images/produce-orange.jpg' },
  { id: 'p18', name: 'Apples (per kg)',         category: 'produce', price: 150,  emoji: '🍎', img: 'images/produce-apple.jpg' },
  { id: 'p19', name: 'Watermelon (whole)',      category: 'produce', price: 120,  img: 'images/produce-watermelon.jpg', emoji: '🍉' },
  { id: 'p20', name: 'Beetroot (per kg)',       category: 'produce', price: 35,   img: 'images/produce-beetroot.jpg', emoji: '🫜' },

  // === BAKERY ===
  { id: 'b1',  name: 'Sourdough Loaf',          category: 'bakery', price: 65,   img: 'images/bakery-sourdough.jpg', emoji: '🍞' },
  { id: 'b2',  name: 'Whole Wheat Bread',       category: 'bakery', price: 45,   emoji: '🍞', img: 'images/bakery-wholegrain.jpg' },
  { id: 'b3',  name: 'White Bread (large)',     category: 'bakery', price: 38,   emoji: '🍞', img: 'images/bakery-white-bread.jpg' },
  { id: 'b4',  name: 'Baguette',                category: 'bakery', price: 35,   emoji: '🥖', img: 'images/bakery-baguette.jpg' },
  { id: 'b6',  name: 'Muffins (3 pcs)',         category: 'bakery', price: 75,   img: 'images/bakery-muffins.jpg', emoji: '🧁' },
  { id: 'b7',  name: 'Cookies (pack of 6)',     category: 'bakery', price: 85,   img: 'images/bakery-cookies.jpg', emoji: '🍪' },
  { id: 'b8',  name: 'Doughnuts (4 pcs)',       category: 'bakery', price: 95,   img: 'images/bakery-doughnuts.jpg', emoji: '🍩' },
  { id: 'b9',  name: 'Cinnamon Rolls (2 pcs)',  category: 'bakery', price: 65,   img: 'images/bakery-cinnamon.jpg', emoji: '🍥' },
  { id: 'b10', name: 'Injera (pack of 5)',      category: 'bakery', price: 85,   emoji: '🫓', img: 'images/bakery-injera.jpg' },
  { id: 'b12', name: 'Dabo (Ethiopian bread)',  category: 'bakery', price: 120,  img: 'images/bakery-dabo.jpg', emoji: '🫓' },

  // === DAIRY & EGGS ===
  { id: 'd1',  name: 'Fresh Milk (1L)',         category: 'dairy', price: 65,   emoji: '🥛', img: 'images/dairy-milk.jpg' },
  { id: 'd2',  name: 'Yogurt (500g)',           category: 'dairy', price: 85,   emoji: '🥣', img: 'images/dairy-yogurt.jpg' },
  { id: 'd3',  name: 'Eggs (pack of 12)',       category: 'dairy', price: 95,   emoji: '🥚', img: 'images/dairy-eggs.jpg' },
  { id: 'd5',  name: 'Butter (250g)',           category: 'dairy', price: 145,  emoji: '🧈', img: 'images/dairy-butter.jpg' },
  { id: 'd6',  name: 'Cheese (local, 250g)',    category: 'dairy', price: 185,  emoji: '🧀', img: 'images/dairy-cheese.jpg' },
  { id: 'd7',  name: 'Ayib (Ethiopian cheese)', category: 'dairy', price: 75,   emoji: '🧀', img: 'images/dairy-ayib.jpg' },
  { id: 'd9',  name: 'Lab (fermented milk)',    category: 'dairy', price: 55,   img: 'images/dairy-lab.jpg', emoji: '🥛' },
  { id: 'd12', name: 'Fresh Cream (250ml)',     category: 'dairy', price: 125,  emoji: '🥛', img: 'images/dairy-cream.jpg' },

  // === PANTRY ===
  { id: 'pa1',  name: 'Tomoca Coffee (250g)',   category: 'pantry', price: 485,  emoji: '☕', img: 'images/pantry-coffee.jpg' },
  { id: 'pa4',  name: 'Pasta (500g)',           category: 'pantry', price: 55,   emoji: '🍝', img: 'images/pantry-spaghetti.jpg' },
  { id: 'pa6',  name: 'Rice (1kg)',             category: 'pantry', price: 95,   emoji: '🍚', img: 'images/pantry-rice.jpg' },
  { id: 'pa8',  name: 'Olive Oil (500ml)',      category: 'pantry', price: 485,  emoji: '🫒', img: 'images/pantry-olive-oil.jpg' },
  { id: 'pa9',  name: 'Vegetable Oil (1L)',     category: 'pantry', price: 175,  emoji: '🍶', img: 'images/pantry-veg-oil.jpg' },
  { id: 'pa10', name: 'Teff Flour (1kg)',       category: 'pantry', price: 120,  emoji: '🌾', img: 'images/pantry-flour.jpg' },
  { id: 'pa12', name: 'Sugar (1kg)',            category: 'pantry', price: 95,   emoji: '🍬', img: 'images/pantry-sugar.jpg' },
  { id: 'pa13', name: 'Salt (500g)',            category: 'pantry', price: 25,   emoji: '🧂', img: 'images/pantry-salt.jpg' },
  { id: 'pa14', name: 'Honey (500g)',           category: 'pantry', price: 285,  emoji: '🍯', img: 'images/pantry-honey.jpg' },
  { id: 'pa15', name: 'Peanut Butter',          category: 'pantry', price: 165,  emoji: '🥜', img: 'images/pantry-peanut-butter.jpg' },
  { id: 'pa16', name: 'Jam (strawberry)',       category: 'pantry', price: 145,  emoji: '🍓', img: 'images/pantry-jam.jpg' },
  { id: 'pa17', name: 'Canned Tomatoes',        category: 'pantry', price: 65,   emoji: '🥫', img: 'images/pantry-canned-tomatoes.jpg' },
  { id: 'pa18', name: 'Tuna (canned)',          category: 'pantry', price: 95,   img: 'images/pantry-tuna.jpg', emoji: '🥫' },
  { id: 'pa19', name: 'Brown Lentils (1kg)',    category: 'pantry', price: 85,   emoji: '🫘', img: 'images/pantry-lentils.jpg' },
  { id: 'pa20', name: 'Chickpeas (1kg)',        category: 'pantry', price: 95,   emoji: '🫘', img: 'images/pantry-chickpeas.jpg' },
  { id: 'pa21', name: 'Split Peas (1kg)',       category: 'pantry', price: 75,   img: 'images/pantry-split-peas.jpg', emoji: '🫘' },
  { id: 'pa22', name: 'Shiro (500g)',           category: 'pantry', price: 85,   img: 'images/pantry-shiro.jpg', emoji: '🍲' },
  { id: 'pa23', name: 'Mitmita (spice)',        category: 'pantry', price: 65,   img: 'images/pantry-mitmita.jpg', emoji: '🌶️' },
  { id: 'pa24', name: 'Berbere (500g)',         category: 'pantry', price: 145,  emoji: '🌶️', img: 'images/pantry-berbere.jpg' },
  { id: 'pa25', name: 'Turmeric (100g)',        category: 'pantry', price: 45,   img: 'images/pantry-turmeric.jpg', emoji: '🟡' },

  // === DRINKS ===
  { id: 'be1',  name: 'Bottled Water (1.5L)',   category: 'beverage', price: 25,   emoji: '💧', img: 'images/drinks-water.jpg' },
  { id: 'be3',  name: 'Orange Juice (1L)',      category: 'beverage', price: 145,  emoji: '🧃', img: 'images/drinks-orange-juice.jpg' },
  { id: 'be4',  name: 'Mango Juice (1L)',       category: 'beverage', price: 135,  img: 'images/drinks-mango-juice.jpg', emoji: '🧃' },
  { id: 'be5',  name: 'Coca-Cola (1.25L)',      category: 'beverage', price: 65,   emoji: '🥤', img: 'images/drinks-cola.jpg' },
  { id: 'be6',  name: 'Sprite (1.25L)',         category: 'beverage', price: 65,   img: 'images/drinks-sprite.jpg', emoji: '🥤' },
  { id: 'be8',  name: 'St. George Beer',        category: 'beverage', price: 55,   emoji: '🍺', img: 'images/drinks-beer.jpg' },
  { id: 'be12', name: 'Ethiopian Wine (red)',   category: 'beverage', price: 285,  emoji: '🍷', img: 'images/drinks-wine.jpg' },
  { id: 'be13', name: 'Tej (honey wine)',       category: 'beverage', price: 165,  img: 'images/drinks-tej.jpg', emoji: '🍯' },
  { id: 'be15', name: 'Tella (home brew)',      category: 'beverage', price: 45,   img: 'images/drinks-tella.jpg', emoji: '🍺' },

  // === SNACKS ===
  { id: 's3',  name: 'Biscuits (pack)',         category: 'snacks', price: 35,   emoji: '🍪', img: 'images/snacks-biscuits.jpg' },
  { id: 's4',  name: 'Chocolate Bar',           category: 'snacks', price: 55,   emoji: '🍫', img: 'images/snacks-chocolate.jpg' },
  { id: 's5',  name: 'Gummy Candies',           category: 'snacks', price: 45,   img: 'images/snacks-gummy.jpg', emoji: '🍬' },
  { id: 's6',  name: 'Roasted Peanuts',         category: 'snacks', price: 35,   emoji: '🥜', img: 'images/snacks-peanuts.jpg' },
  { id: 's7',  name: 'Sunflower Seeds',         category: 'snacks', price: 25,   img: 'images/snacks-sunflower.jpg', emoji: '🌻' },
  { id: 's8',  name: 'Popcorn (ready)',         category: 'snacks', price: 45,   img: 'images/snacks-popcorn.jpg', emoji: '🍿' },
  { id: 's9',  name: 'Mixed Nuts',              category: 'snacks', price: 185,  emoji: '🥜', img: 'images/snacks-almonds.jpg' },
  { id: 's10', name: 'Dried Fruit Mix',         category: 'snacks', price: 145,  emoji: '🍇', img: 'images/snacks-raisins.jpg' },
  { id: 's11', name: 'Kinder Chocolate (100g)', category: 'snacks', price: 96,   was: 120, emoji: '🍫', img: 'images/promo-kinder.jpg' },
  { id: 's12', name: 'Nutella (350g)',          category: 'snacks', price: 385,  emoji: '🍫', img: 'images/promo-nutella.jpg' },

  // === HOUSEHOLD ===
  { id: 'h1',  name: 'Toilet Paper (4 rolls)',  category: 'household', price: 145, img: 'images/house-toilet-paper.jpg', emoji: '🧻' },
  { id: 'h3',  name: 'Dish Soap',               category: 'household', price: 75,  img: 'images/house-dish-soap.jpg', emoji: '🧼' },
  { id: 'h4',  name: 'Laundry Detergent',       category: 'household', price: 185, img: 'images/house-detergent.jpg', emoji: '🧺' },
  { id: 'h5',  name: 'Hand Soap',               category: 'household', price: 55,  img: 'images/house-hand-soap.jpg', emoji: '🧴' },
  { id: 'h6',  name: 'Trash Bags (30 pcs)',     category: 'household', price: 125, img: 'images/house-trash-bags.jpg', emoji: '🗑️' },
  { id: 'h7',  name: 'Aluminum Foil',           category: 'household', price: 85,  img: 'images/house-foil.jpg', emoji: '📦' },
  { id: 'h9',  name: 'Matches (box)',           category: 'household', price: 15,  img: 'images/house-matches.jpg', emoji: '🔥' },
  { id: 'h10', name: 'Candles (pack)',          category: 'household', price: 45,  img: 'images/house-candles.jpg', emoji: '🕯️' },

  // === FROZEN ===
  { id: 'f1', name: 'Frozen Peas (500g)',    category: 'frozen', price: 85,   emoji: '🫛', img: 'images/frozen-peas.jpg' },
  { id: 'f2', name: 'Frozen Mixed Veg',      category: 'frozen', price: 95,   img: 'images/frozen-mixed-veg.jpg', emoji: '🥦' },
  { id: 'f3', name: 'Frozen Fish (tilapia)', category: 'frozen', price: 245,  emoji: '🐟', img: 'images/meat-fish.jpg' },
  { id: 'f4', name: 'Chicken Breast (1kg)',  category: 'frozen', price: 385,  emoji: '🍗', img: 'images/meat-chicken.jpg' },
  { id: 'f5', name: 'Beef Mince (1kg)',      category: 'frozen', price: 485,  emoji: '🥩', img: 'images/meat-beef.jpg' },
  { id: 'f6', name: 'Lamb Chops (1kg)',      category: 'frozen', price: 685,  img: 'images/frozen-lamb.jpg', emoji: '🍖' },
  { id: 'f7', name: 'Frozen Pizza',          category: 'frozen', price: 285,  img: 'images/frozen-pizza.jpg', emoji: '🍕' },
  { id: 'f8', name: 'Ice Cream (500ml)',     category: 'frozen', price: 165,  emoji: '🍦', img: 'images/frozen-ice-cream.jpg' },
];

// Price reference notes:
// - Produce prices fluctuate seasonally
// - Dairy prices from local processors (Sebeta, Genesis)
// - Coffee prices for mid-range Ethiopian beans
// - Beverage prices include deposit where applicable
// - Meat prices from butcher shops near 4Kilo
