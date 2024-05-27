import ProductList from "@/components/Dashboard/ProductsList";

export default function Dashboard() {
  return (
    <div>
      <div className="card mb-3">
        <h1>Wellcome to Dashboard</h1>
      </div>

      <div className="mt-5">
        <ProductList />
      </div>
    </div>
  );
}
