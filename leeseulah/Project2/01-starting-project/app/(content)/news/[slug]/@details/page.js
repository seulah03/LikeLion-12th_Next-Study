import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }) {
  // params 프로퍼티는 NextJS에 의해 자동으로 컴포넌트에 전달
  const newsSlug = params.slug;
  // find 메서드: 해당 뉴스 항목의 슬러그로 뉴스 항목을 찾음
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
  // DUMMY_NEWS 배열에 있는 뉴스 항목 하나의 슬러그를 뉴스 슬러그와 비교
  // 두 슬러그가 일치하는 항목을 상세 페이지에 보여줌
  if (!newsItem) {
    notFound(); // NextJS에서 제공
  }

  return (
    /*
    <>
      <h1>News Detail Page</h1>
      <p>News ID: {newsId}</p>
    </>
    */
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
