import { Link } from "react-router-dom";
export default function Occasional() {
  return (
    <div className="occasional-products">
      <Link
        to="/productlist"
        className="occasional-item-1 link-style-none flex"
      >
        <span className="text-md text-bold margin-b">
          Alltime available fruits
        </span>
        <img
          src="https://i.postimg.cc/h4L1Dk8D/alltime.jpg"
          alt=""
        />
      </Link>
      <Link
        to="/productlist"
        className="occasional-item-2 link-style-none flex"
      >
        <span className="text-md text-bold margin-b">
          Winter special fruits
        </span>
        <img
          src="https://i.postimg.cc/8PwdWLnx/winter.jpg"
          alt=""
        />
      </Link>
      <Link
        to="/productlist"
        className="occasional-item-3 link-style-none flex"
      >
        <span className="text-md text-bold margin-b">
          Summer special fruits
        </span>
        <img
          src="https://i.postimg.cc/15ycfvMp/summer.jpg"
          alt=""
        />
      </Link>
    </div>
  );
}
