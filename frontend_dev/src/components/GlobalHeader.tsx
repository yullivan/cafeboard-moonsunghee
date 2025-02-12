"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaBars, FaBarsStaggered, FaChevronLeft } from "react-icons/fa6";

export default function GlobalHeader() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const closeMenu = () => setIsOpen(false);
  console.log(isOpen)
  console.log(`p: ${pathName}`)
  return (
    <>
      <div className="globalHeader">
        <header>
          <div className="menu menu-back">
          {
            pathName === "/" || 
            <button onClick={() => router.back()}><FaChevronLeft/></button> 
          }
          </div>
          
          <h1 className="logo"  onClick={closeMenu}><Link href={"/"}>LOGO<span>HERE</span></Link></h1>
          
          <div className="menu menu-bars">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaBarsStaggered className="active"/> : <FaBars className="normal"/>}
            </button>
          </div>
        </header>
      </div>
      {isOpen && (
      <div className="globalMenu">
        <menu>
          <li onClick={closeMenu}><Link href={"/login"} >로그인</Link></li>
          <li><Link href={"/"}>로그아웃</Link></li>
        </menu>
      </div>
      )}
    </>
  );
}
