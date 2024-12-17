"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingEffectProps {
  text: string;
  speed?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    const cleanText = text.trim(); // Bersihkan teks
    if (typeof cleanText !== "string" || cleanText.length === 0) return;

    let index = 0;
    const addCharacter = () => {
      if (index < cleanText.length) {
        setDisplayedText((prev) => prev + cleanText[index]);
        index++;
        setTimeout(addCharacter, speed);
      }
    };

    addCharacter();

    return () => {}; // Cleanup jika perlu
  }, [text, speed]); // Dependensi text dan speed

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        fontSize: "inherit", // Menyesuaikan ukuran font dengan elemen induk
        fontWeight: "inherit", // Menyesuaikan ketebalan font dengan elemen induk
        textAlign: "inherit", // Menyesuaikan perataan teks dengan elemen induk
        whiteSpace: "pre-wrap",
        display: "inline", // Agar teks tampil dalam satu baris
      }}
    >
      {displayedText}
    </motion.div>
  );
};

export default TypingEffect;
