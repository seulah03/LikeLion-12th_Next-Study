// 찾을 수 없는 페이지를 설정하도록 돕는 파일
// 페이지나 리소스를 찾을 수 없을 때 화면에 표시될 콘텐츠를 설정

export default function NotFoundPage() {
  return (
    <div id="error">
      <h1>Not Found!</h1>
      <p>The requested resource could not be found!</p>
    </div>
  );
}
