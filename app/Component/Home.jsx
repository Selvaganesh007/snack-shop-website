export default function Home() {
  return (
    <main id="home" className="relative h-screen w-full bg-[url('/sweets-background.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-center px-4">
      <div className="bg-pink-200/80 p-8 rounded-xl shadow-lg">
        <h1 className="text-5xl md:text-7xl font-extrabold text-pink-800 mb-4">
          🍬 Anand Sweets 🍭
        </h1>
        <p className="text-xl md:text-2xl text-pink-900 mb-2 font-medium">
          "Life is sweeter with a little treat!"
        </p>
        <p className="text-lg md:text-xl text-pink-900 italic">
          "இனிப்பு இல்லாத வாழ்க்கை இல்லை; இனிப்பு நிறைந்தது ஆனந்தம்."
        </p>
      </div>
    </main>
  );
}
