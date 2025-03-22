
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/Gallery.css";

const galleryData = {
    street: ["street/street1.jpg", "street/street2.jpg","street/street3.jpg","street/street4.jpg","street/street5.jpg","street/street6.jpg","street/street7.jpg","street/street8.jpg","street/street9.jpg","street/street10.jpg"],
    portraits: ["portrait/portrait1.jpg", "portrait/portrait2.jpg", "portrait/portrait3.jpg","portrait/portrait4.jpg","portrait/portrait5.jpg","portrait/portrait6.jpg","portrait/portrait7.jpg","portrait/portrait8.jpg"],
    city: ["city/city1.jpg", "city/city2.jpg","city/city3.jpg", "city/city4.jpg","city/city5.jpg","city/city6.jpg","city/city7.jpg"],
    landscape: ["landscape/landscape1.jpg", "landscape/landscape2.jpg","landscape/landscape3.jpg","landscape/landscape4.jpg","landscape/landscape5.jpg","landscape/landscape6.jpg"],
    animal: ["animal/animal1.jpg"]
};

function Gallery() {
    const { category } = useParams();
    const images = galleryData[category] || [];
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="gallery-container">
            <h2>{category.toUpperCase()} Photography</h2>
            <div className="gallery-grid">
                {images.map((img, index) => (
                    <div key={index} className="gallery-square" onClick={() => setSelectedImage(`/images/${img}`)}>
                        <img src={`/images/${img}`} alt={category} className="gallery-image" />
                    </div>
                ))}
            </div>

            {/* 放大图片的模态框 */}
            {selectedImage && (
                <div className="modal" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Expanded" className="modal-image" />
                        <a href={selectedImage} download className="download-button">Download</a>
                        <button className="close-button" onClick={() => setSelectedImage(null)}>✕</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;