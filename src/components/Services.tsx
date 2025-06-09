import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Интеллект-системы',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-500/10'
    },
    {
      title: 'Обработка документов',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'Проект управления ж/д рабочего места',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'Компьютерное зрение',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'Система контроля времени',
      color: 'from-teal-400 to-blue-500',
      bgColor: 'bg-teal-500/10'
    },
    {
      title: 'Платформа админ-панелей',
      color: 'from-red-400 to-pink-500',
      bgColor: 'bg-red-500/10'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Описание наших проектов</h2>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
            Получить цену услуги
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group ${service.bgColor} backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105`}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                </div>
                <h3 className="text-white font-semibold text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-pink-500/25">
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;