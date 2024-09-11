// 두 페이지가 동시에 표시되도록
// 일반적으로 레이아웃 컴포넌트 함수는 자식 프로퍼티를 받음
// @ 뒤에 작성한 프로퍼티 이름과 동일한 이름을 가진 프로퍼티

export default function ArchiveLayout({ archive, latest }) {
  return (
    // 아카이브 페이지의 컨텐츠 출력
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
