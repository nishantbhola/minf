import React, { useEffect, useState } from "react";
import Baffle from "baffle";

function GlitchText() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const text = Baffle(".text__glitch");
    text.set({
      characters:
        "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>",
      speed: 100,
    });
    text.start();
    text.reveal(4000);
    setIsLoaded(true);

    return () => text;
  }, []);

  return (
    <main>
      <section className="section--1">
        <h3 className="text__glitch">ABOUT</h3>
      </section>
    </main>
  );
}

export default GlitchText;
