import AllProduct from "@/component/AllProduct";

async function getProducts() {
  const res = await fetch("https://admin.refabry.com/api/all/product/get", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  const json = await res.json();
  // Return only the array of products inside json.data.data
  return json.data.data;
}

export default async function HomePage() {
  const products = await getProducts(); // now products is an array

  return (
    <div className="px-5 md:px-10 2xl:px-20 h-screen ">
      <p className="text-4xl font-semibold py-20 text-center">Products</p>
      <div className="pb-10">
        <AllProduct products={products} />
      </div>
    </div>
  );
}
