import React from "react";

const Footer = () => {
  return (
    <div>
      <hr className=" border-slate-500  border-[0.5px] mt-4 w-[90%] m-auto" />

      <footer className="flex justify-between mt-6 border-[1px] border-slate-400 px-20 py-10 ml-10 ">
        <div>
          <p className="text-xl text-red-500">Company </p>
          <p className="text-lg text-slate-900 mt-1">About Us</p>
          <p className="text-lg text-slate-900 mt-1">Career Blog </p>
          <p className="text-lg text-slate-900 mt-1">Contact Us</p>
        </div>
        <div>
          <p className="text-xl text-red-500">Policies</p>
          <p className="text-lg text-slate-900 mt-1">Privacy Policies</p>
          <p className="text-lg text-slate-900 mt-1">Secure Shopping </p>
          <p className="text-lg text-slate-900 mt-1">Copyright Policy</p>
        </div>
        <div>
          <p className="text-xl text-red-500">Help</p>
          <p className="text-lg text-slate-900 mt-1">Payment</p>
          <p className="text-lg text-slate-900 mt-1">Shipping </p>
          <p className="text-lg text-slate-900 mt-1">Return FAQ</p>
        </div>
        <div>
          <p className="text-xl text-red-500">Misc</p>
          <p className="text-lg text-slate-900 mt-1">Affiliate</p>
          <p className="text-lg text-slate-900 mt-1">Sitemap</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
