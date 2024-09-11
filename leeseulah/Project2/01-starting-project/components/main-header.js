/*
// MainHeader 컴포넌트 함수
import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
*/
import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>

    /*
    <>
      <h1>NewsPage</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </> // JSX 요소로 매핑: 개별 뉴스 항목을 가져옴
    // 뉴스 항목마다 li태그를 newsItem.id키와 함께 출력
    // 동적으로 주입된 값 ${newsItem.slug}, ${newsItem.image}
    // 동적으로 구성된 문자열 `/image/news`
 */
  );
}
