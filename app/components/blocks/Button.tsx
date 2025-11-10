"use client";
import Image from "next/image";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  onClick: () => void;
  bgColor?: string;
  textColor?: string;
}

export const Button = ({
  title,
  leftIcon,
  rightIcon,
  textColor,
  bgColor,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${textColor} p-1.5 px-2 min-w-[120px] rounded-md`}
      {...rest}
    >
      <div className="flex items-center justify-center gap-2">
        {rightIcon && (
          <Image src={rightIcon} alt="search icon" width={20} height={20} />
        )}
        <span className="text-[16px] font-bold">{title}</span>
        {leftIcon && (
          <Image src={leftIcon} alt="search icon" width={20} height={20} />
        )}
      </div>
    </button>
  );
};
