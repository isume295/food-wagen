"use client";
import Image from "next/image";
import { Button } from "./blocks/Button";

const Header = () => {
  return (
    <div className="min-h-16 flex items-center justify-between p-1 bg-white px-20 fixed top-0 w-screen">
      <div>
        <Image
          src="/images/Logo.png"
          alt="food wagen logo"
          width={160}
          height={160}
        />
      </div>

      <div>
        <Button
          title="Add Meal"
          bgColor="bg-gradient-to-r from-[#FFBA26] to-[#FF9A0E]"
          textColor="text-white"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Header;
