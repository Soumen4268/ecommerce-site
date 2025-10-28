'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">StyleHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/products?category=men" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Men
            </Link>
            <Link href="/products?category=women" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Women
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              All Products
            </Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <button className="p-2 text-gray-700 hover:text-purple-600 transition-colors">
              <User className="w-6 h-6" />
            </button>
            <Link href="/cart" className="p-2 text-gray-700 hover:text-purple-600 transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <Search className="w-6 h-6" />
            </button>
            <Link href="/cart" className="p-2 text-gray-700 hover:text-purple-600 transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/products?category=men" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Men
              </Link>
              <Link 
                href="/products?category=women" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Women
              </Link>
              <Link 
                href="/products" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                All Products
              </Link>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 font-medium transition-colors">
                <User className="w-5 h-5" />
                <span>Account</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
