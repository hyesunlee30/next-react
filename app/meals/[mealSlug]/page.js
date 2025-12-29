import Image from "next/image";
import classes from "./page.module.css"
import { getMeal } from "@/lib/meals";


// dangerouslySetInnerHTML 을 쓰는 이유. 검증. 
// 이 속성은 객체를 값으로 가져야 하고 __html: 실제 출력되는 html 코드를 가진다
// HTML 형태로 출력시키면 크로스 사이트 스크립트 공격에 노출된다.

// page.js 에 정의된 모든 컴포넌트는 params props 를 받을 수 있다. key-value 
// params.mealSlug
export default function MealDetailsPage({params}) {

    const meal = getMeal(params.mealSlug);

    meal.instructions = meal.instructions.replace(/\n/g, '<br />');

    return <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image src={meal.image} alt={meal.title} fill/>
            </div>
            <div className={classes.headerText}>
                <h1>{meal.title}</h1>
                <p className={classes.creator}>
                    by <a href={`mailto:${meal.email}`}>{meal.creator}</a> 
                </p>
                <p className={classes.summary}>
                    {meal.summary}
                </p>
            </div>
        </header>
        <main>
            <p className={classes.instructions} dangerouslySetInnerHTML={{
                __html: meal.instructions 
            }}>
            </p>
        </main>
    </>;
}