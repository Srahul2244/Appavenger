import React from "react";

const Imagediv = () => {
  return (
    <div>
      <div className="flex px-10 py-10 gap-4 ml-10">
        <div>
          <h4 className="italic text-3xl text-slate-800 mb-4">Fiction Books</h4>
          <img
            src="https://www.bookswagon.com/images/promotionimages/web/nonfictionbooksWeb.jpg?v=2.0"
            alt="special offer"
          />
        </div>
        <div>
          <h4 className="italic text-3xl text-slate-800 mb-4">
            Manga Mania Best Sellers
          </h4>
          <img
            src="https://www.bookswagon.com/images/promotionimages/web/4_mangamaniaWeb.jpg?v=2.0"
            alt="special"
          />
        </div>
      </div>
    </div>
  );
};

export default Imagediv;
