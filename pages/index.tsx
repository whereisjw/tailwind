import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-slate-400 py-20 px-20 grid gap-10 min-h-screen">
      <div className="bg-white p-7 rounded-2xl shadow-sm sm:bg-red-400 md:bg-teal-400 lg:bg-indigo-400 xl:bg-yellow-500 2xl:bg-pink-500">
        <span className="font-semibold text-2xl">select item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div className="first:bg-blue-500 last:bg-blue-500">
              <span className="flex justify-between my-2 ">gray chair</span>
              <span></span>
            </div>
          ))}
        </ul>
        <div className="flex justify-between my-2">
          <span className="text-gray-500"> gray chair</span>
          <span>18000원</span>
        </div>
        <div className="flex justify-between my-2">
          <span className="text-gray-500"> gray chair</span>
          <span>18000원</span>
        </div>
        <div className="mt-2 pt-2 border-t-2 border-dashed justify-between">
          <span>합계</span>
          <span>36000원</span>
        </div>
        <button
          className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto hover:bg-teal-500 hover:text-black
        active:bg-yellow-500 focus:bg-red-500">
          Checkout
        </button>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-sm group">
        <div className="bg-blue-500 p-6">
          <span className="rounded-3xl text-white text-2xl pb-14 relative -top-14">
            프로필
          </span>
        </div>
        <div className="flex justify-between">
          <div className="h-24 w-24 bg-red-400 rounded-full flex flex-col group-hover:bg-blue-500 transition-colors">
            <span className="text-sm text-gray-500">orders</span>
            <span className="font-medium">340</span>
          </div>
        </div>
        <div>
          <span className="text-sm text-gray-500">spent</span>
          <span className="font-medium">340</span>
        </div>
        <div className="relative flex flex-col items-center mt-5">
          <span className="text-lg font-medium">토니</span>
          <span>미국</span>
        </div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-sm "></div>

      {/*  */}
      <div className="bg-white p-10 rounded-3xl shadow-sm ">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">❤️</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium mb-1.5 text-xl">swoon lounge</span>
          <span className="text-xs text-gray-500">chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 transition  bg-opacity-80 focus:ring-2 ring-offset-2 ring-yellow-500"></button>
              <button className="w-5 h-5 rounded-full bg-indigo-500"></button>
              <button className="w-5 h-5 rounded-full bg-teal-500"></button>
            </div>
            <div className="flex items-center space-x-5">
              <button className="p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-medium text-2xl">$450</span>
          <button className="bg-blue-500 text-center py-2 px-8 text-sm text-white rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
      <hr />
      <hr />
      <form
        className="flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-zinc-500"
        action="">
        <input
          type="text"
          placeholder="username"
          required
          className="peer required:bg-teal-500 invalid:bg-red-500 valid:bg-blue-500"
        />
        <span className="hidden peer-hover:block peer-invalid:text-red-500">
          this input is invalid
        </span>
        <input type="password" placeholder="password" />
        <input type="submit " value="로그인" className="bg-white text-center" />
      </form>
      <hr />
      <div className="flex flex-col space-y-2 p-5">
        {/*    <details className="select-none open:text-white open:bg-indigo-500">
          <summary className="select-none cursor-pointer">what is my fav. food.</summary>
          <span className="selection:bg-indigo-500">김치</span>
        </details> */}
        {/*       <ul className="list-decimal marker:text-teal-500">
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul> */}
        <input
          type="file"
          className="transition-colors file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-500 file:hover:border-2 file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-400"
        />
        <p className="first-letter:text-7xl first-letter:hover:text-purple-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates facilis sit, vel dignissimos suscipit consequatur vitae perspiciatis, veritatis earum repellendus numquam provident! Reiciendis consequatur, animi harum porro earum voluptas!</p>
      </div>
    </div>
  );
}
