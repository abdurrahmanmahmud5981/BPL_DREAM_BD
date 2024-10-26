/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Player from "../Player/Player";
import Newsletter from "../Newsletter/Newsletter";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const PlayerLayout = ({ coins, setCoins }) => {
  const [allPlayer, setAllPlayer] = useState([]);
  const [playerSelected, setplayerSelected] = useState([]);
  const [isActive, setIsActive] = useState(false);

  // load all players
  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setAllPlayer(data));
  }, []);

  // add players
  const seletNewPlayer = (playerId, name, imageURL, role, biddingPrice) => {
    // chacking coins value
    if (coins < biddingPrice) {
      toast.warning("Not enough coins to bid this player!", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
      return;
    }
    // checking selected player length
    if (playerSelected.length >= 6) {
      toast.warning("Maximum 6 players can be selected.", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
      return;
    }

    // check if player already selected or not
    const isPlayerSelected = playerSelected.some(
      (p) => p.playerId === playerId
    );
    if (isPlayerSelected) {
      toast.warning("This player is already selected!", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
      return;
    }
    toast.success(` You Have Selected ${name}!`, {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });
    setplayerSelected([
      ...playerSelected,
      { playerId, name, imageURL, role, biddingPrice },
    ]);
    setCoins(coins - biddingPrice);
  };

  // remove player
  const removePlayer = (playerId, biddingPrice) => {
    setCoins(coins + biddingPrice);
    setplayerSelected(playerSelected.filter((p) => p.playerId !== playerId));
  };
  return (
    <main className="my-16 text-primary relative">
      <section className="mb-80">
        {/* header of player */}
        <header className="flex justify-between gap-3 items-center">
          <h2 className="text-xl sm:text-2xl font-bold ">
            {!isActive
              ? "Available Players"
              : `Selected Player (${playerSelected.length}/6)`}
          </h2>

          <div className="text-base font-bold flex bg-primary/10 rounded-xl h-fit">
            <button
              onClick={() => setIsActive(false)}
              className={`${
                !isActive && "bg-secondary"
              }  border-none btn rounded-r-none p-3 text-xs sm:text-base px-5`}
            >
              Available
            </button>
            <button
              onClick={() => setIsActive(true)}
              className={`${
                isActive && "bg-secondary"
              }  border-none btn rounded-l-none p-3 text-xs sm:text-base`}
            >
              Selected({playerSelected.length})
            </button>
          </div>
        </header>
        {/* player content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 my-7">
          {isActive ? (
            <>
              {playerSelected.map((p, idx) => (
                <SelectedPlayer key={idx} p={p} removePlayer={removePlayer} />
              ))}
              {playerSelected.length > 0 && (
                <div className="max-w-fit  font-bold text-base border  p-1 rounded-lg ">
                  <button
                    onClick={() => setIsActive(false)}
                    className="btn bg-secondary border-none"
                  >
                    Add More Player
                  </button>
                </div>
              )}
            </>
          ) : (
            allPlayer.map((player, idx) => (
              <Player
                key={idx}
                player={player}
                seletNewPlayer={seletNewPlayer}
              />
            ))
          )}

          {/* <SelectedPlayer /> */}
        </div>
      </section>
      {/* newsletter */}
      <section className=" absolute -bottom-[490px] sm:-bottom-[500px] w-full">
        <div className=" border rounded-xl p-2 sm:p-6 bg-stone-50/20   mx-auto bg-blend-screen  ">
          <Newsletter />
        </div>
      </section>
    </main>
  );
};

export default PlayerLayout;
