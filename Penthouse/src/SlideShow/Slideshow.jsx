import "./Slideshow.css"; 

const Slideshow = () => {
  const images = [
    "src/Project Images/Naan.jpg", 
    "src/Project Images/Curry.jpg",
    "src/Project Images/Samosa.jpg",
    "src/Project Images/Kebab.jpg",
  ];

  return (
    <div className="slideshow-container">
      <div className="slideshow-track">
        {images.concat(images).map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index}`} className="slide" />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
