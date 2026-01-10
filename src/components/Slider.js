import { useState } from "react";

const images = [
  "https://picsum.photos/900/400?random=4",
  "https://picsum.photos/900/400?random=5",
  "https://picsum.photos/900/400?random=6"
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div style={styles.slider}>
      <button onClick={prev} style={styles.button}>‹</button>

      <img
        src={images[index]}
        alt="slide"
        style={styles.image}
      />

      <button onClick={next} style={styles.button}>›</button>
    </div>
  );
}

const styles = {
  slider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px"
  },
  image: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "8px"
  },
  button: {
    fontSize: "30px",
    cursor: "pointer",
    background: "none",
    border: "none"
  }
};
//auto-slide version
//import { useEffect } from "react";

// useEffect(() => {
//   const interval = setInterval(next, 3000);
//   return () => clearInterval(interval);
// }, [index]);