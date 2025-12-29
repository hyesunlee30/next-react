'use client'; // 페이지 서버거 렌더링 된 뒤에도 에러를 잡기 위해 무조건 client component 여야 한다

//root 레벨에 심어서 어떤 에러도 잡을 수 있도록
export default function Error({error}) {
    return <main className="error">
        <h1>An error occurred!</h1>
        <p>Failed to fetch meal data. Please try again!</p>
    </main>
}