export default function Featured() {
  return (
    <div className="flex flex-col min-h-screen px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto w-full">
        <h3 className="uppercase mb-8 text-sm tracking-wide text-neutral-600 text-center">Прокачка акков в Metro Royale</h3>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-8 rounded-lg text-center">
            <div className="text-4xl font-bold text-slate-900 mb-2">1 час</div>
            <div className="text-xl text-slate-700 mb-4">75₴ / 155₽</div>
            <p className="text-sm text-neutral-600">Быстрый старт</p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-slate-200 p-8 rounded-lg text-center border-2 border-blue-400">
            <div className="text-sm uppercase text-blue-600 font-semibold mb-2">Популярно</div>
            <div className="text-4xl font-bold text-slate-900 mb-2">3 часа</div>
            <div className="text-xl text-slate-700 mb-4">100₴ / 200₽</div>
            <p className="text-sm text-neutral-600">Оптимальный выбор</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-8 rounded-lg text-center">
            <div className="text-4xl font-bold text-slate-900 mb-2">5 часов</div>
            <div className="text-xl text-slate-700 mb-4">200₴ / 350₽</div>
            <p className="text-sm text-neutral-600">Максимальный результат</p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-black text-white border border-black px-8 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer uppercase tracking-wide">
            Заказать прокачку
          </button>
        </div>
      </div>
    </div>
  );
}