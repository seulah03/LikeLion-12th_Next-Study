import "../globals.css";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({ children }) {
  return (
    // 본문의 콘텐츠가 될 자식 출력값 {children}을 <MainHeader/>로 감싸줌
    // div 태그로 감싸 ID 부여해 css 개선
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
