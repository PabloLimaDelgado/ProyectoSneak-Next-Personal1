"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Landing() {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <h1>Hola Landing</h1>
      <AnimatePresence initial={false}>
        <motion.div
          className="bg-neutral-600	
               size-50 flex items-center justify-center"
        >
          <motion.img
            src="images/logoblanco.png"
            alt=""
            className="size-45"
            initial={{ opacity: 0 }}
            animate={{ opacity: loading ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        <motion.button
          className="bg-sky-700 rounded-3xl text-white p-2 m-2"
          onClick={() => setLoading(true)}
        >
          Aceptar términos y condiciones
        </motion.button>
      </AnimatePresence>
    </>
  );
}
