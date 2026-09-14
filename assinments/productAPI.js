const express = require("express");

const app = express();

app.use(express.json());

const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 1500 },
    { id: 4, name: "Keyboard", price: 1000 },
    { id: 5, name: "Mouse", price: 500 },
    { id: 6, name: "Monitor", price: 12000 },
    { id: 7, name: "Printer", price: 8000 },
    { id: 8, name: "Tablet", price: 18000 },
    { id: 9, name: "Smart Watch", price: 3000 },
    { id: 10, name: "Camera", price: 35000 },

    { id: 11, name: "Speaker", price: 2500 },
    { id: 12, name: "Power Bank", price: 1200 },
    { id: 13, name: "Charger", price: 800 },
    { id: 14, name: "USB Cable", price: 300 },
    { id: 15, name: "Pen Drive", price: 600 },
    { id: 16, name: "Hard Disk", price: 4500 },
    { id: 17, name: "SSD", price: 5500 },
    { id: 18, name: "Webcam", price: 2000 },
    { id: 19, name: "Microphone", price: 3500 },
    { id: 20, name: "Router", price: 2200 },

    { id: 21, name: "Backpack", price: 1500 },
    { id: 22, name: "Notebook", price: 100 },
    { id: 23, name: "Water Bottle", price: 500 },
    { id: 24, name: "Lunch Box", price: 700 },
    { id: 25, name: "Desk Lamp", price: 900 },
    { id: 26, name: "Chair", price: 5000 },
    { id: 27, name: "Table", price: 7000 },
    { id: 28, name: "Bookshelf", price: 6000 },
    { id: 29, name: "Clock", price: 800 },
    { id: 30, name: "Calculator", price: 400 },

    { id: 31, name: "Football", price: 900 },
    { id: 32, name: "Cricket Bat", price: 2500 },
    { id: 33, name: "Cricket Ball", price: 500 },
    { id: 34, name: "Badminton Racket", price: 1800 },
    { id: 35, name: "Shuttlecock", price: 400 },
    { id: 36, name: "Tennis Ball", price: 300 },
    { id: 37, name: "Yoga Mat", price: 700 },
    { id: 38, name: "Skipping Rope", price: 300 },
    { id: 39, name: "Gym Gloves", price: 600 },
    { id: 40, name: "Sports Shoes", price: 2500 },

    { id: 41, name: "T-Shirt", price: 800 },
    { id: 42, name: "Jeans", price: 1800 },
    { id: 43, name: "Shirt", price: 1200 },
    { id: 44, name: "Jacket", price: 2500 },
    { id: 45, name: "Cap", price: 400 },
    { id: 46, name: "Socks", price: 200 },
    { id: 47, name: "Belt", price: 500 },
    { id: 48, name: "Wallet", price: 700 },
    { id: 49, name: "Sunglasses", price: 1000 },
    { id: 50, name: "Watch", price: 2000 },

    { id: 51, name: "Rice", price: 800 },
    { id: 52, name: "Wheat Flour", price: 500 },
    { id: 53, name: "Sugar", price: 450 },
    { id: 54, name: "Salt", price: 30 },
    { id: 55, name: "Tea", price: 250 },
    { id: 56, name: "Coffee", price: 400 },
    { id: 57, name: "Biscuits", price: 100 },
    { id: 58, name: "Cooking Oil", price: 150 },
    { id: 59, name: "Honey", price: 300 },
    { id: 60, name: "Masala", price: 200 },

    { id: 61, name: "Face Wash", price: 250 },
    { id: 62, name: "Shampoo", price: 350 },
    { id: 63, name: "Soap", price: 80 },
    { id: 64, name: "Toothpaste", price: 120 },
    { id: 65, name: "Toothbrush", price: 100 },
    { id: 66, name: "Hand Wash", price: 150 },
    { id: 67, name: "Body Lotion", price: 300 },
    { id: 68, name: "Perfume", price: 1200 },
    { id: 69, name: "Hair Oil", price: 200 },
    { id: 70, name: "Comb", price: 50 },

    { id: 71, name: "Pillow", price: 600 },
    { id: 72, name: "Bedsheet", price: 1000 },
    { id: 73, name: "Blanket", price: 2000 },
    { id: 74, name: "Towel", price: 400 },
    { id: 75, name: "Curtain", price: 1200 },
    { id: 76, name: "Carpet", price: 2500 },
    { id: 77, name: "Mug", price: 150 },
    { id: 78, name: "Plate", price: 200 },
    { id: 79, name: "Spoon Set", price: 300 },
    { id: 80, name: "Pan", price: 900 },

    { id: 81, name: "Pressure Cooker", price: 1800 },
    { id: 82, name: "Mixer Grinder", price: 3500 },
    { id: 83, name: "Electric Kettle", price: 1500 },
    { id: 84, name: "Toaster", price: 1800 },
    { id: 85, name: "Iron", price: 1200 },
    { id: 86, name: "Fan", price: 2500 },
    { id: 87, name: "Air Cooler", price: 7000 },
    { id: 88, name: "Vacuum Cleaner", price: 6000 },
    { id: 89, name: "Refrigerator", price: 30000 },
    { id: 90, name: "Microwave", price: 10000 },

    { id: 91, name: "Bluetooth Earbuds", price: 1800 },
    { id: 92, name: "Gaming Mouse", price: 1200 },
    { id: 93, name: "Gaming Keyboard", price: 2500 },
    { id: 94, name: "Gaming Chair", price: 12000 },
    { id: 95, name: "Laptop Stand", price: 1000 },
    { id: 96, name: "Phone Stand", price: 300 },
    { id: 97, name: "HDMI Cable", price: 500 },
    { id: 98, name: "Memory Card", price: 700 },
    { id: 99, name: "Smart TV", price: 25000 },
    { id: 100, name: "Bluetooth Speaker", price: 2000 }
];


// GET all products
app.get("/products", (req, res) => {
    res.json(products);
});


// GET product by ID
app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});


// POST - Add a new product
app.post("/products", (req, res) => {

    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
});


// PUT - Update a product
app.put("/products/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    product.name = req.body.name;
    product.price = req.body.price;

    res.json(product);
});


// DELETE - Delete a product
app.delete("/products/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const deletedProduct = products.splice(index, 1);

    res.json({
        message: "Product deleted",
        product: deletedProduct[0]
    });
});


// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});