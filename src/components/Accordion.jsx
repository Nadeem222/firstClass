import React, { useState } from "react";

const Accordion = ({ options }) => {
  console.log(options);
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderItems = options.map((item, index) => {
    const isActive = index === activeIndex ? "active" : "";

    return (
      <div
        key={item.title}
        className="w-9/12 m-auto border-b border-gray-300 dark:bg-gray-700 dark:text-white"
      >
        <div
          className={`bg-gray-100 cursor-pointer p-4 flex justify-between items-center dark:bg-gray-700 hover:bg-gray-200 ${
            isActive ? "bg-gray-200" : ""
          }`}
          onClick={() => onTitleClick(index)}
        >
          <span>{item.title}</span>
          <span>{isActive ? "-" : "+"}</span>
        </div>
        <div
          className={`p-4 ${
            isActive ? "mt-4 block" : "hidden"
          } dark:bg-black dark:text-white`}
        >
          <p>{item.content}</p>
        </div>
      </div>
    );
  });
  return <div>{renderItems}</div>;
};

export default Accordion;
