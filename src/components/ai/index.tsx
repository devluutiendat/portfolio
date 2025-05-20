"use client";
import { useState } from "react";
import FormAi from "./formAi";
import Image from "next/image";
const Ai = () => {
  const [open, setOpen] = useState(false);
  return (
    <section>
      <div
        onClick={() => setOpen(true)}
        className="gap-3 fixed bottom-0 right-0 bg-black/20 shadow-lg border border-backgroundCat flex flex-col items-center justify-center dark:bg-backgroundCat rounded-2xl p-2 m-4"
      >
        <Image src={"/avatar.svg"} alt="ai" width={30} height={30} />
        <h1 className="text-xs text-black dark:text-white">ask about me</h1>
      </div>
      {open && <FormAi setOpen={setOpen} />}
    </section>
  );
};

export default Ai;
