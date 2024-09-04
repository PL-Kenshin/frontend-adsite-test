export default function Home() {
  return (
    <main>
      <div className="relative flex items-center justify-between p-10">
        <div className="max-w-xl p-10">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tighter">
            SPRZEDAJEMY SAMOCHODY Z EUROPY
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Zobacz zdjęcia
            </button>
            <button className="px-6 py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
              Zadzwoń do nas
            </button>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 max-w-3xl -z-10">
          <img src="/cars.png" alt="Samochody" className="object-cover"/>
        </div>
      </div>
    </main>
  );
}
