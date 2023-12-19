import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10">
      <div className="bg-white p-7 rounded-2xl shadow-sm ">
        <span className="font-semibold text-2xl">select item</span>
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
        <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto">Checkout</div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-sm "></div>
      <div className="bg-white p-10 rounded-2xl shadow-sm "></div>
      <div className="bg-white p-10 rounded-2xl shadow-sm "></div>
    </div>
  );
}
