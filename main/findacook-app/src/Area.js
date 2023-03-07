import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./redux/actions/productActions";
import { getCategories } from "./redux/actions/categoryActions";
import { getProductsByFilter } from "./redux/actions/filterActions";
import _Products from "./components/Menu_Test/_Products";
import { FaSlidersH } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";

const Area = () => {
  const [text, setText] = useState("");
  const [categoryIds, setCategoryIds] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  const handleSearch = (e) => {
    setText(e.target.value); 

    dispatch(getProductsByFilter({ type: "text", query: e.target.value }));
  };

const handleCategory = (e) => {
  const currentCategoryChecked = e.target.value;
  const allCategoriesChecked = [...categoryIds]
  const indexFound = allCategoriesChecked.indexOf(currentCategoryChecked);

  let updatedCategoryIds;
  if (indexFound === -1) {
    updatedCategoryIds = [...categoryIds, currentCategoryChecked];
    setCategoryIds(updatedCategoryIds);
  } else {
    updatedCategoryIds = [...categoryIds]
    updatedCategoryIds.splice(indexFound, 1);
    setCategoryIds(updatedCategoryIds);
  }

  dispatch(getProductsByFilter({type: 'category', query: updatedCategoryIds}));
}

  //   console.log(categories);
  return (
    <>
      <Navbar />
      <section className="shop-page m-4">
        <div className="jumbotron">
          <h5 className=""> <FaMapPin/> 107 Priorland Grove, Dundalk, Co.Louth</h5>
        </div>
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="text-muted">
              Filters{" "}
              <span className="">
                <FaSlidersH />
              </span>
            </div>

            <br />

            <nav className="">
              <form className="search-container">
                <input
                  id="search-bar"
                  type="search"
                  placeholder="Search..."
                  name="search"
                  value={text}
                  onChange={handleSearch}
                />
            
                {/* <button
                  className=""
                  type="submit"
                  disabled={true}
                >
                  Search
                </button> */}
              </form>
            </nav>
    <br />
            <div class="">
              {categories &&
                categories.map((c) => (
                  <div key={c._id} className="">
                    <input
                      className=""
                      type="checkbox"
                      name="category"
                      value={c._id}
                      id="flexCheckChecked"
                      onChange={handleCategory}
                      // checked
                    />
                    <label
                      className="checkbox checked"
                      htmlFor="flexCheckChecked"
                    ></label> {c.category_name}

                  </div>
                ))}
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              {products &&
                products.map((product) => (
                  <_Products key={product._id} product={product} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Area;
