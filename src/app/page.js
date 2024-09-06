export default function Home() {
  return (
    <main>
      <div className="fixed sm:absolute sm:right-20 top-0 -z-20">
        <img src="/vector.svg" className="object-cover h-screen sm:h-full"></img>
      </div>
      <div className="relative">
        <div className="container mx-auto mt-20 sm:p-4 flex flex-col-reverse sm:flex-row sm:min-h-216">
          <div className="max-w-3xl sm:block flex flex-col text-center sm:text-left">
            <h1 className="text-5xl my-4 sm:my-8 font-bold text-gray-900 tracking-tighter">
              SPRZEDAJEMY SAMOCHODY<br/> Z EUROPY
            </h1>
            <p className="my-4 sm:my-10 text-lg text-gray-600 max-w-xs">
              Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
            </p>
            <div className="my-4 sm:my-10 flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="w-4/6 sm:w-max px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Zobacz zdjęcia
              </button>
              <button className="w-4/6 sm:w-max px-6 py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50">
                Zadzwoń do nas
              </button>
            </div>
          </div>
          <div className="sm:absolute sm:right-0 sm:top-1/4 -z-10 py-5">
            <img src="/cars.png" alt="Samochody" className="object-cover" />
          </div>
        </div>
      </div>
    </main>
  );
}
