import { useState } from "react";


const items = [
    { id:1, image: 'https://www.popeyes.com.pe/media/wysiwyg/popeyes/Bannersnuevos/banner-generico-desktop-2000x695.webp', title: 'image 1'},
    { id:2, image: 'https://www.popeyes.com.pe/media/wysiwyg/popeyes/Bannersnuevos/Banner-web-PC-Promos_19.90-Alitas-2000x695.webp', title: 'image 2' },
    { id:3, image: 'https://www.popeyes.com.pe/media/wysiwyg/popeyes/Bannersnuevos/Banner-web-PC-Promos_39.90-Alitas-2000x695.webp', title: 'image 3' },
    { id:4, image: 'https://www.popeyes.com.pe/media/wysiwyg/Lunes-de-Alitas-Personal-2000x695-banner-PC_2_8_.png', title: 'image 4' },
    { id:5, image: 'https://www.popeyes.com.pe/media/wysiwyg/Lunes-de-Alitas-D_o-2000x695-banner-PC_1_8_.png', title: 'image 5' },
  ];
  

function Carrusel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((index) => (index === 0 ? items.length - 1 : index - 1));
  };

  const next = () => {
    setCurrentIndex((index) => (index === items.length - 1 ? 0 : index + 1));
  };

  return (
    <div className="carrusel-container">
      <button className="carrusel-button prev" onClick={prev}>❮</button>
      <img
        className="carrusel-image"
        src={items[currentIndex].image}
        alt={items[currentIndex].title}
      />
      <button className="carrusel-button next" onClick={next}>❯</button>
    </div>
  );
}

export default Carrusel;
