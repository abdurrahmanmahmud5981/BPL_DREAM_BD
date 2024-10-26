/* eslint-disable react/prop-types */
import { toast } from "react-toastify";

const SelectedPlayer = ({ p, removePlayer }) => {
  const { playerId, name, imageURL, role, biddingPrice } = p;
  return (
    <div className="col-span-full space-y-6">
      <div className="flex justify-between items-center border p-5 rounded-lg">
        {/*  */}
        <div className="flex gap-3">
          <img src={imageURL} alt="player image" className="w-14 rounded-md" />
          <div className="">
            <h3 className="text-xl font-semibold text-primary">{name}</h3>
            <p className="text-sm font-normal text-primary/60 ">{role}</p>
            <p className="font-semibold text-sm mt-2">Price: ${biddingPrice}</p>
          </div>
        </div>
        {/*  */}
        <div className="">
          <button
            onClick={() => {
              removePlayer(playerId, biddingPrice);
              toast.warning(` You Have Deleted ${name}!`, {
                position: "top-center",
                autoClose: 2000,
                theme: "dark",
              });
            }}
            className="text-error"
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
        {/*  */}
      </div>
      {/*  */}
    </div>
  );
};

export default SelectedPlayer;
