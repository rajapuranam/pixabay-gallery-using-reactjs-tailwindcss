import React, { useState } from "react";
import { IconContext } from "react-icons";
import { BsDownload } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";


const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src={image.webformatURL}
        alt="image"
        className="w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
        onClick={() => setShowModal(true)}
      />
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transform transition duration-500 ease-in-out hover:scale-125 opacity-0 hover:opacity-100"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-4 mx-auto max-w-6xl">
              <img src={image.webformatURL} alt="image" className="w-full" />
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"> </div>
        </>
      ) : null}
      <div className="px-6 py-4">
        <div className="font-bold text-teal-700 text-xl mb-2 font-serif">
           - {image.user}{" "}
        </div>{" "}
        <ul className="mx-16">
        <li>
            <IconContext.Provider
              value={{size: "1.5rem", color:"black"}}
            >
                <div className="flex mb-1">
                <div className="flex-1"><GrFormView /></div> {image.views}{" "}
                <div className="flex-1"> {image.views}{" "}</div>
                </div>
            </IconContext.Provider>
          </li>{" "}
          
          <li>
            <IconContext.Provider
              value={{size: "1.5rem", color:"black"}}
            >
                <div className="flex mb-1">
                <div className="flex-1"><BsDownload /></div> {image.downloads}{" "}
                <div className="flex-1"> {image.downloads}{" "}</div>
                </div>
            </IconContext.Provider>
          </li>{" "}
          <li>
            <IconContext.Provider
              value={{size: "1.5rem", color:"black"}}
            >
                <div className="flex mb-1">
                <div className="flex-1"><AiOutlineLike /></div> {image.likes}{" "}
                <div className="flex-1"> {image.likes}{" "}</div>
                </div>
            </IconContext.Provider>
          </li>{" "}
          
        </ul>{" "}
      </div>{" "}
      <div className="px-6 py-4">
        {" "}
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
