import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../Context";
import toast from "react-hot-toast";
function ProductDetail() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const { addCart, loading, setLoading, login } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        axios
          .get(`https://fakestoreapi.com/products/${id}`)
          .then((response) => setProduct(response.data));
        setLoading(false);
      } catch (error) {
        console.log("error");
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div>
      <main className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        {!loading ? (
          <div className="grid gap-[5.6rem] lg:grid-cols-2 lg:gap-10 ">
            <div className="space-y-6 h-[22rem] w-[20rem] mx-auto  ">
              <img
                alt="Product image"
                className="mx-auto border-black w-full  object-cover p-2 py-3 "
                src={product.image}
              />
            </div>
            <div className="space-y-6 ">
              <h1 className="text-3xl font-bold text-gray-900">
                {product.title}
              </h1>
              <div className="space-y-1">
                <p className="text-gray-900"></p>
                <p className="text-gray-700">{product.description}</p>
              </div>
              <div className="flex items-center">
                <p className="ml-2 text-gray-900 flex flex-col">
                  {/* <span>{product.rating.rate}</span> */}
                  {/* <span>{product.rating.count}</span> */}
                </p>
              </div>
              <div className="mt-8">
                <div className="flex items-center">
                  <h2 className="text-lg font-semibold text-gray-900">Price</h2>
                  <p className="ml-2 text-lg text-gray-900">${product.price}</p>
                </div>
                <button
                  className="mt-4 bg-purple-500 text-white font-bold p-2"
                  onClick={() => {
                    if (!login) {
                      toast.error("Please Login");
                    } else {
                      toast.success("Product Added");
                      addCart(product.id);
                    }
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <h2 className="font-bold text-2xl">Loading....</h2>
          </div>
        )}
      </main>
    </div>
  );
}
export default ProductDetail;
