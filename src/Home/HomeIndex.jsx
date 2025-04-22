"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/productSlice";
import AllProduct from "@/component/AllProduct";

const Home = () => {
  const dispatch = useDispatch();
  const {
    items: products,
    status,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading")
    return <p>Loading...</p>;
  if (status === "failed")
    return <p className="text-center py-20 text-red-600">{error}</p>;
  if (!products.length)
    return <p className="text-center py-20">No products found.</p>;

  return <AllProduct products={products} />;
};
export default Home;
