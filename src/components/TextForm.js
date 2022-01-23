import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        console.log("button was clicked")
        setText(text.toUpperCase())
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const handleDownClick = () => {
        setText(text.toLowerCase())
    }
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>Your text can be read in  {0.008 * text.split(' ').length}</p>
            <p>Preview : {text}</p>
        </div>
        </>
    )
}
