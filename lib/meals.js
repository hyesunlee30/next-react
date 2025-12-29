import sql from "better-sqlite3";

const db = sql('meals.db');

export async function getMeals() {

    //await new Promise((resolve) => setTimeout(resolve,2000)); // loading.js test

    //throw new Error('Loading meals failed'); // error.js test

    // run 데이터 주입, 변경
    // 조회 모두 all
    // 하나 조회 get
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals where slug = ?').get(slug);
}