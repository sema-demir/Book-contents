import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const {state} = useLocation()



  return (
    <div className="container py-6">
      <img
        className="img-fluid rounded mx-auto d-block"
        src="https://media.giphy.com/media/5QJd1IC6yBLumMhmtu/giphy.gif?cid=790b7611dbdk9wg8pzz2cr4p0vuj9pw5w3z8abso2d5ht4vw&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt=""
      />
      <p className="text-center fs-3 my-4">
        Üzgünüz, aradığınız sayfa bulunamadı
      </p>
      <div className="d-flex justify-content-center">
        <Link  className="bg-primary text-white p-2 rounded" to={"/"}>
          Anasayfa
        </Link>

      </div>
      {state && (
        <p className="fs-3 text-center my-4">
          Hata Kodunuz
          <span className="badge bg-warning mx-4"> {state} </span>
        </p>
      )}
      
    </div>
  );
};

export default NotFound;
