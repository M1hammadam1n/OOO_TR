import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side content */}
            <div className="space-y-8 max-w-full sm:max-w-md md:max-w-lg mx-auto px-4 sm:px-0">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight break-words text-center sm:text-left">
                  Решения, которые
                  <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    приносят порядок
                  </span>
                </h1>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-full text-center sm:text-left">
                  Корпоративные программные решения на основе искусственного интеллекта с 
                  интеграцией в существующие системы. Автоматизируем бизнес-процессы, 
                  повышаем эффективность работы персонала, сокращаем операционные затраты 
                  через самые новые алгоритмы машинного обучения.
                </p>
              </div>
              
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-pink-500/25 mx-auto sm:mx-0 block">
                Оставить заявку
              </button>
            </div>

            {/* Right side - AI Illustration */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Central AI element */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full blur-xl animate-pulse-slow"></div>
                <div className="absolute inset-8 bg-gradient-to-br from-pink-500/40 to-purple-600/40 rounded-full backdrop-blur-sm border border-white/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-xl">
                        <span className="text-white text-2xl font-bold">AI</span>
                      </div>
                      <div className="text-white text-xl font-bold">24</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-8 -left-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg rotate-12 animate-float shadow-lg"></div>
                <div className="absolute -bottom-4 -right-12 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-float delay-1000 shadow-lg"></div>
                <div className="absolute top-16 -right-8 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg -rotate-12 animate-float delay-2000 shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
