import ShopNavbar from "./NavbarShop";
import { FaTshirt } from "react-icons/fa";
import { GiSleevelessJacket } from "react-icons/gi";
import { IoShirtSharp } from "react-icons/io5";
import { GiTrousers } from "react-icons/gi";
import { PiBagFill } from "react-icons/pi";
import { GiRunningShoe } from "react-icons/gi";
import { CgMenuGridO } from "react-icons/cg";

export default function Dashboard() {
  const categoriesCollection = [
    {
      id: 1,
      icon: <FaTshirt />,
    },
    {
      id: 2,
      icon: <GiSleevelessJacket />,
    },
    {
      id: 3,
      icon: <IoShirtSharp />,
    },
    {
      id: 4,
      icon: <GiTrousers />,
    },
    {
      id: 5,
      icon: <PiBagFill />,
    },
    {
      id: 6,
      icon: <GiRunningShoe />,
    },
    {
      id: 7,
      icon: <CgMenuGridO />,
    },
  ];

  return (
    <main className="w-screen">
      <div>
        <ShopNavbar />
      </div>
      <div className="p-2 border-2 w-screen h-96 border-black">Banner</div>
      <div className="p-6">
        <ul className="flex justify-center items-center space-x-5">
          {categoriesCollection.map((item) => (
            <li
              key={item.id}
              id={item.id.toString()}
              className="bg-gray-300 w-16 flex justify-center items-center rounded-full h-16 hover:-translate-y-3 transition cursor-pointer duration-300 ease-out hover:bg-gray-400 shadow-sm hover:shadow-md text-5xl"
            >
              {item.icon}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
