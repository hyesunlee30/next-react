import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";


// loading.js 와 loading.module.css를 써서 전역으로 사용하는 방법도 있지만
// loading 을 보여주고 싶은 곳에서 suspense 와 fallback 을 이용해 필요한 곳에서만 사용하는 것이 좀 더 나은 유저경험이다.

// 데이터 가져오는 부분을 아웃소싱
// Suspense는 리액트에서 제공하는 컴포넌트로 일부 데이터 또는 리소스가 불리울 때까지 로딩 상태를 처리하고 대체 컨텐츠를 표시할 수 있다.
// NextJS는 이 Suspense 컴포넌트와 리액트 컨셉을 포용하고 
// 데이터를 fetching 하고 이런 promise 를 반환한다.
async function Meals() {
    console.log("Fetching meals");
    const meals = await getMeals();

    return <MealsGrid meals={meals}/>
}

export default function MealsPage() {

    

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created {' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy and fun!
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share Your Favorite Recipe.
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                    <Meals />
                </Suspense>
                
            </main>
        </>
    );
}