import Link from "next/link"
import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight } from "react-icons/fi";

export default function Pagenation() {
  return (
    <div className="pagination">
      <button><FiChevronsLeft/></button>
      <button><FiChevronLeft/></button>
      <ul>
        <li><Link href={""}>{"1"}</Link></li>
        <li><Link href={""}>{"2"}</Link></li>
        <li><Link href={""}>{"3"}</Link></li>
        <li><Link href={""}>{"4"}</Link></li>
        <li><Link href={""}>{"5"}</Link></li>
        <li><Link href={""}>{"6"}</Link></li>
      </ul>
      <button><FiChevronRight/></button>
      <button><FiChevronsRight/></button>
    </div>
  );
}