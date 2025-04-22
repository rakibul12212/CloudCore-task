


const API_URL = "https://admin.refabry.com/api/all/product/get";

export const getAllProducts = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();

  // The products are inside data.data (pagination structure)
  if (data && data.data && Array.isArray(data.data.data)) {
    return data.data.data; // return the actual products array
  }

  throw new Error("Could not find products array in API response");
};

export const getProductById = async (id) => {
  const products = await getAllProducts();

  if (!Array.isArray(products)) {
    console.error("Products is not an array:", products);
    return null;
  }

  return (
    products.find((product) => product.id.toString() === id.toString()) || null
  );
};
