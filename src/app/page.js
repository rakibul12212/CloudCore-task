import Home from "@/Home/HomeIndex";

export default function HomePage() {
  return (
    <div className="px-5 md:px-10 2xl:px-20 min-h-screen">
      <p className="text-4xl font-semibold py-20 text-center">Products</p>
      <div className="pb-10">
        <Home />
      </div>
    </div>
  );
}

