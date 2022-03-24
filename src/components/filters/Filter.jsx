import "./filter.css";
import { useData } from "../../contexts";
export default function Filter() {
  const { data, dispatch } = useData();
  return (
    <div className="filter-section">
      <section className="filter-headings">
        <p className="text-lg text-bold">Filters</p>
        <button className="btn btn-solid-primary clear-filter">Clear</button>
      </section>
      <p className="text-md text-bold">Price</p>
      <div className="range-slider">
        <input type="range" min="0" max="200" step="20" />
        <i className="fa fa-inr margin-l text-sm">.</i>
        <span className="range-value text-md text-bold">100</span>
      </div>
      <p className="text-md text-bold">Categories</p>
      {data.categories.map((item) => {
        return (
          <label className="text-md" key={item._id}>
            <input type="checkbox" className="margin-r" />
            {item.categoryName}
          </label>
        );
      })}
      <p className="text-md text-bold">Ratings</p>
      <label className="text-md">
        <input type="radio" name="rating" className="margin-r" />4 Stars & above
      </label>
      <label className="text-md">
        <input type="radio" name="rating" className="margin-r" />3 Stars & above
      </label>
      <label className="text-md">
        <input type="radio" name="rating" className="margin-r" />2 Stars & above
      </label>
      <label className="text-md">
        <input type="radio" name="rating" className="margin-r" />1 Star & above
      </label>
      <p className="text-md text-bold">Sort By</p>
      <label className="text-md">
        <input type="radio" name="sort" className="margin-r" />
        Popularity
      </label>
      <label className="text-md">
        <input type="radio" name="sort" className="margin-r" />
        Price Low-High
      </label>
      <label className="text-md">
        <input type="radio" name="sort" className="margin-r" />
        Price High-Low
      </label>
    </div>
  );
}
