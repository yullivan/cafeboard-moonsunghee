import Link from "next/link";
import { TbFileSpreadsheet, TbWriting } from "react-icons/tb";

export default function GlobalFooter() {
  return (
    <div className="globalFooter">
      <nav>
        <ul>
          <li>
            <Link href={"/article/list"}>
              <TbFileSpreadsheet/>
              <span>글목록</span>
            </Link>
          </li>
          <li>
            <Link href={"/article/create"}>
              <TbWriting/>
              <span>글쓰기</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
