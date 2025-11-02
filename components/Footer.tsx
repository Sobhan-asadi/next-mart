import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-8 md:mb-0 md:max-w-xl">
              <h2 className="mb-2 text-3xl font-bold text-white">
                Join or newsletter
              </h2>
              <p className="text-white/80">
                Get the latest products, promotions, and tech news delivered to
                your inbox.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="focus:ring-honey min-w-60 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-white transition-all focus:ring-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-honey hover:bg-honey/90 flex transform cursor-pointer items-center justify-center rounded-lg px-6 py-3 font-medium text-white transition-all hover:scale-105"
                >
                  Subscribe <i className="bx bx-envelope ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* main footer content */}
      <div className="mx-auto max-w-7xl py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="mb-6 flex items-center">
              <div className="bg-honey text-primary mr-2 flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold">
                NM
              </div>
              <span className="text-primary text-xl font-bold">
                Next<span className="text-honey">Mart</span>
              </span>
            </Link>
            <p className="mb-6 text-gray-600">
              Elevating your tech experience with premium products and
              exceptional service.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "youtube"].map(
                (platform) => (
                  <a
                    href="#"
                    key={platform}
                    className="group hover:bg-primary flex h-9 w-9 transform items-center justify-center rounded-full bg-gray-100 hover:scale-110"
                  >
                    <i
                      className={`bx bxl-${platform} text-xl text-gray-500 transition-colors group-hover:text-white`}
                    ></i>
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
