import { FaRightLeft } from "react-icons/fa6";
const page = () => {
  return (
    <div className="min-h-screen w-80 m-auto">
      <h1 className="text-center pt-12">Currency converter</h1>
      <div className="mt-8 inline-flex gap-12">
        <input
          type="number"
          id="first_name"
          className=" w-[140px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
            dark:focus:border-blue-500"
          placeholder="$"
        />
        <span>
    
          <FaRightLeft size={20} />
        </span>
        <div className="bg-gray-300 w-[140px] h-[40px]">
          <span id="tk_showing" >
            Tk:
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
