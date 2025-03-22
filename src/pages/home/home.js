import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";

const categories = [
    { name: "Street Photography", link: "/gallery/street", image: "/images/street/street5.jpg" },
    { name: "Portraits", link: "/gallery/portraits", image: "/images/portrait/portrait1.jpg" },
    { name: "City", link: "/gallery/city", image: "/images/city/city1.jpg" },
    { name: "Landscape", link: "/gallery/landscape", image: "/images/landscape/landscape3.jpg" },
    { name: "Animal", link: "/gallery/animal", image: "/images/animal/animal1.jpg" }
];

function Home() {
    return (
        <div className="home-container">
            {categories.map((category, index) => (
                <Link to={category.link} key={index} className="category-row" style={{ backgroundImage: `url(${category.image})` }}>
                    <div className="category-overlay">
                        <h2>{category.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Home;