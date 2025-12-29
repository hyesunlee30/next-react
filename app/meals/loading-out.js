import classes from "./loading.module.css"

// 안쓰려고 loading.js -> loading-out.js로 변경
// loading.module.css 에 있는 것도 pags.module.css 로 옮김
export default function MealsLoadingPage() {
    return <p className={classes.loading}>Fetching meals...</p>
}