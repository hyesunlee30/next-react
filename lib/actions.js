'use server'; // form action 에서 server action, 오직 서버에서만 실행을 보장, nextJs 서버로 보냄

export async function shareMeal(formData) {

// name으로 데이터 가져오기
const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"), //ImagePicker 에 label과 name 추가후 name으로 가져온다
    creator: formData.get("name"),
    creator_email: formData.get("email")
}

console.log(meal);

}