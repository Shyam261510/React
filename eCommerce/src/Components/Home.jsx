import { ProductsList } from "./ProductsList";
import { useStore } from "../Context";
function Home({ products }) {
    const { loading } = useStore();
  return (
    <div>
      {!loading ? (
        <ProductsList products={products} />
      ) : (
       
        <div className="flex justify-center items-center h-screen">
        <h2 className="font-bold text-2xl">Loading....</h2>
      </div>
      
      )}
    
    </div>
  );
}
export default Home;
