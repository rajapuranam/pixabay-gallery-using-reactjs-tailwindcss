import React from "react";

const Categories = ({setTermFunction}) => {
  var categoryList = [
    "All Categories",
    "backgrounds",
    "fashion",
    "nature",
    "science",
    "education",
    "feelings",
    "health",
    "people",
    "religion",
    "places",
    "animals",
    "industry",
    "computer",
    "food",
    "sports",
    "transportation",
    "travel",
    "buildings",
    "business",
    "music",
  ];

  return (
    <>
      <section class="container mx-auto px-6 my-1 flex flex-wrap -m-4 mb-10">
        {categoryList.map((category) => (
          <button class="mx-1 my-2 flex items-center px-4 py-2 rounded-lg border-teal-800 border-2 shadow-xs cursor-pointer hover:bg-teal-800 hover:text-gray-100 focus:bg-teal-800 focus:text-gray-100 focus:outline-none" onClick={()=>{
            var cc = category == "All Categories" ? "" : category;
            setTermFunction(cc)
          }}>
            <p class="text-base font-medium capitalize">{category}</p>
          </button>
        ))}
      </section>
    </>
  );
};

export default Categories;
