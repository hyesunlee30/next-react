import fs from "node:fs"; // node 에서 제공하는 파일 시스템

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql('meals.db');

export async function getMeals() {

    //await new Promise((resolve) => setTimeout(resolve,2000)); // loading.js test

    //throw new Error('Loading meals failed'); // error.js test

    // run 데이터 주입, 변경
    // 조회 모두 all
    // 하나 조회 get
    return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug) {
    return db.prepare('SELECT * FROM meals where slug = ?').get(slug);
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, {lower: true}) // 모든 문자를 소문자 
    meal.instructions = xss(meal.instructions); // html xss 공격 방지

    const extension = meal.image.name.split('.').pop(); // 확장자
    const fileName = `${meal.slug}.${extension}`

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    await new Promise((resolve) => setTimeout(resolve,2000)); // submit button test

    stream.write(Buffer.from(bufferedImage), (error) =>{
        if(error) {
            throw new Error("Save image failed!")
        }
    });

    meal.image = `/images/${fileName}` // public은 루트와 같게 작동되기 때문에 뺀다

    db.prepare(`
        INSERT INTO meals 
            (slug, title, image, summary, instructions, creator, creator_email)    
         VALUES (
            @slug,
            @title,
            @image,
            @summary,
            @instructions,
            @creator,
            @creator_email
        )
    `).run(meal);
}