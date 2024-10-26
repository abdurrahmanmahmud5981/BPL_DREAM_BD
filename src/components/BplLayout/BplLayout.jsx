import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navber from "../Navber/Navber";
import PlayerLayout from "../PlayerLayout/PlayerLayout";
const BplLayout = () => {
  const [coins, setCoins] = useState(0);

  // add coins
  const addCoins = () => {
    setCoins(coins + 9000);
  };

  //

  // render BPL Layout
  return (
    <>
      <Navber coins={coins} />
      
      <div className="w-11/12 mx-auto max-w-screen-2xl py-2">
        {/* BPL Layout Banner */}
        <Banner addCoins={addCoins} />
        {/* Player Layout */}
        <PlayerLayout coins={coins} setCoins={setCoins} />
      </div>
      <ToastContainer />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default BplLayout;
