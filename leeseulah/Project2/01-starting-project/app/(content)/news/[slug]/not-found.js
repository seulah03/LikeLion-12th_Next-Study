// 기사나 뉴스 항목을 찾을 수 없을 때 보여줄 폴백 콘텐츠 설정

export default function NewsNotFoundPage() {
  return (
    <div id="error">
      <h1>Not Found!</h1>
      <p>Unfortunately, we could not find the requested article.</p>
    </div>
  );
}
