

"use client"
import { saveAs } from "file-saver";

export default function CustomButton() {
    const saveFile = () => {
        saveAs(
            "/CurriculoIngles.pdf",
            "cv.pdf"
        );
    }
    return <button type="button" onClick={saveFile} className="custom-button py-2 px-4  rounded inline-flex gap-3  items-center"> Download CV </button>;
}
