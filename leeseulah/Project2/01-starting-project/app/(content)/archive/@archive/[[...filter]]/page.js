import Link from "next/link";
import NewsList from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";

// 해당 연도 엑세스는 NextJS에서 자동으로 받는 매개변수 프로퍼티 params 사용
export default function FilteredNewsPage({ params }) {
  // newsYear는 params.year에 액세스해 얻음

  const filter = params.filter;
  // console.log(filter);

  // ?: 정의된 경우에만 계속 진행
  // 배열에 처음으로 저장된 값에 액세스
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  const links = getAvailableNewsYears();

  // 해당 월이 없을 때 해당 연도를 반환
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsYears(selectedYear);
  }

  // 선택된 연도와 월이 있는지 검사
  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period.</p>;
  // 뉴스가 배열이고 길이가 0보다 큰지 검사
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  // +로 연도와 월을 숫자로 변환
  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid filter.");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`; // link의 값은 월 식별자

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
  /* const news = getNewsForYear(newsYear); // newsYear를 해당 함수에 전달해서 뉴스를 얻음

  return <NewsList news={news} />; // news가 뉴스 목록으로 전달
*/
}
