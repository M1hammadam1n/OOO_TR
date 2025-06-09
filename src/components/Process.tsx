import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { number: 1, title: 'Понимание задачи', active: true },
    { number: 2, title: 'Сбор данных', active: false },
    { number: 3, title: 'Обучение нейросети', active: false },
    { number: 4, title: 'Тестирование', active: false },
    { number: 5, title: 'Внедрение', active: false }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Description */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white mb-6">Описание процесса</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Внедряем ИИ решения поэтапно, что позволяет управлять рисками и 
              контролировать качество на каждом этапе. Сначала мы понимаем вашу 
              задачу и собираем данные. Затем обучаем нейросеть под ваши 
              специфические потребности. После тщательного тестирования 
              внедряем ИИ решение в вашу систему и обеспечиваем полную 
              поддержку на всех этапах работы.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
              Связаться с консультантом
            </button>
          </div>

          {/* Right side - Process Steps */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    step.active 
                      ? 'bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/25' 
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold ${
                      step.active ? 'text-white' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </h4>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-8 bg-gray-700 ml-5"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;