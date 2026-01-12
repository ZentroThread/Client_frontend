import coupleImg from "../../assets/items/nilame3.jpeg";

export default function TraditionalAttire() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div>
          <h2 className="text-5xl font-serif font-bold text-red-900">
            Elegant Traditional<br />Attire
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            Discover our premium collection of bridal sarees, nilame suits,
            and traditional jewelry
          </p>

          <div className="mt-8 flex gap-4">
            <button
                onClick={() => {
                    document
                        .getElementById("collections")
                        ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-red-800 text-white px-8 py-3 rounded-lg"
            >
            🛍 Shop Now
            </button>


            <button className="bg-green-500 text-white px-8 py-3 rounded-lg">
              💬 Chat with Us
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img
            src={coupleImg}
            alt="Traditional Couple"
            className="max-h-105"
          />
        </div>

      </div>
    </section>
  );
}
