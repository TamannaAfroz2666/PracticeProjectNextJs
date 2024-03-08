"use client";

import React, { useState, useEffect } from "react";
import "../../Styles/BlogContent.css";
import Image from "next/image";
import Link from "next/link";

function BlogContent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log("cat", response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } 
      catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  async function removeClick(id) {
    const newItems = data.filter((item) => item.id !== id);
    setData(newItems);
  }

  return (
    <div className="containerSection">
      <div className="contentsContainer1">
        
        <div>
          {data ? (
           <div className="contentsContainer2">
              {data.map((post) => {
                return(
                  <div  key={post.id} className="contentsContainer">
                    <h5 className="text-sm font-normal text-slate-900 p-4"> DEV community</h5>
                     <h1
                 
                  className=" text-xl font-bold pl-12 pb-8 pr-4 pt-4 hover:text-sky-600"
                >
                  {post.title}
               
                </h1>
                <div className="jj">
                <div className="infoContainer">
        
          <p className="descriptionBlog text-base pl-12 pr-12 pb-4 leading-6 tracking-wide text-justify ">
            {post.body}
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
              <Link href={{
                pathname:"/content-blog/learn-more",
                query:{
                  isVisit: true

                }
                
                
                }}  prefetch={true}
              >
              <button
                type="button"
                class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-white rounded-lg border border-blue-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Learn more!
              </button>
              </Link>
            </div>
            <div className="removeBtn">
              <button
              onClick={()=> removeClick(post.id)}
                type="button"
                class="py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none bg-white rounded-lg border border-blue-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
                </div>

                  </div>
                )
                })}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>

       
      </div>
      
    </div>
  );
}

export default BlogContent;
