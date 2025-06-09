import React from 'react';
import { Phone } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">AI</span>
            </div>
            <div>
              <h1 className="text-white text-xl font-bold">AI 24</h1>
              <p className="text-gray-400 text-xs">Программные решения на основе искусственного интеллекта</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Главная</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Услуги</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Портфолио</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Контакты</a>
          </nav>

          {/* Contact */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-gray-300">
              <Phone className="w-4 h-4" />
              <span>+375 (29) 107-53-75</span>
            </div>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;