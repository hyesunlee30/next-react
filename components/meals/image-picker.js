'use client'; 
// handler 연결 - 서버 컴포넌트에서 사용할 수 없음, 클라이언트 즉 유저가 클릭하는 이벤트가 브라우저에서 일어나기 때문.
// 커스텀 이미지 피커
// 다른 하위폴더에 넣을 수도 있지만
// meal과 관련된 양식에만 사용할 것이라 위치를 /meals 아래에 둠


// htmlFor 를 이용해 label 과 input 연결 
// accept 를 이용해 어떤 파일만 접수되는 제어
// name을 이용해 업로드된 파일 추츨

// 실제 input은 지우고 버튼을 만들어서 다시 만듦
// 그리고 input 연결
// handler 연결 

import { useRef, useState } from "react";

import classes from "./image-picker.module.css"
import Image from "next/image";

export default function ImagePicker({ label, name }) {

    const [pickedImage, setPickedImage] = useState();

    const imageInputRef = useRef();

    function handlePickClick() {
        // current 실제로 연결된 요소와 객체에 접근할 수 있게 한다.
        imageInputRef.current.click();
    }

    // input의 change event가 걸린 handler
    function handleImageChange(event) {
        const file = event.target.files[0]; // input type이 file 일때 업로드 된 파일 접근, multipl 속성 추가하면 여러 파일 받을 수 있음

        if(!file) {
            setPickedImage(null); // 이미지가 선택되지 않은 경우 미리보기된 이미지 재설정
            return;
        }
        // data url
        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);

    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet.</p>}
                {pickedImage && 
                    <Image 
                        src={pickedImage} 
                        alt="The image selected by the user."
                        fill
                    />}
            </div>
            <input
                className={classes.input}
                type="file" 
                id={name}
                accept="image/png, image/jpeg"
                name={name} 
                ref={imageInputRef}
                onChange={handleImageChange}
                required // 이미지가 선택되지 않을 경우 제출 불가
            />
            <button className={classes.button} type="button" onClick={handlePickClick}>
                Pick an Image
            </button>
        </div>
    </div>
}