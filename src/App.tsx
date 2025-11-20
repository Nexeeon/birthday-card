import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  from: string;
  message: string;
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
  ],
}: BirthdayCardProps) {
  const [zoomedPhoto, setZoomedPhoto] = useState<{
    photo: string;
    frameColor: string;
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

  const frameColors = [
    "from-amber-200 to-amber-300",
    "from-rose-200 to-rose-300",
    "from-purple-200 to-purple-300",
    "from-blue-200 to-blue-300",
  ];

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
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-8 perspective-1000 overflow-hidden relative">
      {/* Stars - only show after candles are out */}
      <AnimatePresence>
        {showPhotos && (
          <>
            {[...Array(50)].map((_, i) => (
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

      <div className="relative max-w-6xl w-full">
        {/* Table Surface */}
        <motion.div
          className="relative w-full h-[600px] rounded-3xl shadow-2xl transform-gpu"
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
            transform: "rotateX(8deg)",
          }}
        >
          {/* Checkered Floor Pattern - only show after transition */}
          <AnimatePresence>
            {showPhotos && (
              <motion.div
                className="absolute inset-0 rounded-3xl overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1 }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)`,
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute inset-0 flex items-center justify-center">
            {/* Photo Frames - only show after candles are out */}
            <AnimatePresence>
              {showPhotos && (
                <>
                  {/* Left Frame 1 */}
                  <motion.div
                    className="absolute left-16 top-32 cursor-pointer"
                    initial={{ opacity: 0, x: -100, rotateZ: -15 }}
                    animate={{ opacity: 1, x: 0, rotateZ: -8 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    whileHover={{ scale: 1.05, rotateZ: -5 }}
                    onClick={() =>
                      setZoomedPhoto({
                        photo: messages[0].photo,
                        frameColor: frameColors[0],
                      })
                    }
                  >
                    <div
                      className={`w-40 h-48 bg-gradient-to-br ${frameColors[0]} rounded-lg shadow-xl p-3`}
                    >
                      <div className="w-full h-full bg-white rounded overflow-hidden">
                        <img
                          src={messages[0].photo}
                          alt={`Foto dari ${messages[0].from}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Left Frame 2 */}
                  <motion.div
                    className="absolute left-32 bottom-24 cursor-pointer"
                    initial={{ opacity: 0, x: -100, rotateZ: 10 }}
                    animate={{ opacity: 1, x: 0, rotateZ: 5 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    whileHover={{ scale: 1.05, rotateZ: 8 }}
                    onClick={() =>
                      setZoomedPhoto({
                        photo: messages[1].photo,
                        frameColor: frameColors[1],
                      })
                    }
                  >
                    <div
                      className={`w-40 h-48 bg-gradient-to-br ${frameColors[1]} rounded-lg shadow-xl p-3`}
                    >
                      <div className="w-full h-full bg-white rounded overflow-hidden">
                        <img
                          src={messages[1].photo}
                          alt={`Foto dari ${messages[1].from}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Frame 1 */}
                  <motion.div
                    className="absolute right-16 top-32 cursor-pointer"
                    initial={{ opacity: 0, x: 100, rotateZ: 15 }}
                    animate={{ opacity: 1, x: 0, rotateZ: 8 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    whileHover={{ scale: 1.05, rotateZ: 11 }}
                    onClick={() =>
                      setZoomedPhoto({
                        photo: messages[2].photo,
                        frameColor: frameColors[2],
                      })
                    }
                  >
                    <div
                      className={`w-40 h-48 bg-gradient-to-br ${frameColors[2]} rounded-lg shadow-xl p-3`}
                    >
                      <div className="w-full h-full bg-white rounded overflow-hidden">
                        <img
                          src={messages[2].photo}
                          alt={`Foto dari ${messages[2].from}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Frame 2 */}
                  <motion.div
                    className="absolute right-32 bottom-24 cursor-pointer"
                    initial={{ opacity: 0, x: 100, rotateZ: -10 }}
                    animate={{ opacity: 1, x: 0, rotateZ: -5 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    whileHover={{ scale: 1.05, rotateZ: -8 }}
                    onClick={() =>
                      setZoomedPhoto({
                        photo: messages[3].photo,
                        frameColor: frameColors[3],
                      })
                    }
                  >
                    <div
                      className={`w-40 h-48 bg-gradient-to-br ${frameColors[3]} rounded-lg shadow-xl p-3`}
                    >
                      <div className="w-full h-full bg-white rounded overflow-hidden">
                        <img
                          src={messages[3].photo}
                          alt={`Foto dari ${messages[3].from}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Letter/Envelope in center */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    initial={{ opacity: 0, scale: 0, y: 100 }}
                    animate={{ opacity: 1, scale: 1, y: -120 }}
                    transition={{ delay: 1, type: "spring", damping: 15 }}
                    whileHover={{ scale: 1.1, rotateZ: 5 }}
                    onClick={() => setShowMainMessage(true)}
                  >
                    <div className="relative w-32 h-24 bg-gradient-to-br from-red-50 to-pink-100 rounded-lg shadow-2xl border-2 border-red-200">
                      {/* Envelope flap */}
                      <div
                        className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-br from-red-100 to-pink-200 rounded-t-lg border-b-2 border-red-200"
                        style={{ clipPath: "polygon(0 0, 50% 70%, 100% 0)" }}
                      />
                      {/* Heart seal */}
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-3xl">
                        💌
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Birthday Cake - Center */}
            <div
              className="transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Cake Shadow */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-black/20 rounded-full blur-lg" />

              {/* Cake Base */}
              <div className="relative">
                <div className="w-56 h-20 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-3xl shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="absolute -bottom-1 left-0 right-0 flex justify-around">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-3 bg-pink-400 rounded-b-full"
                      />
                    ))}
                  </div>
                </div>

                {/* Cake Middle Layer */}
                <div className="w-48 h-16 bg-gradient-to-b from-purple-300 to-purple-400 mx-auto -mt-2 rounded-t-2xl shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="absolute -bottom-1 left-0 right-0 flex justify-around">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-3 bg-purple-400 rounded-b-full"
                      />
                    ))}
                  </div>
                </div>

                {/* Cake Top Layer */}
                <div className="w-40 h-12 bg-gradient-to-b from-rose-300 to-rose-400 mx-auto -mt-2 rounded-t-xl shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                {/* Candles */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex gap-3">
                  {candlesLit.map((isLit, index) => (
                    <div
                      key={index}
                      className="relative cursor-pointer group"
                      onClick={() => isLit && blowOutCandle(index)}
                    >
                      <div className="w-3 h-10 bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-full shadow-md relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-gray-800 rounded-full" />
                      </div>
                      {isLit && (
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                          <div className="relative w-4 h-6">
                            <div className="absolute inset-0 bg-yellow-400 rounded-full animate-pulse" />
                            <div
                              className="absolute inset-1 bg-orange-400 rounded-full animate-pulse"
                              style={{ animationDelay: "0.1s" }}
                            />
                            <div
                              className="absolute inset-2 bg-yellow-200 rounded-full animate-pulse"
                              style={{ animationDelay: "0.2s" }}
                            />
                          </div>
                          <div className="absolute inset-0 bg-yellow-300/50 rounded-full blur-md animate-pulse" />
                        </div>
                      )}
                      {!isLit && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-fade-in-up">
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
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <p className="text-sm text-white/80 italic text-center drop-shadow-lg">
                    Klik lilin untuk meniupnya! 🎂
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Instruction for photos - only show after photos appear */}
          <AnimatePresence>
            {showPhotos && (
              <motion.div
                className="absolute top-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <motion.p
                  className="text-sm text-gray-700 italic text-center drop-shadow-lg bg-white/40 px-4 py-2 rounded-full backdrop-blur-sm"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Klik surat untuk membaca pesan!
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Table Legs */}
        <div className="absolute -bottom-16 left-1/4 w-6 h-20 bg-gradient-to-b from-amber-600 to-amber-700 rounded-b-lg shadow-lg transform -translate-x-1/2" />
        <div className="absolute -bottom-16 right-1/4 w-6 h-20 bg-gradient-to-b from-amber-600 to-amber-700 rounded-b-lg shadow-lg transform translate-x-1/2" />
      </div>

      {/* Zoomed Photo Modal */}
      <AnimatePresence>
        {zoomedPhoto && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedPhoto(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setZoomedPhoto(null)}
                className="absolute -top-4 -right-4 w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors shadow-2xl z-10"
              >
                <span className="text-gray-600 text-2xl">×</span>
              </button>

              {/* Framed Photo */}
              <div
                className={`bg-gradient-to-br ${zoomedPhoto.frameColor} rounded-2xl shadow-2xl p-6`}
              >
                <div className="bg-white rounded-xl overflow-hidden">
                  <img
                    src={zoomedPhoto.photo}
                    alt="Foto kenangan ulang tahun"
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Letter Message Modal */}
      <AnimatePresence>
        {showMainMessage && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMainMessage(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col relative"
              initial={{ scale: 0.5, rotateY: -90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: 90 }}
              transition={{ type: "spring", damping: 15 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Paper texture overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.02) 2px, rgba(0,0,0,.02) 4px),
                  repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.02) 2px, rgba(0,0,0,.02) 4px)`,
                }}
              />

              {/* Close button */}
              <button
                onClick={() => setShowMainMessage(false)}
                className="absolute top-6 right-6 w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors shadow-lg z-10"
              >
                <span className="text-gray-600 text-2xl">×</span>
              </button>

              {/* Scrollable content area */}
              <div className="flex-1 overflow-y-auto p-8 md:p-16">
                <div className="flex flex-col items-center min-h-full">
                  <div className="text-7xl mb-8">💝</div>
                  <h2
                    className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-6 text-center"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Happy Birthday, {name}!
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-pink-400 via-red-400 to-purple-400 rounded-full mb-8" />

                  {/* Scrollable message container */}
                  <div className="w-full max-w-2xl">
                    <div
                      className="text-lg md:text-xl text-gray-800 leading-relaxed whitespace-pre-line"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {mainMessage.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Scroll indicator */}
                  <div className="mt-8 text-gray-500 text-sm animate-bounce">
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
          width: 6px;
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
      `}</style>
    </div>
  );
}
