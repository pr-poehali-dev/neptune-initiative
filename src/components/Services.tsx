export default function Services() {
  return (
    <div className="min-h-screen px-6 py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full font-bold text-lg mb-4 animate-pulse">
            🔥 СКИДКА 20% при оплате на карту
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Стоимость сопровода
        </h2>
        <p className="text-center text-neutral-600 mb-12 text-lg">
          Вынос 8кк гарантом + выдача в начале фул 6 + мк 14 ВК
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Карта 7 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                7 карта
              </div>
              <div className="mb-2">
                <span className="text-2xl text-slate-400 line-through mr-2">75₴</span>
                <span className="text-5xl font-bold text-slate-900">60₴</span>
              </div>
              <div>
                <span className="text-lg text-slate-400 line-through mr-2">150₽</span>
                <span className="text-2xl text-slate-600 font-bold">120₽</span>
              </div>
              <div className="text-xs text-red-600 font-semibold mt-2">-20% на карту</div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-neutral-700">
                <span className="text-green-500 mr-2">✓</span>
                Вынос 8кк гарантом
              </li>
              <li className="flex items-center text-neutral-700">
                <span className="text-green-500 mr-2">✓</span>
                Выдача фул 6
              </li>
              <li className="flex items-center text-neutral-700">
                <span className="text-green-500 mr-2">✓</span>
                МК 14 ВК
              </li>
            </ul>
            <a
              href="https://t.me/nyrislam222"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-black text-white text-center py-3 rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              Заказать
            </a>
          </div>

          {/* Карта 5 - Популярно */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
              ПОПУЛЯРНО
            </div>
            <div className="text-center mb-6">
              <div className="inline-block bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                5 карта
              </div>
              <div className="mb-2">
                <span className="text-2xl text-blue-200 line-through mr-2">100₴</span>
                <span className="text-5xl font-bold text-white">80₴</span>
              </div>
              <div>
                <span className="text-lg text-blue-200 line-through mr-2">200₽</span>
                <span className="text-2xl text-white font-bold">160₽</span>
              </div>
              <div className="text-xs text-yellow-300 font-semibold mt-2">-20% на карту</div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-white">
                <span className="text-yellow-300 mr-2">✓</span>
                Вынос 8кк гарантом
              </li>
              <li className="flex items-center text-white">
                <span className="text-yellow-300 mr-2">✓</span>
                Выдача фул 6
              </li>
              <li className="flex items-center text-white">
                <span className="text-yellow-300 mr-2">✓</span>
                МК 14 ВК
              </li>
            </ul>
            <a
              href="https://t.me/nyrislam222"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white text-blue-600 text-center py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Заказать
            </a>
          </div>

          {/* Карта 8 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                8 карта
              </div>
              <div className="mb-2">
                <span className="text-2xl text-slate-400 line-through mr-2">175₴</span>
                <span className="text-5xl font-bold text-slate-900">140₴</span>
              </div>
              <div>
                <span className="text-lg text-slate-400 line-through mr-2">250₽</span>
                <span className="text-2xl text-slate-600 font-bold">200₽</span>
              </div>
              <div className="text-xs text-red-600 font-semibold mt-2">-20% на карту</div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-neutral-700">
                <span className="text-green-500 mr-2">✓</span>
                Вынос 8кк гарантом
              </li>
              <li className="flex items-center text-neutral-700">
                <span className="text-green-500 mr-2">✓</span>
                Выдача фул 6
              </li>
              <li className="flex items-center text-neutral-700">
                <span className="text-green-500 mr-2">✓</span>
                МК 14 ВК
              </li>
            </ul>
            <a
              href="https://t.me/nyrislam222"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-black text-white text-center py-3 rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              Заказать
            </a>
          </div>
        </div>

        <div className="text-center mt-12 space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-xl p-6 max-w-md mx-auto">
            <p className="text-sm text-neutral-600 mb-2">💳 Оплата на карту (скидка 20%)</p>
            <div className="text-2xl font-mono font-bold text-slate-900 mb-2">2200 7005 2141 3848</div>
            <p className="text-xs text-neutral-500">Т-Банк</p>
          </div>
          
          <div>
            <p className="text-neutral-600 mb-4">Для покупки писать</p>
            <a
              href="https://t.me/nyrislam222"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              <span>@nyrislam222</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}