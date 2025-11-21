import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  from: string;
  message?: string;
  photo: string;
}

interface BirthdayCardProps {
  name: string;
  mainMessage?: string;
  messages?: Message[];
}

export function App({
  name = "Tryfanny Fransiska Lase",
  mainMessage = `hay...long time no see ya, 

ternyata gak kerasa ya perasaan baru kemarin ngucapin selamat ulang tahun untuk kamu, 
sekarang udah ulang tahun lagi 😁, bagaimana nih kabarnya? baik? pasti-lah baik kan hari special🤭, 
btw happy sweet seventeen ya semoga ditahun ini banyak keajaiban untuk kamu, 
emmm oh ya soal sekolah! gimana sekolahnya setelah kedatangan TKA makin try hard lagi kah?soalnya ujian snbt dan snbp aja udah susah apa lagi TKA kan?.
btw kamu pengen masuk kuliah(mau masuk univ mana tuh?)atau kerja?
kalau kuliah sih...kata gweh mah siapin mental aja dulu🙃 sebelum kata dibantai atau membantai muncul 
kalau kerja...keren banget sih kata gwe
emm maaf ya jika bentuknya jelek karna ini baru pertama kali bikin desain gini karna pengen nguji skill sama mau Menuhin project GitHub aja dan juga mungkin ide dan Waktu pembuatannya yang kurang juga But I'll do my best.
mungkin next time aku bikin lebih bagus lagi.
ehh sekali lagi maaf ya kebanyakan yapping karna pengen banyak tanya tapi takutnya kamunya risih aja.
yaudah maaf menggangu waktunya dan juga ambil fotonya yang sembarangan 😓
sekali lagi happy sweet seventeen ya wish you all the best.`,
  messages = [
    {
      from: "Mom & Dad",
      message:
        "Happy birthday to our amazing daughter! We are so proud of the person you've become. May this year bring you endless joy and success. Love you always! 💕",
      photo: "gambar1.jpeg",
    },
    {
      from: "Best Friends",
      message:
        "To the most incredible friend! Thank you for all the laughs, adventures, and unforgettable memories. Here's to many more years of friendship! 🎉",
      photo: "gambar2.jpeg",
    },
    {
      from: "Your Sister",
      message:
        "Happy birthday to my favorite sister! You inspire me every day. Wishing you all the happiness in the world. Can't wait to celebrate with you! 🎂",
      photo: "gambar3.jpeg",
    },
    {
      from: "Colleagues",
      message:
        "Wishing you a wonderful birthday! Your dedication and positive energy make our workplace amazing. Enjoy your special day! 🎊",
      photo: "gambar4.jpeg",
    },
    {
      from: "Childhood Friends",
      message:
        "From playground adventures to lifelong memories! Wishing you the happiest of birthdays! 🎈",
      photo: "gambar5.jpeg",
    },
    {
      from: "School Mates",
      message:
        "Happy birthday! May your day be filled with joy and wonderful surprises! 🎁",
      photo: "gambar6.jpeg",
    },
    {
      from: "Cousins",
      message:
        "Family love forever! Wishing you a fantastic birthday celebration! 🥳",
      photo: "gambar7.jpeg",
    },
    {
      from: "Neighbors",
      message:
        "Happy birthday from your neighbors! May your day be as wonderful as you are! 🌟",
      photo: "gambar8.jpeg",
    },
  ],
}: BirthdayCardProps) {
  const [zoomedPhoto, setZoomedPhoto] = useState<{
    photo: string;
    frameColor: string;
    from: string;
  } | null>(null);
  const [showMainMessage, setShowMainMessage] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [candlesLit, setCandlesLit] = useState<boolean[]>([
    true,
    true,
    true,
    true,
    true,
  ]);
  const [isMobile, setIsMobile] = useState(false);

  const frameColors = [
    "from-amber-200 to-amber-300",
    "from-rose-200 to-rose-300",
    "from-purple-200 to-purple-300",
    "from-blue-200 to-blue-300",
    "from-green-200 to-green-300",
    "from-indigo-200 to-indigo-300",
    "from-yellow-200 to-yellow-300",
    "from-pink-200 to-pink-300",
  ];

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const blowOutCandle = (index: number) => {
    const newCandles = [...candlesLit];
    newCandles[index] = false;
    setCandlesLit(newCandles);

    if (newCandles.every((c) => !c)) {
      setTimeout(() => {
        setShowPhotos(true);
      }, 1000);
    }
  };

  const allCandlesOut = candlesLit.every((c) => !c);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4 md:p-8 perspective-1000 overflow-hidden relative">
      {/* Stars - only show after candles are out */}
      <AnimatePresence>
        {showPhotos && (
          <>
            {[...Array(isMobile ? 30 : 50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      <div className="relative w-full max-w-6xl">
        {/* Table Surface dengan hiasan */}
        <motion.div
          className="relative w-full h-[400px] md:h-[600px] rounded-2xl md:rounded-3xl shadow-2xl transform-gpu overflow-hidden"
          initial={{
            background:
              "linear-gradient(to bottom right, rgb(0, 0, 0), rgb(17, 24, 39), rgb(0, 0, 0))",
          }}
          animate={
            showPhotos
              ? {
                  background:
                    "linear-gradient(to bottom right, rgb(252, 231, 243), rgb(255, 255, 255), rgb(243, 232, 255))",
                }
              : {}
          }
          transition={{ duration: 1.5 }}
          style={{
            transformStyle: "preserve-3d",
            transform: isMobile ? "rotateX(5deg)" : "rotateX(8deg)",
          }}
        >
          {/* Wood grain texture */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full bg-gradient-to-br from-amber-800 via-amber-700 to-amber-900"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Table edge decoration */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-t-2xl md:rounded-t-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-b-2xl md:rounded-b-3xl" />
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-b from-amber-600 via-amber-500 to-amber-600 rounded-l-2xl md:rounded-l-3xl" />
          <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-b from-amber-600 via-amber-500 to-amber-600 rounded-r-2xl md:rounded-r-3xl" />

          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-6 h-6 bg-amber-400 rounded-full opacity-60" />
          <div className="absolute top-2 right-2 w-6 h-6 bg-amber-400 rounded-full opacity-60" />
          <div className="absolute bottom-2 left-2 w-6 h-6 bg-amber-400 rounded-full opacity-60" />
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-amber-400 rounded-full opacity-60" />

          {/* Checkered Floor Pattern - only show after transition */}
          <AnimatePresence>
            {showPhotos && (
              <motion.div
                className="absolute inset-4 rounded-xl md:rounded-2xl overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 1 }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,.1) 20px, rgba(0,0,0,.1) 40px)`,
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Birthday Cake - SELALU DI TENGAH */}
            <div
              className="transform-gpu z-10"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Cake Shadow */}
              <div
                className={`absolute -bottom-4 md:-bottom-8 left-1/2 transform -translate-x-1/2 ${
                  isMobile ? "w-24 h-2" : "w-32 md:w-48 h-3 md:h-4"
                } bg-black/20 rounded-full blur-lg`}
              />

              {/* Cake Base */}
              <div className="relative">
                <div
                  className={`${
                    isMobile ? "w-28 h-10" : "w-40 h-14 md:w-56 md:h-20"
                  } bg-gradient-to-b from-pink-300 to-pink-400 ${
                    isMobile ? "rounded-t-xl" : "rounded-t-2xl md:rounded-t-3xl"
                  } shadow-xl relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="absolute -bottom-1 left-0 right-0 flex justify-around">
                    {[...Array(isMobile ? 4 : 6)].map((_, i) => (
                      <div
                        key={i}
                        className={`${
                          isMobile ? "w-3 h-1" : "w-4 h-2 md:w-6 md:h-3"
                        } bg-pink-400 rounded-b-full`}
                      />
                    ))}
                  </div>
                </div>

                {/* Cake Middle Layer */}
                <div
                  className={`${
                    isMobile
                      ? "w-24 h-8 -mt-1"
                      : "w-32 h-12 md:w-48 md:h-16 -mt-1 md:-mt-2"
                  } bg-gradient-to-b from-purple-300 to-purple-400 mx-auto ${
                    isMobile ? "rounded-t-lg" : "rounded-t-xl md:rounded-t-2xl"
                  } shadow-lg relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="absolute -bottom-1 left-0 right-0 flex justify-around">
                    {[...Array(isMobile ? 3 : 4)].map((_, i) => (
                      <div
                        key={i}
                        className={`${
                          isMobile ? "w-3 h-1" : "w-4 h-2 md:w-6 md:h-3"
                        } bg-purple-400 rounded-b-full`}
                      />
                    ))}
                  </div>
                </div>

                {/* Cake Top Layer */}
                <div
                  className={`${
                    isMobile
                      ? "w-20 h-6 -mt-1"
                      : "w-28 h-10 md:w-40 md:h-12 -mt-1 md:-mt-2"
                  } bg-gradient-to-b from-rose-300 to-rose-400 mx-auto ${
                    isMobile ? "rounded-t-md" : "rounded-t-lg md:rounded-t-xl"
                  } shadow-lg relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                {/* Candles */}
                <div
                  className={`absolute ${
                    isMobile
                      ? "-top-6 gap-1"
                      : "-top-8 md:-top-12 gap-2 md:gap-3"
                  } left-1/2 transform -translate-x-1/2 flex`}
                >
                  {candlesLit.map((isLit, index) => (
                    <div
                      key={index}
                      className="relative cursor-pointer group"
                      onClick={() => isLit && blowOutCandle(index)}
                    >
                      <div
                        className={`${
                          isMobile ? "w-1.5 h-6" : "w-2 h-8 md:w-3 md:h-10"
                        } bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-full shadow-md relative`}
                      >
                        <div
                          className={`absolute top-0 left-1/2 transform -translate-x-1/2 ${
                            isMobile ? "w-0.5 h-0.5" : "w-1 h-1 md:w-1 md:h-2"
                          } bg-gray-800 rounded-full`}
                        />
                      </div>
                      {isLit && (
                        <div
                          className={`absolute ${
                            isMobile ? "-top-3" : "-top-4 md:-top-6"
                          } left-1/2 transform -translate-x-1/2`}
                        >
                          <div
                            className={`relative ${
                              isMobile ? "w-2 h-3" : "w-3 h-4 md:w-4 md:h-6"
                            }`}
                          >
                            <div className="absolute inset-0 bg-yellow-400 rounded-full animate-pulse" />
                            <div
                              className={`absolute ${
                                isMobile ? "inset-0.5" : "inset-1"
                              } bg-orange-400 rounded-full animate-pulse`}
                              style={{ animationDelay: "0.1s" }}
                            />
                            <div
                              className={`absolute ${
                                isMobile ? "inset-1" : "inset-2"
                              } bg-yellow-200 rounded-full animate-pulse`}
                              style={{ animationDelay: "0.2s" }}
                            />
                          </div>
                          <div className="absolute inset-0 bg-yellow-300/50 rounded-full blur-md animate-pulse" />
                        </div>
                      )}
                      {!isLit && (
                        <div
                          className={`absolute ${
                            isMobile ? "-top-2" : "-top-3 md:-top-4"
                          } left-1/2 transform -translate-x-1/2 animate-fade-in-up`}
                        >
                          <div className="text-gray-400 text-xs opacity-50">
                            💨
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {!allCandlesOut && (
                <div
                  className={`absolute ${
                    isMobile ? "-bottom-8" : "-bottom-10 md:-bottom-12"
                  } left-1/2 transform -translate-x-1/2 whitespace-nowrap`}
                >
                  <p
                    className={`${
                      isMobile ? "text-xs" : "text-xs md:text-sm"
                    } text-white/80 italic text-center drop-shadow-lg`}
                  >
                    Klik lilin untuk meniupnya! 🎂
                  </p>
                </div>
              )}
            </div>

            {/* Photo Frames - hanya muncul setelah lilin mati */}
            <AnimatePresence>
              {showPhotos && (
                <>
                  {/* Mobile Layout - 4 Foto dengan ukuran SEDANG */}
                  {isMobile ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-3 px-4 w-full max-w-sm">
                        {messages.slice(0, 4).map((message, index) => (
                          <motion.div
                            key={index}
                            className="cursor-pointer flex justify-center"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2, type: "spring" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                              setZoomedPhoto({
                                photo: message.photo,
                                frameColor: frameColors[index],
                                from: message.from,
                              })
                            }
                          >
                            <div
                              className={`w-32 h-36 bg-gradient-to-br ${frameColors[index]} rounded-lg shadow-xl p-2 relative`}
                            >
                              {/* Frame corner decorations */}
                              <div className="absolute -top-1 -left-1 w-3 h-3 bg-white rounded-sm" />
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-sm" />
                              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white rounded-sm" />
                              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-sm" />

                              <div className="w-full h-full bg-white rounded overflow-hidden">
                                <img
                                  src={message.photo}
                                  alt={`Foto dari ${message.from}`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Desktop Layout - 8 Foto di sekitar kue dengan ukuran BESAR SEKALI */
                    <>
                      {/* Frame 1 - Top Left */}
                      <motion.div
                        className="absolute left-4 top-4 cursor-pointer"
                        initial={{ opacity: 0, x: -100, y: -50, rotateZ: -12 }}
                        animate={{ opacity: 1, x: 0, y: 0, rotateZ: -8 }}
                        transition={{ delay: 0.1, type: "spring" }}
                        whileHover={{ scale: 1.05, rotateZ: -5 }}
                        onClick={() =>
                          setZoomedPhoto({
                            photo: messages[0].photo,
                            frameColor: frameColors[0],
                            from: messages[0].from,
                          })
                        }
                      >
                        <div
                          className={`w-36 h-44 bg-gradient-to-br ${frameColors[0]} rounded-xl shadow-2xl p-3 relative`}
                        >
                          <div className="absolute -top-2 -left-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white rounded-sm" />

                          <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                            <img
                              src={messages[0].photo}
                              alt={`Foto dari ${messages[0].from}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </motion.div>

                      {/* Frame 2 - Top Center Left */}
                      <motion.div
                        className="absolute left-32 top-2 cursor-pointer"
                        initial={{ opacity: 0, x: -80, y: -80, rotateZ: -8 }}
                        animate={{ opacity: 1, x: 0, y: 0, rotateZ: -4 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        whileHover={{ scale: 1.05, rotateZ: -6 }}
                        onClick={() =>
                          setZoomedPhoto({
                            photo: messages[1].photo,
                            frameColor: frameColors[1],
                            from: messages[1].from,
                          })
                        }
                      >
                        <div
                          className={`w-36 h-44 bg-gradient-to-br ${frameColors[1]} rounded-xl shadow-2xl p-3 relative`}
                        >
                          <div className="absolute -top-2 -left-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white rounded-sm" />

                          <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                            <img
                              src={messages[1].photo}
                              alt={`Foto dari ${messages[1].from}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </motion.div>

                      {/* Frame 3 - Top Center Right */}
                      <motion.div
                        className="absolute right-32 top-2 cursor-pointer"
                        initial={{ opacity: 0, x: 80, y: -80, rotateZ: 8 }}
                        animate={{ opacity: 1, x: 0, y: 0, rotateZ: 4 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        whileHover={{ scale: 1.05, rotateZ: 6 }}
                        onClick={() =>
                          setZoomedPhoto({
                            photo: messages[2].photo,
                            frameColor: frameColors[2],
                            from: messages[2].from,
                          })
                        }
                      >
                        <div
                          className={`w-36 h-44 bg-gradient-to-br ${frameColors[2]} rounded-xl shadow-2xl p-3 relative`}
                        >
                          <div className="absolute -top-2 -left-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white rounded-sm" />

                          <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                            <img
                              src={messages[2].photo}
                              alt={`Foto dari ${messages[2].from}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </motion.div>

                      {/* Frame 4 - Top Right */}
                      <motion.div
                        className="absolute right-4 top-4 cursor-pointer"
                        initial={{ opacity: 0, x: 100, y: -50, rotateZ: 12 }}
                        animate={{ opacity: 1, x: 0, y: 0, rotateZ: 8 }}
                        transition={{ delay: 0.4, type: "spring" }}
                        whileHover={{ scale: 1.05, rotateZ: 11 }}
                        onClick={() =>
                          setZoomedPhoto({
                            photo: messages[3].photo,
                            frameColor: frameColors[3],
                            from: messages[3].from,
                          })
                        }
                      >
                        <div
                          className={`w-36 h-44 bg-gradient-to-br ${frameColors[3]} rounded-xl shadow-2xl p-3 relative`}
                        >
                          <div className="absolute -top-2 -left-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white rounded-sm" />

                          <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                            <img
                              src={messages[3].photo}
                              alt={`Foto dari ${messages[3].from}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </motion.div>

                      {/* Frame 5 - Bottom Left */}
                      <motion.div
                        className="absolute left-4 bottom-4 cursor-pointer"
                        initial={{ opacity: 0, x: -80, y: 50, rotateZ: -10 }}
                        animate={{ opacity: 1, x: 0, y: 0, rotateZ: -6 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        whileHover={{ scale: 1.05, rotateZ: -8 }}
                        onClick={() =>
                          setZoomedPhoto({
                            photo: messages[4].photo,
                            frameColor: frameColors[4],
                            from: messages[4].from,
                          })
                        }
                      >
                        <div
                          className={`w-36 h-44 bg-gradient-to-br ${frameColors[4]} rounded-xl shadow-2xl p-3 relative`}
                        >
                          <div className="absolute -top-2 -left-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white rounded-sm" />

                          <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                            <img
                              src={messages[4].photo}
                              alt={`Foto dari ${messages[4].from}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </motion.div>

                      {/* Frame 6 - Bottom Center Left */}
                      <motion.div
                        className="absolute left-32 bottom-2 cursor-pointer"
                        initial={{ opacity: 0, x: -60, y: 60, rotateZ: -6 }}
                        animate={{ opacity: 1, x: 0, y: 0, rotateZ: -3 }}
                        transition={{ delay: 0.6, type: "spring" }}
                        whileHover={{ scale: 1.05, rotateZ: -4 }}
                        onClick={() =>
                          setZoomedPhoto({
                            photo: messages[5].photo,
                            frameColor: frameColors[5],
                            from: messages[5].from,
                          })
                        }
                      >
                        <div
                          className={`w-36 h-44 bg-gradient-to-br ${frameColors[5]} rounded-xl shadow-2xl p-3 relative`}
                        >
                          <div className="absolute -top-2 -left-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white rounded-sm" />

                          <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                            <img
                              src={messages[5].photo}
                              alt={`Foto dari ${messages[5].from}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </motion.div>

                      {/* Frame 7 - Bottom Center Right */}
                      <motion.div
                        className="absolute right-32 bottom-2 cursor-pointer"
                        initial={{ opacity: 0, x: 60, y: 60, rotateZ: 6 }}
                        animate={{ opacity: 1, x: 0, y: 0, rotateZ: 3 }}
                        transition={{ delay: 0.7, type: "spring" }}
                        whileHover={{ scale: 1.05, rotateZ: 4 }}
                        onClick={() =>
                          setZoomedPhoto({
                            photo: messages[6].photo,
                            frameColor: frameColors[6],
                            from: messages[6].from,
                          })
                        }
                      >
                        <div
                          className={`w-36 h-44 bg-gradient-to-br ${frameColors[6]} rounded-xl shadow-2xl p-3 relative`}
                        >
                          <div className="absolute -top-2 -left-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white rounded-sm" />

                          <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                            <img
                              src={messages[6].photo}
                              alt={`Foto dari ${messages[6].from}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </motion.div>

                      {/* Frame 8 - Bottom Right */}
                      <motion.div
                        className="absolute right-4 bottom-4 cursor-pointer"
                        initial={{ opacity: 0, x: 80, y: 50, rotateZ: 10 }}
                        animate={{ opacity: 1, x: 0, y: 0, rotateZ: 6 }}
                        transition={{ delay: 0.8, type: "spring" }}
                        whileHover={{ scale: 1.05, rotateZ: 8 }}
                        onClick={() =>
                          setZoomedPhoto({
                            photo: messages[7].photo,
                            frameColor: frameColors[7],
                            from: messages[7].from,
                          })
                        }
                      >
                        <div
                          className={`w-36 h-44 bg-gradient-to-br ${frameColors[7]} rounded-xl shadow-2xl p-3 relative`}
                        >
                          <div className="absolute -top-2 -left-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white rounded-sm" />
                          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white rounded-sm" />

                          <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                            <img
                              src={messages[7].photo}
                              alt={`Foto dari ${messages[7].from}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </>
              )}
            </AnimatePresence>

            {/* Letter/Envelope - muncul setelah lilin mati */}
            <AnimatePresence>
              {showPhotos && (
                <motion.div
                  className={`absolute ${
                    isMobile ? "bottom-2" : "bottom-4"
                  } cursor-pointer`}
                  initial={{ opacity: 0, scale: 0, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.9, type: "spring", damping: 15 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowMainMessage(true)}
                >
                  <div
                    className={`${
                      isMobile ? "w-16 h-12" : "w-20 h-16 md:w-28 md:h-20"
                    } bg-gradient-to-br from-red-50 to-pink-100 rounded-lg shadow-2xl border-2 border-red-200`}
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 ${
                        isMobile ? "h-6" : "h-8 md:h-10"
                      } bg-gradient-to-br from-red-100 to-pink-200 rounded-t-lg border-b-2 border-red-200`}
                      style={{ clipPath: "polygon(0 0, 50% 70%, 100% 0)" }}
                    />
                    <div
                      className={`absolute ${
                        isMobile
                          ? "top-2 text-lg"
                          : "top-4 md:top-5 text-xl md:text-2xl"
                      } left-1/2 transform -translate-x-1/2`}
                    >
                      ❤️
                    </div>
                    {/* Petunjuk untuk mobile */}
                    {isMobile && (
                      <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs text-white/80 text-center whitespace-nowrap">
                        Baca pesan
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Instruction for photos - only show after photos appear */}
          <AnimatePresence>
            {showPhotos && (
              <motion.div
                className="absolute top-4 md:top-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <motion.p
                  className="text-xs md:text-sm text-gray-700 italic text-center drop-shadow-lg bg-white/40 px-3 py-1 md:px-4 md:py-2 rounded-full backdrop-blur-sm"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Klik pesan untuk melihat pesan!
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Table Legs dengan hiasan */}
        <div className="absolute -bottom-12 md:-bottom-16 left-1/4 w-4 h-16 md:w-6 md:h-20 bg-gradient-to-b from-amber-600 to-amber-700 rounded-b-lg shadow-lg transform -translate-x-1/2">
          {/* Leg decoration */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-amber-500 rounded-full" />
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-amber-400 rounded-full" />
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-amber-500 rounded-full" />
        </div>
        <div className="absolute -bottom-12 md:-bottom-16 right-1/4 w-4 h-16 md:w-6 md:h-20 bg-gradient-to-b from-amber-600 to-amber-700 rounded-b-lg shadow-lg transform translate-x-1/2">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-amber-500 rounded-full" />
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-amber-400 rounded-full" />
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-amber-500 rounded-full" />
        </div>
      </div>

      {/* Zoomed Photo Modal */}
      <AnimatePresence>
        {zoomedPhoto && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedPhoto(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl mx-2 md:mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setZoomedPhoto(null)}
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-2xl z-10 border border-gray-200"
              >
                <span className="text-gray-700 text-xl md:text-2xl font-bold">
                  ×
                </span>
              </button>

              {/* Photo info */}
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 text-white text-center">
                <p className="text-sm md:text-base font-medium bg-black/50 px-3 py-1 rounded-full">
                  {zoomedPhoto.from}
                </p>
              </div>

              {/* Framed Photo */}
              <motion.img
                src={zoomedPhoto.photo}
                alt={`Foto dari ${zoomedPhoto.from}`}
                className="w-full h-auto max-h-[70vh] md:max-h-[80vh] object-contain cursor-zoom-out"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring" }}
                onClick={() => setZoomedPhoto(null)}
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src =
                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ccc" width="100" height="100"/%3E%3Ctext x="50" y="50" font-size="14" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3ENo Image%3C/text%3E%3C/svg%3E';
                }}
              />

              {/* Zoom hint */}
              <motion.p
                className="text-white/80 text-xs text-center mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {isMobile
                  ? "Tap foto untuk menutup • Pinch untuk zoom"
                  : "Klik foto untuk menutup"}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Letter Message Modal */}
      <AnimatePresence>
        {showMainMessage && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-2 md:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMainMessage(false)}
          >
            <motion.div
              className="bg-white rounded-xl md:rounded-2xl shadow-2xl w-full max-w-md md:max-w-3xl max-h-[80vh] md:max-h-[90vh] flex flex-col relative mx-2"
              initial={{ scale: 0.5, rotateY: -90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: 90 }}
              transition={{ type: "spring", damping: 15 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Paper texture overlay */}
              <div
                className="absolute inset-0 rounded-xl md:rounded-2xl opacity-30 pointer-events-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.02) 2px, rgba(0,0,0,.02) 4px),
                  repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.02) 2px, rgba(0,0,0,.02) 4px)`,
                }}
              />

              {/* Close button */}
              <button
                onClick={() => setShowMainMessage(false)}
                className="absolute top-2 right-2 md:top-6 md:right-6 w-8 h-8 md:w-12 md:h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors shadow-lg z-10"
              >
                <span className="text-gray-600 text-xl md:text-2xl">×</span>
              </button>

              {/* Scrollable content area */}
              <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-16">
                <div className="flex flex-col items-center min-h-full">
                  <div className="text-4xl md:text-7xl mb-4 md:mb-8">🎂</div>
                  <h2
                    className="text-2xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4 md:mb-6 text-center px-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Happy Birthday, {name}!
                  </h2>
                  <div className="w-20 h-1 md:w-32 md:h-1 bg-gradient-to-r from-pink-400 via-red-400 to-purple-400 rounded-full mb-4 md:mb-8" />

                  {/* Scrollable message container */}
                  <div className="w-full max-w-2xl">
                    <div
                      className="text-sm md:text-lg lg:text-xl text-gray-800 leading-relaxed whitespace-pre-line px-2"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {mainMessage.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="mb-3 md:mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Scroll indicator */}
                  <div className="mt-4 md:mt-8 text-gray-500 text-xs md:text-sm animate-bounce">
                    ↓ Scroll untuk membaca lebih lanjut ↓
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out;
        }
        
        /* Custom scrollbar styling */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #c084fc;
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #a855f7;
        }

        /* Touch-friendly improvements */
        @media (max-width: 768px) {
          .cursor-pointer {
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
          }
        }
      `}</style>
    </div>
  );
}
