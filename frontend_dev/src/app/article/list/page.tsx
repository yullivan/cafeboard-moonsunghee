import Link from 'next/link';
import './list.page.scss';
import Pagenation from '@/components/Pagination';
export default function Page() {
  return (
    <div className="page list">
      <header>
        <h4>목록</h4>
      </header>
      <section>
        <div className="list-table">
          <ul className="table-body">
            <li className="table-tr">
              <div className="table-td">
                <h5 className="article-title">{"프론트개발과 백개발"}</h5>
                <div className="article-info">
                  <span>{"홍길동"}</span>
                  <span>| {"17:51"}</span>
                  <span>| 조회 {"32"}</span>
                  <span>| 추천 {"3"}</span>
                </div>
              </div>
              <div className="cm-count">
                <span>{"0"}</span>
              </div>
              <Link href={""} className='article-link'></Link>
            </li>
            <li className="table-tr">
              <div className="table-td">
                <h5 className="article-title">자바 + 스프링 6</h5>
                <div className="article-info">
                  <span className="">홍길동</span>
                  <span className="">17:51</span>
                  <span className="">조회 {"32"}</span>
                  <span className="">추천 {"3"}</span>
                </div>
              </div>
              <div className="cm-count">
                <span>5</span>
              </div>
            </li>
            <li className="table-tr">
              <div className="table-td">
                <h5 className="article-title">{"프론트개발과 백개발"}</h5>
                <div className="article-info">
                  <span>{"홍길동"}</span>
                  <span>| {"17:51"}</span>
                  <span>| 조회 {"32"}</span>
                  <span>| 추천 {"3"}</span>
                </div>
              </div>
              <div className="cm-count">
                <span>{"0"}</span>
              </div>
              <Link href={""} className='article-link'></Link>
            </li>
            <li className="table-tr">
              <div className="table-td">
                <h5 className="article-title">{"프론트개발과 백개발"}</h5>
                <div className="article-info">
                  <span>{"홍길동"}</span>
                  <span>| {"17:51"}</span>
                  <span>| 조회 {"32"}</span>
                  <span>| 추천 {"3"}</span>
                </div>
              </div>
              <div className="cm-count">
                <span>{"0"}</span>
              </div>
              <Link href={""} className='article-link'></Link>
            </li>
            <li className="table-tr">
              <div className="table-td">
                <h5 className="article-title">{"프론트개발과 백개발"}</h5>
                <div className="article-info">
                  <span>{"홍길동"}</span>
                  <span>| {"17:51"}</span>
                  <span>| 조회 {"32"}</span>
                  <span>| 추천 {"3"}</span>
                </div>
              </div>
              <div className="cm-count">
                <span>{"0"}</span>
              </div>
              <Link href={""} className='article-link'></Link>
            </li>
            <li className="table-tr">
              <div className="table-td">
                <h5 className="article-title">{"프론트개발과 백개발"}</h5>
                <div className="article-info">
                  <span>{"홍길동"}</span>
                  <span>| {"17:51"}</span>
                  <span>| 조회 {"32"}</span>
                  <span>| 추천 {"3"}</span>
                </div>
              </div>
              <div className="cm-count">
                <span>{"0"}</span>
              </div>
              <Link href={""} className='article-link'></Link>
            </li>
          </ul>
        </div>
        <Pagenation/>
      </section>
    </div>
  );
}