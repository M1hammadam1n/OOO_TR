import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                AI 24 - программные решения на основе искусственного интеллекта
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Скорость
                  </h4>
                  <p className="text-sm">Высокоскоростная обработка данных</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                    Гибкость  
                  </h4>
                  <p className="text-sm">Адаптивные решения под любые задачи</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Профессионализм
                  </h4>
                  <p className="text-sm">Профессиональные команды по персональному проекту</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Надёжность
                  </h4>
                  <p className="text-sm">Надёжные системы и техническая поддержка</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-2xl">
                  <span className="text-white text-3xl font-bold">AI</span>
                </div>
                <div className="text-white text-2xl font-bold">24</div>
              </div>
            </div>
          </div>
        </div>

        {/* Company info */}
        <div className="text-center space-y-4">
          <div className="text-6xl font-bold text-gray-800 opacity-20">
            ООО "АИ 24"
          </div>
          <div className="text-gray-400 space-y-2">
            <p>г. Минск, проспект Независимости 177, офис 24</p>
            <p className="font-semibold">+375 (29) 107-53-75</p>
          </div>
          <div className="text-gray-500 text-sm max-w-4xl mx-auto">
            <p>Copyright © 2024</p>
            <p className="mt-2">
              Все материалы на данном сайте защищены авторским правом. Использование, 
              копирование, перепечатка, воспроизведение или иное использование 
              материалов возможно только при наличии активной ссылки на источник. 
              Содержание, дизайн и структура данного сайта являются предметом 
              авторского права и защищены в соответствии с законодательством.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;