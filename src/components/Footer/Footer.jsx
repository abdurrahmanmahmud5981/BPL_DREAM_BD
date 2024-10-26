import footerLogo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#06091A] text-white pt-56">
        <div className=" flex justify-center items-center pb-16">
          <img src={footerLogo} alt="" />
        </div>
        <footer className="footer  w-11/12 max-w-screen-2xl mx-auto justify-between pb-10">
          <nav className="max-w-sm">
            <h6 className="text-xl font-semibold">Apout Us</h6>
            <p className="text-slate-200/70">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </nav>
          <nav>
            <h6 className="text-xl font-semibold">Quick Links</h6>
            <ul className="list-disc list-inside text-slate-200/70 space-y-2">
              <li>
                <a className="link link-hover">Home</a>
              </li>
              <li>
                <a className="link link-hover">Services</a>
              </li>
              <li>
                <a className="link link-hover">Services</a>
              </li>
              <li>
                <a className="link link-hover">About</a>
              </li>
              <li>
                <a className="link link-hover">Contact</a>
              </li>
            </ul>
          </nav>
          <form className="max-w-md">
            <h6 className="text-xl font-semibold ">Subscribe</h6>
            <fieldset className="form-control max-w-80">
              <label className="label">
                <span className="label-text text-slate-200/70">
                  Subscribe to our newsletter for the latest updates.
                </span>
              </label>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 sm:inline-flex sm:join">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered join-item"
                />
                <button className="bg-gradient-to-r from-pink-300 to-yellow-300 text-black py-3 px-6 rounded-xl font-semibold shadow-md transition duration-300 ease-in-out hover:shadow-lg join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
       
        <div className="footer footer-center p-4 border-t border-t-white/15 text-white/60 ">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved By Abdur
              Rahman Mahmud
            </p>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Footer;
