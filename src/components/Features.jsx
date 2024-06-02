import featuredImg1 from "../assets/images/10.png";
import featuredImg2 from "../assets/images/12.png";
import featuredImg3 from "../assets/images/14.png";

export default function Features() {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto" id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/4">
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
            Why are better than others?
          </h3>
          <p className="text-base text-tartiary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            sit saepe, cum minima quod aliquid deserunt laudantium fugiat
            officia adipisci eos cupiditate delectus id deleniti earum neque
            molestias hic omnis!
          </p>
        </div>

        <div className="w-full lg:w-3/4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img
                  src={featuredImg1}
                  alt=""
                  className="w-full h-60 md:h-48 sm:h-36 h-24  " // Menambahkan kelas max-w-full
                />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Lorem ipsum dolor sit amet.
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
              <div>
                <img
                  src={featuredImg2}
                  alt=""
                  className="w-full h-60 md:h-48 sm:h-36 h-24" // Menambahkan kelas max-w-full
                />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Lorem ipsum dolor sit amet.
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img
                  src={featuredImg3}
                  alt=""
                  className="w-full h-60 md:h-48 sm:h-36 h-24 " // Menambahkan kelas max-w-full
                />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Lorem ipsum dolor sit amet.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
