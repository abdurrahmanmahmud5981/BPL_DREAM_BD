/* eslint-disable react/prop-types */
import banner from "../../assets/banner-main.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Banner = ({ addCoins }) => {


  return (
    <section className="flex flex-col items-center justify-center text-center py-20 my-12 gap-4  bg-banner-bg bg-no-repeat bg-black bg-cover text-white rounded-2xl px-3">
      <div>
        <img src={banner} alt="Banner Of BPL Dream" />
      </div>
      <h1 className="text-2xl sm:text-4xl font-bold">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className=" text-xl sm:text-2xl font-medium text-white/70">
        Beyond Boundaries Beyond Limits
      </p>
      <div className="  font-bold text-base border border-secondary p-1 rounded-lg hover:border-white">
        <div
          onClick={() => {
            toast.success("You've claimed 9,000 coins!", {
              position: "top-center",
              autoClose: 2000,
            })
            addCoins();
          }}
          className="btn bg-secondary border-none"
        >
          <span>Claim Free Credit</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
