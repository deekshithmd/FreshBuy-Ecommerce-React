import "./productlist.css";
import { Filter, ProductCard } from "../../components";
import { useData } from "../../contexts";
import { Loader } from "../../components";
import { useState,useEffect } from "react";

export default function ProductList() {
  const { filtered, loading, loadText } = useData();
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [currentPage,setCurrentPage]=useState(1)
  const [pageData,setPageData]=useState([])
  const pageArray = [];

useEffect(()=>{
  let remaining= filtered.length- (currentPage-1*productsPerPage)

  let lastIndex=currentPage*remaining;
  let firstIndex=lastIndex-productsPerPage;
  let data=filtered.slice(firstIndex,lastIndex)
  setPageData(data)

},[currentPage])

  for (let i = 1; i < filtered.length / productsPerPage; i++) {
    pageArray.push(i);
  }

  return (
    <div className="grid-container-product">
      <div className="filter-grid">
        <Filter />
      </div>
      <div className="product-list">
        {loading ? (
          <Loader text={loadText} />
        ) : (
          <>
            {pageData?.map((item) => {
              return <ProductCard key={item._id} product={item} />;
            })}
            {
               currentPage!==1 && <button onClick={()=>setCurrentPage(1)}>First</button>
            }
            {pageArray.map((page, index) => {
               return(
                 <>
                <button key={index} onClick={()=>setCurrentPage(page)}>{page}</button>
                 </>
               )
            }  
            )}
            {
               pageArray.length!==currentPage && <button onClick={()=>setCurrentPage(pageArray.length)}>Last</button>
            }
          </>
        )}
      </div>
    </div>
  );
}
