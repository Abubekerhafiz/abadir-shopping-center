// Abadir Market - Product Catalog
// Prices in ETB, based on current Addis Ababa market rates (2026)

const products = [// === PRODUCE ===
{
    id: 'p1',
    name: 'Avocado (per kg)',
    category: 'produce',
    price: 85.00,
    img: 'https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2022/04/pexels-antonio-filigno-8538296.jpg'
}, {
    id: 'p2',
    name: 'Bananas (per kg)',
    category: 'produce',
    price: 45.00,
    img: 'https://www.allrecipes.com/thmb/jYmw-0Vijg1E_OuG2yGjEAcdQg4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-new-banana-adobe-ar-4x3-d8f0871e12214350be7ae5575eea4eed.jpg'
}, {
    id: 'p3',
    name: 'Mangoes (per kg)',
    category: 'produce',
    price: 120.00,
    img: 'https://sukhis.com/app/uploads/2022/09/image4-1024x683.jpg'
}, {
    id: 'p4',
    name: 'Papaya (whole)',
    category: 'produce',
    price: 65.00,
    img: 'https://exoticfruitbox.com/wp-content/uploads/2015/10/papaya-3-Exotic.jpg'
}, {
    id: 'p5',
    name: 'Pineapple (whole)',
    category: 'produce',
    price: 95.00,
    img: 'https://www.healthxchange.sg/adobe/dynamicmedia/deliver/dm-aid--c06c2aed-90cf-4360-a423-7f053b2a44d9/pineapple-health-benefits-and-ways-to-enjoy.jpg?preferwebp=true'
}, {
    id: 'p6',
    name: 'Tomatoes (per kg)',
    category: 'produce',
    price: 35.00,
    img: 'https://wallpapers.com/images/hd/red-tomato-fruits-pink-aesthetic-background-n4x9t5ytzcw3rozx.jpg'
}, {
    id: 'p7',
    name: 'Onions (per kg)',
    category: 'produce',
    price: 55.00,
    img: 'https://i5.walmartimages.ca/images/Enlarge/901/2_1/59559699012_1.jpg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF'
}, {
    id: 'p8',
    name: 'Potatoes (per kg)',
    category: 'produce',
    price: 40.00,
    img: 'https://i5.walmartimages.com/seo/Russet-Baking-Potatoes-Whole-Fresh-Each_c638c006-a982-48f7-aa33-6d3a8dc2983c.8fd015937ebfdd46c8fcb6177d0d1b1d.jpeg'
}, {
    id: 'p9',
    name: 'Carrots (per kg)',
    category: 'produce',
    price: 38.00,
    img: 'https://bcfresh.ca/wp-content/uploads/2021/11/Carrots.jpg'
}, {
    id: 'p10',
    name: 'Cabbage (whole)',
    category: 'produce',
    price: 25.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Cabbage'
}, {
    id: 'p11',
    name: 'Lettuce (head)',
    category: 'produce',
    price: 30.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Lettuce'
}, {
    id: 'p12',
    name: 'Spinach (bunch)',
    category: 'produce',
    price: 15.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Spinach'
}, {
    id: 'p13',
    name: 'Green Peppers (per kg)',
    category: 'produce',
    price: 42.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Peppers'
}, {
    id: 'p14',
    name: 'Garlic (per kg)',
    category: 'produce',
    price: 180.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Garlic'
}, {
    id: 'p15',
    name: 'Ginger (per kg)',
    category: 'produce',
    price: 95.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Ginger'
}, {
    id: 'p16',
    name: 'Lemons (per kg)',
    category: 'produce',
    price: 75.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Lemons'
}, {
    id: 'p17',
    name: 'Oranges (per kg)',
    category: 'produce',
    price: 55.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Oranges'
}, {
    id: 'p18',
    name: 'Apples (per kg)',
    category: 'produce',
    price: 150.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Apples'
}, {
    id: 'p19',
    name: 'Watermelon (whole)',
    category: 'produce',
    price: 120.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Watermelon'
}, {
    id: 'p20',
    name: 'Beetroot (per kg)',
    category: 'produce',
    price: 35.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Beetroot'
},
// === BAKERY ===
{
    id: 'b1',
    name: 'Sourdough Loaf',
    category: 'bakery',
    price: 65.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Sourdough'
}, {
    id: 'b2',
    name: 'Whole Wheat Bread',
    category: 'bakery',
    price: 45.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Wheat+Bread'
}, {
    id: 'b3',
    name: 'White Bread (large)',
    category: 'bakery',
    price: 38.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=White+Bread'
}, {
    id: 'b4',
    name: 'Baguette',
    category: 'bakery',
    price: 35.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Baguette'
}, {
    id: 'b5',
    name: 'Croissants (2 pcs)',
    category: 'bakery',
    price: 55.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Croissants'
}, {
    id: 'b6',
    name: 'Muffins (3 pcs)',
    category: 'bakery',
    price: 75.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Muffins'
}, {
    id: 'b7',
    name: 'Cookies (pack of 6)',
    category: 'bakery',
    price: 85.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Cookies'
}, {
    id: 'b8',
    name: 'Doughnuts (4 pcs)',
    category: 'bakery',
    price: 95.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Doughnuts'
}, {
    id: 'b9',
    name: 'Cinnamon Rolls (2)',
    category: 'bakery',
    price: 65.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Cinnamon+Rolls'
}, {
    id: 'b10',
    name: 'Injera (pack of 5)',
    category: 'bakery',
    price: 85.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Injera'
}, {
    id: 'b11',
    name: 'Ambasha',
    category: 'bakery',
    price: 55.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Ambasha'
}, {
    id: 'b12',
    name: 'Dabo (Ethiopian bread)',
    category: 'bakery',
    price: 120.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Dabo'
},
// === DAIRY ===
{
    id: 'd1',
    name: 'Fresh Milk (1L)',
    category: 'dairy',
    price: 65.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Milk'
}, {
    id: 'd2',
    name: 'Yogurt (500g)',
    category: 'dairy',
    price: 85.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Yogurt'
}, {
    id: 'd3',
    name: 'Eggs (pack of 12)',
    category: 'dairy',
    price: 95.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Eggs'
}, {
    id: 'd4',
    name: 'Eggs (pack of 30)',
    category: 'dairy',
    price: 220.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Eggs+30'
}, {
    id: 'd5',
    name: 'Butter (250g)',
    category: 'dairy',
    price: 145.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Butter'
}, {
    id: 'd6',
    name: 'Cheese (local, 250g)',
    category: 'dairy',
    price: 185.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Cheese'
}, {
    id: 'd7',
    name: 'Ayib (Ethiopian cheese)',
    category: 'dairy',
    price: 75.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Ayib'
}, {
    id: 'd8',
    name: 'Cream Cheese',
    category: 'dairy',
    price: 165.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Cream+Cheese'
}, {
    id: 'd9',
    name: 'Lab (fermented milk)',
    category: 'dairy',
    price: 55.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Lab'
}, {
    id: 'd10',
    name: 'Mozzarella (200g)',
    category: 'dairy',
    price: 195.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Mozzarella'
}, {
    id: 'd11',
    name: 'Cheddar (200g)',
    category: 'dairy',
    price: 210.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Cheddar'
}, {
    id: 'd12',
    name: 'Fresh Cream (250ml)',
    category: 'dairy',
    price: 125.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Cream'
},
// === PANTRY ===
{
    id: 'pa1',
    name: 'Tomoca Coffee (250g)',
    category: 'pantry',
    price: 485.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Tomoca'
}, {
    id: 'pa2',
    name: 'Sidamo Coffee (500g)',
    category: 'pantry',
    price: 850.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Sidamo'
}, {
    id: 'pa3',
    name: 'Yirgacheffe Coffee',
    category: 'pantry',
    price: 1200.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Yirgacheffe'
}, {
    id: 'pa4',
    name: 'Pasta (500g)',
    category: 'pantry',
    price: 55.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Pasta'
}, {
    id: 'pa5',
    name: 'Spaghetti (500g)',
    category: 'pantry',
    price: 52.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Spaghetti'
}, {
    id: 'pa6',
    name: 'Rice (1kg)',
    category: 'pantry',
    price: 95.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Rice'
}, {
    id: 'pa7',
    name: 'Basmati Rice (1kg)',
    category: 'pantry',
    price: 145.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Basmati'
}, {
    id: 'pa8',
    name: 'Olive Oil (500ml)',
    category: 'pantry',
    price: 485.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Olive+Oil'
}, {
    id: 'pa9',
    name: 'Vegetable Oil (1L)',
    category: 'pantry',
    price: 175.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Oil'
}, {
    id: 'pa10',
    name: 'Teff Flour (1kg)',
    category: 'pantry',
    price: 120.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Teff'
}, {
    id: 'pa11',
    name: 'Wheat Flour (1kg)',
    category: 'pantry',
    price: 75.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Flour'
}, {
    id: 'pa12',
    name: 'Sugar (1kg)',
    category: 'pantry',
    price: 95.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Sugar'
}, {
    id: 'pa13',
    name: 'Salt (500g)',
    category: 'pantry',
    price: 25.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Salt'
}, {
    id: 'pa14',
    name: 'Honey (500g)',
    category: 'pantry',
    price: 285.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Honey'
}, {
    id: 'pa15',
    name: 'Peanut Butter',
    category: 'pantry',
    price: 165.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Peanut+Butter'
}, {
    id: 'pa16',
    name: 'Jam (strawberry)',
    category: 'pantry',
    price: 145.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Jam'
}, {
    id: 'pa17',
    name: 'Canned Tomatoes',
    category: 'pantry',
    price: 65.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Canned'
}, {
    id: 'pa18',
    name: 'Tuna (canned)',
    category: 'pantry',
    price: 95.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Tuna'
}, {
    id: 'pa19',
    name: 'B lentils (1kg)',
    category: 'pantry',
    price: 85.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Lentils'
}, {
    id: 'pa20',
    name: 'Chickpeas (1kg)',
    category: 'pantry',
    price: 95.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Chickpeas'
}, {
    id: 'pa21',
    name: 'Split Peas (1kg)',
    category: 'pantry',
    price: 75.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Split+Peas'
}, {
    id: 'pa22',
    name: 'Shiro (500g)',
    category: 'pantry',
    price: 85.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Shiro'
}, {
    id: 'pa23',
    name: 'Mitmita (spice)',
    category: 'pantry',
    price: 65.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Mitmita'
}, {
    id: 'pa24',
    name: 'Berbere (500g)',
    category: 'pantry',
    price: 145.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Berbere'
}, {
    id: 'pa25',
    name: 'Turmeric (100g)',
    category: 'pantry',
    price: 45.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Turmeric'
},
// === BEVERAGES ===
{
    id: 'be1',
    name: 'Bottled Water (1.5L)',
    category: 'beverage',
    price: 25.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Water'
}, {
    id: 'be2',
    name: 'Mineral Water (6 pack)',
    category: 'beverage',
    price: 120.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Water+Pack'
}, {
    id: 'be3',
    name: 'Orange Juice (1L)',
    category: 'beverage',
    price: 145.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=OJ'
}, {
    id: 'be4',
    name: 'Mango Juice (1L)',
    category: 'beverage',
    price: 135.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Mango+Juice'
}, {
    id: 'be5',
    name: 'Coca-Cola (1.25L)',
    category: 'beverage',
    price: 65.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Coke'
}, {
    id: 'be6',
    name: 'Sprite (1.25L)',
    category: 'beverage',
    price: 65.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Sprite'
}, {
    id: 'be7',
    name: 'Fanta Orange (1.25L)',
    category: 'beverage',
    price: 65.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Fanta'
}, {
    id: 'be8',
    name: 'St. George Beer',
    category: 'beverage',
    price: 55.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=St+George'
}, {
    id: 'be9',
    name: 'Walia Beer',
    category: 'beverage',
    price: 48.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Walia'
}, {
    id: 'be10',
    name: 'Meta Beer',
    category: 'beverage',
    price: 52.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Meta'
}, {
    id: 'be11',
    name: 'Dashen Beer',
    category: 'beverage',
    price: 50.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Dashen'
}, {
    id: 'be12',
    name: 'Ethiopian Wine (red)',
    category: 'beverage',
    price: 285.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Wine'
}, {
    id: 'be13',
    name: 'Tej (honey wine)',
    category: 'beverage',
    price: 165.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Tej'
}, {
    id: 'be14',
    name: 'Areki (local spirit)',
    category: 'beverage',
    price: 195.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Areki'
}, {
    id: 'be15',
    name: 'Tella (home brew)',
    category: 'beverage',
    price: 45.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Tella'
},
// === HOUSEHOLD ===
{
    id: 'h1',
    name: 'Toilet Paper (4 rolls)',
    category: 'household',
    price: 145.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=TP'
}, {
    id: 'h2',
    name: 'Paper Towels (2 rolls)',
    category: 'household',
    price: 95.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Towels'
}, {
    id: 'h3',
    name: 'Dish Soap',
    category: 'household',
    price: 75.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Dish+Soap'
}, {
    id: 'h4',
    name: 'Laundry Detergent',
    category: 'household',
    price: 185.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Detergent'
}, {
    id: 'h5',
    name: 'Hand Soap',
    category: 'household',
    price: 55.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Hand+Soap'
}, {
    id: 'h6',
    name: 'Trash Bags (30 pcs)',
    category: 'household',
    price: 125.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Trash+Bags'
}, {
    id: 'h7',
    name: 'Aluminum Foil',
    category: 'household',
    price: 85.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Foil'
}, {
    id: 'h8',
    name: 'Plastic Wrap',
    category: 'household',
    price: 65.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Wrap'
}, {
    id: 'h9',
    name: 'Matches (box)',
    category: 'household',
    price: 15.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Matches'
}, {
    id: 'h10',
    name: 'Candles (pack)',
    category: 'household',
    price: 45.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Candles'
},
// === SNACKS ===
{
    id: 's1',
    name: 'Doro Chips',
    category: 'snacks',
    price: 25.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Chips'
}, {
    id: 's2',
    name: 'Kurkure (pack)',
    category: 'snacks',
    price: 15.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Kurkure'
}, {
    id: 's3',
    name: 'Biscuits (pack)',
    category: 'snacks',
    price: 35.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Biscuits'
}, {
    id: 's4',
    name: 'Chocolate Bar',
    category: 'snacks',
    price: 55.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Chocolate'
}, {
    id: 's5',
    name: 'Gummy Candies',
    category: 'snacks',
    price: 45.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Gummies'
}, {
    id: 's6',
    name: 'Roasted Peanuts',
    category: 'snacks',
    price: 35.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Peanuts'
}, {
    id: 's7',
    name: 'Sunflower Seeds',
    category: 'snacks',
    price: 25.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Seeds'
}, {
    id: 's8',
    name: 'Popcorn (ready)',
    category: 'snacks',
    price: 45.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Popcorn'
}, {
    id: 's9',
    name: 'Mixed Nuts',
    category: 'snacks',
    price: 185.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Nuts'
}, {
    id: 's10',
    name: 'Dried Fruit Mix',
    category: 'snacks',
    price: 145.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Dried+Fruit'
},
// === FROZEN ===
{
    id: 'f1',
    name: 'Frozen Peas (500g)',
    category: 'frozen',
    price: 85.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Peas'
}, {
    id: 'f2',
    name: 'Frozen Mixed Veg',
    category: 'frozen',
    price: 95.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Mixed+Veg'
}, {
    id: 'f3',
    name: 'Frozen Fish (tilapia)',
    category: 'frozen',
    price: 245.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Fish'
}, {
    id: 'f4',
    name: 'Chicken Breast (1kg)',
    category: 'frozen',
    price: 385.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Chicken'
}, {
    id: 'f5',
    name: 'Beef Mince (1kg)',
    category: 'frozen',
    price: 485.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Beef'
}, {
    id: 'f6',
    name: 'Lamb Chops (1kg)',
    category: 'frozen',
    price: 685.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Lamb'
}, {
    id: 'f7',
    name: 'Frozen Pizza',
    category: 'frozen',
    price: 285.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Pizza'
}, {
    id: 'f8',
    name: 'Ice Cream (500ml)',
    category: 'frozen',
    price: 165.00,
    img: 'https://placehold.co/400/f5f0e8/333?text=Ice+Cream'
}, ];

// Price reference notes:
// - Produce prices fluctuate seasonally
// - Dairy prices from local processors (Sebeta, Genesis)
// - Coffee prices for mid-range Ethiopian beans
// - Beverage prices include deposit where applicable
// - Meat prices from butcher shops near 4Kilo
