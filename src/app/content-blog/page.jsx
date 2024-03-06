import React from "react";
import "../../Styles/BlogContent.css";
import Image from "next/image";


const BlogContent = () => {
  return (
    <div className=" ">
      <div className="contentsContainer">
        <h5 className="sortTitle"> DEV community</h5>
        <h1 className="titleBlog text-xl font-bold pl-12 pb-8"> It is Time for we_coded 2024!</h1>
        <p className="descriptionBlog text-base pl-12 pr-12 pb-4 leading-6 tracking-wide text-justify ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero saepe vitae quam sint expedita, perspiciatis necessitatibus fuga. Architecto reprehenderit ipsam quam velit cumque possimus laborum? Id distinctio molestiae quam pariatur suscipit corporis quod doloremque commodi repudiandae, est sit animi at vel quos? Nostrum, error fugiat dignissimos ullam architecto recusandae officiis.</p>
       
         <Image
      src="/img1.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />

      </div>
    </div>
  );
};

export default BlogContent;
