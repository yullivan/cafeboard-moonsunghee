import "./create.page.scss";
export default function Page() {
  return (
    <div className="page create">
      <header>
        <h4>글 작성하기</h4>
      </header>
      <section>
        <form action="">
          <div className="post post-title">
            <label htmlFor="">제목</label><input type="text" placeholder="제목을 입력하세요."/>
          </div>
          <div className="post post-content">
            <label htmlFor="">내용</label><textarea placeholder="내용을 입력하세요."></textarea>
          </div>
          <div className="post post-btns">
            <button type="reset" className="normal">취소</button>
            <button type="submit" className="active">확인</button>
          </div>
        </form>
      </section>
    </div>
  );
}