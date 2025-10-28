import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import { products } from '@/data/products';

export default function Home() {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Discover Your
                <span className="block text-yellow-300">Perfect Style</span>
              </h1>
              <p className="text-xl text-purple-100">
                Shop the latest fashion trends for men and women. Quality clothing that fits your lifestyle and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/products?category=men"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Shop Men
                </Link>
                <Link 
                  href="/products?category=women"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
                >
                  Shop Women
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="w-full h-32 bg-white/30 rounded-lg mb-2"></div>
                    <p className="text-sm font-medium">New Arrivals</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="w-full h-32 bg-white/30 rounded-lg mb-2"></div>
                    <p className="text-sm font-medium">Best Sellers</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="w-full h-32 bg-white/30 rounded-lg mb-2"></div>
                    <p className="text-sm font-medium">Sale Items</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="w-full h-32 bg-white/30 rounded-lg mb-2"></div>
                    <p className="text-sm font-medium">Featured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of the best fashion items for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      Sale
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 capitalize">{product.category}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <Link 
                      href={`/products/${product.id}`}
                      className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/products"
              className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600">
              Find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/products?category=men" className="group relative overflow-hidden rounded-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-blue-500 to-blue-700 h-64 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">Men's Fashion</h3>
                  <p className="text-blue-100">Discover the latest trends for men</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </Link>

            <Link href="/products?category=women" className="group relative overflow-hidden rounded-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-pink-500 to-pink-700 h-64 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">Women's Fashion</h3>
                  <p className="text-pink-100">Express your unique style</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay in Style
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and style tips.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}