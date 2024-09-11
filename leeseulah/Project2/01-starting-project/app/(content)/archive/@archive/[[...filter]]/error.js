// 클라이언트 컴포넌트
"use client";

export default function FilterError() {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>{error.message}</p>
    </div>
  );
}
