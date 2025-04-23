
export const getAllProducts = async () => {
  const res = await fetch("https://admin.refabry.com/api/all/product/get", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}), 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  if (data && data.data && Array.isArray(data.data.data)) {
    return data.data.data;
  }

  throw new Error("Could not find products");
};


export const getProductById = async (id) => {
  const products = await getAllProducts();

  if (!Array.isArray(products)) {
    return null;
  }

  return (
    products.find((product) => product.id.toString() === id.toString()) || null
  );
};
