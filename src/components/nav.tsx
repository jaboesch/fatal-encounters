import React from "react";
import Link from "next/link";

type Props = {};

const Nav = (props: Props) => {
  const linkStyles =
    "font-exa font-extralight animated-underline text-base md:text-lg text-black/70 tracking-wide";
  return (
    <div className="mx-auto mt-[30px] px-2 md:px-10 card rounded-full">
      <div className="h-[60px] sm:h-[75px] items-center justify-center mx-auto w-full flex flex-row gap-4 sm:gap-5 md:gap-7 lg:gap-10 ease-in-out transition">
        <Link href="/" className={linkStyles}>
          Fight
        </Link>
        <Link href="/tree" className={linkStyles}>
          Tree
        </Link>
        <Link href="/all" className={linkStyles}>
          All
        </Link>
      </div>
    </div>
  );
};

export default Nav;
