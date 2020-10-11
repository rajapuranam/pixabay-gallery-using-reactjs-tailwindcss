import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Categories from "./components/Categories";

function App() {
  console.log("App component called!!");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("coffee");
  const pixabayurl = "https://pixabay.com/api/";

  useEffect(() => {
    axios
      .get(pixabayurl, {
        params: {
          // place your pixabay api key in .env file
          key: process.env.REACT_APP_PIXABAY_API_KEY,
          q: term,
          per_page: 100,
        },
      })
      .then((result) => {
        console.log(result.data);
        setImages(result.data.hits);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(`Error in getting data.. ${err}`);
      });
  }, [term]);

  return (
    <div className="container mx-auto">
      <p className="text-4xl text-center tracking-widest text-gray-900 mx-auto mt-16 font-mono">
        Stunning free images
      </p>
      <p className="text-5xl text-center tracking-widest text-teal-900 mx-auto font-serif">
        {" "}
        - PIXABAY
      </p>

      <ImageSearch searchText={(text) => setTerm(text)} />

      <Categories setTermFunction={setTerm}/>

      {!isLoading && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
      )}

      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
