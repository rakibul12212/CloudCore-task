
export const getAllProducts = async () => {
  try {
    const res = await fetch("https://admin.refabry.com/api/all/product/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}), 
      cache: "no-store", 
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (data?.data?.data && Array.isArray(data.data.data)) {
      return data.data.data;
    }

    throw new Error("Unexpected response structure from API.");
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return []; 
  }
};


export const getProductById = async (id) => {
  const products = await getAllProducts();

  return (
    products.find((product) => product.id?.toString() === id?.toString()) ||
    null
  );
};
