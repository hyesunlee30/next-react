'use client';
import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
    const { pending } = useFormStatus(); // react 도 아니고 next.js 도 아닌 reac-dom
    return <button>
        {pending ? "Submitting..." : "Share Meal"}
    </button>
}