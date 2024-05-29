import ProductList from "@/components/Dashboard/ProductsList";

export default function Dashboard() {
  return (
    <div>
      <div className="card mb-3">
        <h1 className="text-3xl font-bold mb-1 mt-2">Welcome to Dashboard</h1>
      </div>

      <div className="mt-3">
        <ProductList />
      </div>
    </div>
  );
}
