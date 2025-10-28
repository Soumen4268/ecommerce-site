'use client';

import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link 
              href="/products"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Cart Items ({items.length})
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    Clear Cart
                  </button>
                </div>
                
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                      <div className="flex-shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-gray-500 capitalize">
                          {item.product.category} • {item.product.subcategory}
                        </p>
                        {item.selectedSize && (
                          <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                        )}
                        {item.selectedColor && (
                          <p className="text-sm text-gray-500">Color: {item.selectedColor}</p>
                        )}
                        <p className="text-sm font-medium text-gray-900">
                          ${item.product.price}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 border border-gray-300 rounded-md hover:bg-gray-50"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 border border-gray-300 rounded-md hover:bg-gray-50"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-600 hover:text-red-700 mt-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">$0.00</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Proceed to Checkout
                </button>
                <Link 
                  href="/products"
                  className="block w-full text-center text-purple-600 hover:text-purple-700 py-3 font-medium"
                >
                  Continue Shopping
                </Link>
              </div>
              
              <div className="mt-6 text-xs text-gray-500">
                <p>• Free shipping on orders over $50</p>
                <p>• 30-day return policy</p>
                <p>• Secure checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
