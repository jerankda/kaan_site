import React, { useState } from 'react';
import './References.css';

// Import all images (PNG, JPEG, and converted HEIC files)
import vorhernacher1 from '../media/vorhernacher1.jpeg';
import vorhernacher2 from '../media/vorchernacher2.jpeg';
import img3622 from '../media/IMG_3622.PNG';
import img0695 from '../media/IMG_0695.PNG';
import imgEFDF from '../media/EFDF29F8-6695-49FE-BEB6-11FC8E5A5369.jpeg';
import img8BAB from '../media/8BABC7DD-B716-4C4F-8C12-9755BF94FDF8.jpeg';
import img8FA6 from '../media/8FA67693-4750-418A-BB58-CDDB112F0A45.jpeg';

// Import converted HEIC files (now JPEG)
import img1335 from '../media/IMG_1335.jpg';
import img2799 from '../media/IMG_2799.jpg';
import img3172 from '../media/IMG_3172.jpg';
import img3206 from '../media/IMG_3206.jpg';
import img3207 from '../media/IMG_3207.jpg';
import img3313 from '../media/IMG_3313.jpg';
import img3347 from '../media/IMG_3347.jpg';
import img3469 from '../media/IMG_3469.jpg';
import img3584 from '../media/IMG_3584.jpg';
import img3668 from '../media/IMG_3668.jpg';
import img3671 from '../media/IMG_3671.jpg';
import img4245 from '../media/IMG_4245.jpg';
import img4264 from '../media/IMG_4264.jpg';
import img4294 from '../media/IMG_4294.jpg';
import img4300 from '../media/IMG_4300.jpg';
import img4607 from '../media/IMG_4607.jpg';
import img4608 from '../media/IMG_4608.jpg';
import img5034 from '../media/IMG_5034.jpg';
import img5040 from '../media/IMG_5040.jpg';
import img5055 from '../media/IMG_5055.jpg';
import img5123 from '../media/IMG_5123.jpg';
import img5136 from '../media/IMG_5136.jpg';
import img5179 from '../media/IMG_5179.jpg';
import img5389 from '../media/IMG_5389.jpg';
import img5602 from '../media/IMG_5602.jpg';
import img5628 from '../media/IMG_5628.jpg';
import img5655 from '../media/IMG_5655.jpg';
import img5752 from '../media/IMG_5752.jpg';
import img9166 from '../media/IMG_9166.jpg';
import img9434 from '../media/IMG_9434.jpg';
import img9434_1 from '../media/IMG_9434(1).jpg';
import img9534 from '../media/IMG_9534.jpg';
import img9936 from '../media/IMG_9936.jpg';

const References = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // All images in one comprehensive gallery
  const allImages = [
    { src: vorhernacher1, alt: 'Referenzbild 1', category: 'Referenz' },
    { src: vorhernacher2, alt: 'Referenzbild 2', category: 'Referenz' },
    { src: img3622, alt: 'Referenzbild 3', category: 'Referenz' },
    { src: img0695, alt: 'Referenzbild 4', category: 'Referenz' },
    { src: imgEFDF, alt: 'Referenzbild 5', category: 'Referenz' },
    { src: img8BAB, alt: 'Referenzbild 6', category: 'Referenz' },
    { src: img8FA6, alt: 'Referenzbild 7', category: 'Referenz' },
    { src: img1335, alt: 'Referenzbild 8', category: 'Referenz' },
    { src: img2799, alt: 'Referenzbild 9', category: 'Referenz' },
    { src: img3172, alt: 'Referenzbild 10', category: 'Referenz' },
    { src: img3206, alt: 'Referenzbild 11', category: 'Referenz' },
    { src: img3207, alt: 'Referenzbild 12', category: 'Referenz' },
    { src: img3313, alt: 'Referenzbild 13', category: 'Referenz' },
    { src: img3347, alt: 'Referenzbild 14', category: 'Referenz' },
    { src: img3469, alt: 'Referenzbild 15', category: 'Referenz' },
    { src: img3584, alt: 'Referenzbild 16', category: 'Referenz' },
    { src: img3668, alt: 'Referenzbild 17', category: 'Referenz' },
    { src: img3671, alt: 'Referenzbild 18', category: 'Referenz' },
    { src: img4245, alt: 'Referenzbild 19', category: 'Referenz' },
    { src: img4264, alt: 'Referenzbild 20', category: 'Referenz' },
    { src: img4294, alt: 'Referenzbild 21', category: 'Referenz' },
    { src: img4300, alt: 'Referenzbild 22', category: 'Referenz' },
    { src: img4607, alt: 'Referenzbild 23', category: 'Referenz' },
    { src: img4608, alt: 'Referenzbild 24', category: 'Referenz' },
    { src: img5034, alt: 'Referenzbild 25', category: 'Referenz' },
    { src: img5040, alt: 'Referenzbild 26', category: 'Referenz' },
    { src: img5055, alt: 'Referenzbild 27', category: 'Referenz' },
    { src: img5123, alt: 'Referenzbild 28', category: 'Referenz' },
    { src: img5136, alt: 'Referenzbild 29', category: 'Referenz' },
    { src: img5179, alt: 'Referenzbild 30', category: 'Referenz' },
    { src: img5389, alt: 'Referenzbild 31', category: 'Referenz' },
    { src: img5602, alt: 'Referenzbild 32', category: 'Referenz' },
    { src: img5628, alt: 'Referenzbild 33', category: 'Referenz' },
    { src: img5655, alt: 'Referenzbild 34', category: 'Referenz' },
    { src: img5752, alt: 'Referenzbild 35', category: 'Referenz' },
    { src: img9166, alt: 'Referenzbild 36', category: 'Referenz' },
    { src: img9434, alt: 'Referenzbild 37', category: 'Referenz' },
    { src: img9434_1, alt: 'Referenzbild 38', category: 'Referenz' },
    { src: img9534, alt: 'Referenzbild 39', category: 'Referenz' },
    { src: img9936, alt: 'Referenzbild 40', category: 'Referenz' }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setCurrentSlide(allImages.findIndex(img => img.src === image.src));
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % allImages.length);
    setSelectedImage(allImages[(currentSlide + 1) % allImages.length]);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + allImages.length) % allImages.length);
    setSelectedImage(allImages[(currentSlide - 1 + allImages.length) % allImages.length]);
  };

  return (
    <section id="references" className="references-section">
      <div className="container">
        <h2>Referenzen</h2>
        <p className="section-description">
          Entdecken Sie unsere erfolgreich abgeschlossenen Projekte und lassen Sie sich von der Qualität unserer Arbeit überzeugen.
        </p>
        
        <div className="image-gallery">
            {allImages.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => openModal(image)}
              >
                <img src={image.src} alt={image.alt} />
                <div className="image-overlay">
                  <span className="category-tag">{image.category}</span>
                </div>
              </div>
            ))}
          </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <button className="modal-nav prev" onClick={prevSlide}>‹</button>
            <button className="modal-nav next" onClick={nextSlide}>›</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="modal-info">
              <p>{selectedImage.alt}</p>
              {selectedImage.category && <span className="category-tag">{selectedImage.category}</span>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default References;
