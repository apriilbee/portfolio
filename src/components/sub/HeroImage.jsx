import { useState, useEffect } from "react";
import Lottie from "react-lottie-player"; 


const HeroImage = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/lottie/hero-image.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data)) 
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  if (!animationData) return <div>Loading...</div>; 

  return (
    <div className="flex justify-center items-center">
      <Lottie
        loop
        animationData={animationData} 
        play
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default HeroImage;
