'use server';
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

 // form action 에서 server action, 오직 서버에서만 실행을 보장, nextJs 서버로 보냄

function isInvalidText(text){
    return !text || text.trim() === '';
}

export async function shareMeal(prevState, formData) {

    // name으로 데이터 가져오기
    const meal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"), //ImagePicker 에 label과 name 추가후 name으로 가져온다
        creator: formData.get("name"),
        creator_email: formData.get("email")
    }

    if (
        isInvalidText(meal.title) || 
        isInvalidText(meal.summary) || 
        isInvalidText(meal.instructions) || 
        isInvalidText(meal.creator) || 
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0
    ) {
        //throw new Error("Invalid Input") - 좋지 않은 유저 경험

        return {
            message: "Invalid input."
        }
    }

    await saveMeal(meal);

    // 캐시 유효성 재확인 트리거
    // 첫번째 경로 두번째 인수 page 가 기본값, layout 으로 하면 중첩된 모든 페이지 검사.
    revalidatePath("/meals");

    redirect("/meals");

}