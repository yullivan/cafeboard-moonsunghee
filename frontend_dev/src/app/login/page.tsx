import "./login.page.scss";


export default function Page() {
  
  return (
    <div className="page login">
      <header>
        <h4>LOG IN</h4>
      </header>
      <section>
        <form action="">
            <input type="email" placeholder="youremail@cafeboard.co.kr"/>
            <input type="password" placeholder="비밀번호를 입력하세요"/>
            <input type="submit" value="로그인"/>
        </form>
      </section>
    </div>
  );
}
