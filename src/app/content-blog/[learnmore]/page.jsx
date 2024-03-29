"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "../../../Styles/LearnMore/LearnMore.css";

const LearnMore = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [addFriendButton, setAddFriendButton] = useState(true);
  const [data, setData] = useState(null);

  const openToggle = () => {
    console.log("click");
    setIsOpen(!isOpen);
  };
  const addFriendHandler = () => {
    console.log("add friend on site ");
    setAddFriendButton(false);
  };
  const addFriendRequestingHandler = () => {
    console.log("friend request done");
    setAddFriendButton(true);
  };

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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cardContainer">
      <div className="cardContext">
        <div className="ww">
        <div className="cardSectionMain">
          <div className="cardContextSubMain">
          {data ? (
            <div className="div">
              {data.map((post) => {
                return (
                  <div key={post.id} className="cardContextMain ">
                    <div
                    
                      class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    >
                      <div className="flex justify-end px-4 pt-4">
                        <button
                          id="dropdownButton"
                          onClick={openToggle}
                          className="dropDownBtn inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                          type="button"
                        >
                          <span className="sr-only">Open dropdown</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 3"
                          >
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                          </svg>
                        </button>
                        {/* Dropdown menu */}
                        <div
                          id="dropdown"
                          className={`z-10 ${
                            isOpen ? "block" : "hidden"
                          }  text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                        >
                          <ul
                            className="py-2 dropDownList11"
                            aria-labelledby="dropdownButton"
                          >
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              >
                                Edit
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              >
                                Export Data
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="flex flex-col items-center pb-10">
                        <Image
                          src="/img1.jpg"
                          height={100}
                          width={100}
                          alt="not found"
                          className="imgCore"
                        />
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                          Bonnie Green
                        </h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">
                          Visual Designer
                        </span>
                        <div class="flex mt-4 md:mt-6">
                          <div>
                            {addFriendButton && (
                              <button
                                onClick={addFriendHandler}
                                class="addFriend inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                Add friend
                              </button>
                            )}
                            {!addFriendButton && (
                              <button
                                onClick={addFriendRequestingHandler}
                                class="cancelFriendRequest inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                Cancel
                              </button>
                            )}
                          </div>
                          <a
                            href="#"
                            class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                          >
                            Message
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>Loading ......</p>
          )}
        </div>

        </div>

        </div>
   
        
      </div>
    </div>
  );
};

export default LearnMore;
