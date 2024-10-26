/* eslint-disable react/prop-types */
import "react-toastify/dist/ReactToastify.css";

const Player = ({ player, seletNewPlayer }) => {
  const {
    playerId,
    name,
    imageURL,
    role,
    biddingPrice,
    country,
    bowlingType,
    battingType,
  } = player;

  return (
    <div className="card card-compact bg-base-100 w- shadow p-1">
      <figure className="p-5">
        <img
          className="w-full  rounded-lg h-96 object-cover"
          src={imageURL}
          alt={`image of ${name}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex items-center">
          <i className="fa-solid fa-user rounded-full bg-gray-100 h-10 w-10 p-2 flex items-center justify-center"></i>
          <span>{name}</span>
        </h2>
        {/*  */}
        <div className="flex justify-between items-center font-normal ">
          <span className="flex text-primary/70 gap-3 items-center">
            <i className="fa-solid fa-flag"></i>
            <span>{country}</span>
          </span>
          <span className="px-4 py-2 rounded-lg bg-primary/5 text-sm ">
            {role}
          </span>
        </div>
        {/*  */}
        <div className="divider my-1"></div>
        {/*  */}
        <h4 className=" font-bold">Rating</h4>
        <div className="flex justify-between items-center gap-2">
          <span className="font-semibold text-primary">
            {battingType || "Not Found"}
          </span>
          <span className="font-normal text-primary/70">
            {bowlingType || "Not Found"}
          </span>
        </div>
        {/*  */}
        <div className="flex justify-between items-center text-primary gap-2">
          <span className="font-semibold">Price: ${biddingPrice}</span>
          <div
            onClick={() =>
              seletNewPlayer(playerId, name, imageURL, role, biddingPrice)
            }
            className="btn px-4 py-3 bg-transparent min-h-full h-full font-normal border-primary/10"
          >
            <button>Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
