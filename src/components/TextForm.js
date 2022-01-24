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

    const handleClearText = () => {
        setText('');
    }

    const handleReverse = () => {
        let newText = '';
        for(var i = text.length - 1; i >= 0; i--){
            newText += text.charAt(i);
        }
        setText(newText)
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    return (
        <>
        <div className='container' style = {{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="myBox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white', color : props.mode === 'dark' ? 'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn btn-primary" onClick={handleReverse}>Reverse</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
            
        </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h2>Your text summary</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>Your text can be read in  {0.008 * text.split(' ').length}</p>
            <h2>Preview : </h2>
            <p>{text.length > 0 ? text : 'Enter some text in the box aboove to preview'}</p>
        </div>
        </>
    )
}
