import React, { useState, useEffect } from "react";
import "./style/main.css";
import { GiShoppingBag } from "react-icons/gi";
import RatingStars from "./components/RatingStars";
import ShoppingCart from "./components/ShoppingCart";
import heroImage from './assets/images/hero.jpg';

//Array for the product's data
const products = [
    {
        id: 1,
        name: "WRENSONGE Checkered Throw Blanket",
        rating: 1.7,
        description: "Sage Green Microfiber Soft Cozy Fluffy Warm Hand Made Throw Blankets for Couch, Sofa, Chair, Bed, Camping, Picnic, Travel Lightweight Bed Blanke",
        price: 29.99,
        image: require("./assets/images/p5.jpg"),
    },
    {
        id: 2,
        name: "ChooChoo Farmhouse Coffee Table",
        rating: 5,
        description: "Cocktail Table Wooden Modern Coffee Table with Opening Cat House for Accent Furniture for Living Room, Meeting Room, Home Decor.",
        price: 229,
        image: require("./assets/images/p2.jpg"),
    },
    {
        id: 3,
        name: "Corduroy Decorative Throw Pillow Covers",
        rating: 3.6,
        description: "Soft Boho Striped Pillow Covers Modern Farmhouse Home Decor for Spring Sofa Living Room Couch Bed Cream White",
        price: 99,
        image: require("./assets/images/p3.jpg"),
    },
    {
        id: 4,
        name: "QEEIG Bathroom Furniture Sets",
        rating: 4,
        description: "Shelves Over Toilet Bathroom Decor Farmhouse Decorations Aesthetic Décor Sign Small Wall Shelf 2+1 Set 16 inch, Rustic Brown.",
        price: 26.82,
        image: require("./assets/images/p4.jpg"),
    },
    {
        id: 1,
        name: "WRENSONGE Checkered Throw Blanket",
        rating: 1.7,
        description: "Sage Green Microfiber Soft Cozy Fluffy Warm Hand Made Throw Blankets for Couch, Sofa, Chair, Bed, Camping, Picnic, Travel Lightweight Bed Blanke",
        price: 29.99,
        image: require("./assets/images/p5.jpg"),
    },
    {
        id: 2,
        name: "ChooChoo Farmhouse Coffee Table",
        rating: 5,
        description: "Cocktail Table Wooden Modern Coffee Table with Opening Cat House for Accent Furniture for Living Room, Meeting Room, Home Decor.",
        price: 229,
        image: require("./assets/images/p2.jpg"),
    },
    {
        id: 3,
        name: "Corduroy Decorative Throw Pillow Covers",
        rating: 3.6,
        description: "Soft Boho Striped Pillow Covers Modern Farmhouse Home Decor for Spring Sofa Living Room Couch Bed Cream White",
        price: 99,
        image: require("./assets/images/p3.jpg"),
    },
    {
        id: 4,
        name: "QEEIG Bathroom Furniture Sets",
        rating: 4,
        description: "Shelves Over Toilet Bathroom Decor Farmhouse Decorations Aesthetic Décor Sign Small Wall Shelf 2+1 Set 16 inch, Rustic Brown.",
        price: 26.82,
        image: require("./assets/images/p4.jpg"),
    },{
        id: 1,
        name: "WRENSONGE Checkered Throw Blanket",
        rating: 1.7,
        description: "Sage Green Microfiber Soft Cozy Fluffy Warm Hand Made Throw Blankets for Couch, Sofa, Chair, Bed, Camping, Picnic, Travel Lightweight Bed Blanke",
        price: 29.99,
        image: require("./assets/images/p5.jpg"),
    },
    {
        id: 2,
        name: "ChooChoo Farmhouse Coffee Table",
        rating: 5,
        description: "Cocktail Table Wooden Modern Coffee Table with Opening Cat House for Accent Furniture for Living Room, Meeting Room, Home Decor.",
        price: 229,
        image: require("./assets/images/p2.jpg"),
    },
    {
        id: 3,
        name: "Corduroy Decorative Throw Pillow Covers",
        rating: 3.6,
        description: "Soft Boho Striped Pillow Covers Modern Farmhouse Home Decor for Spring Sofa Living Room Couch Bed Cream White",
        price: 99,
        image: require("./assets/images/p3.jpg"),
    },
    {
        id: 4,
        name: "QEEIG Bathroom Furniture Sets",
        rating: 4,
        description: "Shelves Over Toilet Bathroom Decor Farmhouse Decorations Aesthetic Décor Sign Small Wall Shelf 2+1 Set 16 inch, Rustic Brown.",
        price: 26.82,
        image: require("./assets/images/p4.jpg"),
    },
];

function App() {
    // State to manage the visibility of the shopping cart
    const [cartsVisibility, setCartVisible] = useState(false);

    const [productsInCart, setProducts] = useState(localStorage.getItem("shopping-cart") ? JSON.parse(localStorage.getItem("shopping-cart")) : []);
    
    useEffect(() => {
        localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
    }, [productsInCart]);
// add item to cart 
    const addToCart = (product) => {
        // Creates a new object from the product passed in, initializing its count property to 1
    const newProduct = { ...product, count: 1 };
    // Updates the products in cart state by adding the new product
    setProducts([...productsInCart, newProduct]);
    };

    //Lambda Function to change the count of a product in the cart
    const changeQuan = (productId, count) => {
        // Updates the products in cart state
    setProducts(oldState => {
        // Finds the index of the product with the specified ID
        const productIndex = oldState.findIndex(item => item.id === productId);
        // If the product is found (index !== -1), update its count
        if (productIndex !== -1) {
            oldState[productIndex].count = count;
        }
        // Returns the updated state with the new product count
        return [...oldState];
        });
    };

    const Remove = (product) => {
        // Updates the products in cart state
    setProducts(oldState => {
        // Finds the index of the product to remove
        const productIndex = oldState.findIndex(item => item.id === product.id);
        // If the product is found, remove it from the array
        if (productIndex !== -1) {
            oldState.splice(productIndex, 1);
        }
        // Returns the updated state without the removed product
            return [...oldState];
        });
    };

// Render the App component
    return (
        <div className="App">
            <ShoppingCart
                visibility={cartsVisibility}
                products={productsInCart}
                onClose={() => setCartVisible(false)}
                onQuantityChange={changeQuan}
                onProductRemove={Remove}
            />
            <div className="navbar">
                <button
                    className="btn shopping-cart-btn"
                    onClick={() => setCartVisible(true)}>
                    <GiShoppingBag style={{ color: '#8b449c' }}size={50} />
                    {productsInCart.length > 0 && (
                        <span className="product-count">
                            {productsInCart.length}
                        </span>
                    )}
                </button>
            </div>
            <header className="App-header">
                <img src={heroImage} alt="Hero" style={{ width: '100%', height: 'auto' }} />
            </header>
            <main>
                <h2 className="title">Products</h2>
                <div className="products">
                    {products.map((product) => (
                        <div className="product" key={product.id}>
                            <img className="product-image" src={product.image} alt={product.name} />
                            <h4 className="product-name">{product.name}</h4>
                            <RatingStars rating={product.rating} />
                            <p>{product.description}</p>
                            <span className="product-price">${product.price}</span>
                            <div className="buttons">
                                <button className="btn">Detail</button>
                                <button className="btn" onClick={() => addToCart(product)}>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;
