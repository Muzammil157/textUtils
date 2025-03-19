import React from 'react'
import { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");
    function handeClick() {
        setText(text.toUpperCase());
    }
    function clearText() {
        setText("");
    }
    function handleOnchange(event) {
        setText(event.target.value);
    }
    let splittedText = text.split(" ");
    let tempArr = [];
    tempArr = splittedText.filter(word => word == "is");
    return (
        <>
            <h1 className={`text-${props.mode == 'dark' ? 'light' : 'dark'}`}>{props.heading}</h1>
            <div className="mb-3 text-light">
                <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handeClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={clearText}>Clear text</button>
            <div className="container">
                <h2 className={`text-${props.mode == 'dark' ? 'light' : 'dark'}`}>Your Text Summary</h2>
                <p className={`text-${props.mode == 'dark' ? 'light' : 'dark'}`}>{text.split(" ").length} words, {text.length} characters</p>
                <p className={`text-${props.mode == 'dark' ? 'light' : 'dark'}`}>{0.005 * text.split(" ").length} Minutes to read these words</p>
                <p className={`text-${props.mode == 'dark' ? 'light' : 'dark'}`}>No of "is" in the text: {tempArr.length}</p>
                <h2 className={`text-${props.mode == 'dark' ? 'light' : 'dark'}`}>Preview</h2>
                <p className={`text-${props.mode == 'dark' ? 'light' : 'dark'}`}>{text.length<1 ? "Enter something to preview" : text}</p>
            </div>
        </>
    )
}
