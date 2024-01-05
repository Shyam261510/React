import { useStore } from "../Context";

function Cart() {
  const { cartData } = useStore();

  return (
    <div>
      <main className="flex flex-col md:flex-row gap-6 px-4 py-12">
        <section className="w-full md:w-3/4 grid grid-cols-1 gap-6">
          <h2 className="font-bold text-2xl">Shopping Cart</h2>
          <div>
            {cartData.map((data) => (
              <div
                key={data.id}
                className="group relative overflow-hidden rounded-lg shadow hover:shadow-md hover:scale-105 transform transition"
              >
                <div className="flex justify-between items-start p-4">
                  <div className="flex gap-4">
                    <img
                      alt="Product 1"
                      className="w-36 h-[12rem] object-cover"
                      src={data.image}
                      style={{
                        aspectRatio: "300/300",
                        objectFit: "cover",
                      }}
                    />
                    <div className="flex flex-col justify-evenly">
                      <h3 className="font-bold text-xl">{data.title}</h3>
                      <p className="text-sm">
                        {data.description.slice(
                          1,
                          data.description.length - 20
                        ) + `....`}
                      </p>
                    </div>
                  </div>
                  <p className="font-bold text-xl ">${data.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Cart;
