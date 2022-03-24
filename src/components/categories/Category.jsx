import { Link } from "react-router-dom";
export default function Category() {
  return (
    <div className="hero-section">
      <Link to="/productlist" className="hero-container link-style-none">
        <img
          src="https://i.postimg.cc/5yB3DGgt/leafy.png"
          className="hero-image"
          alt=""
        />
        <span className="text-md text-bold">Leafy Green</span>
      </Link>
      <Link to="/productlist" className="hero-container link-style-none">
        <img
          src="https://i.postimg.cc/xTZRhfjC/marrow.png"
          className="hero-image"
          alt=""
        />
        <span className="text-md text-bold">Marrow</span>
      </Link>
      <Link to="/productlist" className="hero-container link-style-none">
        <img
          src="https://i.postimg.cc/9MxXbNd6/root.png"
          className="hero-image"
          alt=""
        />
        <span className="text-md text-bold">Root</span>
      </Link>
      <Link to="/productlist" className="hero-container link-style-none">
        <img
          src="https://i.postimg.cc/0yq6bFcn/allium.png"
          className="hero-image"
          alt=""
        />
        <span className="text-md text-bold">Allium</span>
      </Link>
      <Link to="/productlist" className="hero-container link-style-none">
        <img
          src="https://i.postimg.cc/Y25zMpLy/cruciferous.png"
          className="hero-image"
          alt=""
        />
        <span className=" text-md text-bold">Cruciferous</span>
      </Link>
      <Link to="/productlist" className="hero-container link-style-none">
        <img
          src="https://i.postimg.cc/DwTVJkHx/fruits.png"
          className="hero-image"
          alt=""
        />
        <span className="text-md text-bold">Fruits</span>
      </Link>
    </div>
  );
}
