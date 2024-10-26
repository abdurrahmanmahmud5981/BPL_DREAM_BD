const Newsletter = () => {
  return (
    <div className="object-contain  flex flex-col justify-center items-center text-center gap-3 bg-banner-bg bg-no-repeat bg-cover py-20 rounded-xl bg-white px-2 border">
      <h3 className="text-3xl font-bold">Subscribe to our Newsletter</h3>
      <p className="text-lg font-medium text-primary/70">
        Get the latest updates and news right in your inbox!
      </p>

      <div className="flex items-center gap-2 flex-col sm:flex-row">
        <label className="input input-bordered flex items-center gap-2">
          <i className="fa-solid fa-envelope"></i>
          <input type="text" className="grow" placeholder="Email" />
        </label>
        <button className="bg-gradient-to-r from-pink-300 to-yellow-300 text-black py-3 px-6 rounded-xl font-semibold shadow-md transition duration-300 ease-in-out hover:shadow-lg">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
