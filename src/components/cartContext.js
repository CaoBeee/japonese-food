"use client";
import React, { createContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [itemsToRemove, setItemsToRemove] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        if (storedCart) {
            setCart(storedCart);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);

        if (!existingItem) {
            setCart((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart((prevItems) =>
            prevItems.filter((item) => item.id !== productId)
        );
        localStorage.removeItem(`menu-${productId}`)
    };

    const clearCart = () => {
        setCart([]);
    };

    const incrementQuantity = (productId) => {
        setCart((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrementQuantity = (productId) => {
        setCart((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const getTotalPrice = () => {
        return cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    const isCartEmpty = () => {
        return cart.length === 0;
    };

    const isItemInCart = (productId) => {
        return cart.some((item) => item.id === productId);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                incrementQuantity,
                decrementQuantity,
                getTotalPrice,
                isCartEmpty,
                isItemInCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;