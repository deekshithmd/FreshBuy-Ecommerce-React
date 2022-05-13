import "./productlist.css";
import { Filter, ProductCard } from "../../components";
import { useData } from "../../contexts";

export default function ProductList() {
  const { filtered } = useData();
  return (
    <div className="grid-container-product">
      <div className="filter-grid">
        <Filter />
      </div>
      <div className="product-list">
        {filtered.map((item) => {
          return <ProductCard key={item._id} product={item} />;
        })}
      </div>
    </div>
  );
}
