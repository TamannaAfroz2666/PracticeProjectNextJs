import React from "react";
import "../../Styles/BlogContent.css";
import Image from "next/image";

const BlogContent = () => {
  return (
    <div className=" ">
      <div className="contentsContainer">
        <h5 className="sortTitle"> DEV community</h5>
        <h1 className="titleBlog text-xl font-bold pl-12 pb-8">
          {" "}
          It is Time for we_coded 2024!
        </h1>
        <p className="descriptionBlog text-base pl-12 pr-12 pb-4 leading-6 tracking-wide text-justify ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe
          vitae quam sint expedita, perspiciatis necessitatibus fuga. Architecto
          reprehenderit ipsam quam velit cumque possimus laborum? Id distinctio
          molestiae quam pariatur suscipit corporis quod doloremque commodi
          repudiandae, est sit animi at vel quos? Nostrum, error fugiat
          dignissimos ullam architecto recusandae officiis.
        </p>

        <Image
          src="/img1.jpg"
          width={670}
          height={500}
          alt="Picture of the author"
          className="imgLoad"
        />
        <div className="btnGroup">
          <div className="learnMore">
            <button
              type="button"
              class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-white rounded-lg border border-blue-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Learn more!
            </button>
          </div>
          <div className="removeBtn">
            <button
              type="button"
              class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-white rounded-lg border border-blue-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
