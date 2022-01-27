import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert('warning', 'Upclick was clicked')
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleDownClick = () => {
        setText(text.toLowerCase())
        props.showAlert('warning', 'Downclick was clicked')
    }

    const handleClearText = () => {
        setText('');
        props.showAlert('success', 'Text Has been cleared')
    }

    const handleReverse = () => {
        let newText = '';
        for (var i = text.length - 1; i >= 0; i--) {
            newText += text.charAt(i);
        }
        setText(newText)
        props.showAlert('success', 'String was reversed')

    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('success', 'Text has been copied')

    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('success', 'Extra spaces have been removed')
    }

    const countWords = (word) => {
        return word.split(/\s+/).filter((element) => { return element.length !== 0 }).length;
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length === 0}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick} disabled={text.length === 0}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleReverse} disabled={text.length === 0}>Reverse</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearText} disabled={text.length === 0}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} disabled={text.length === 0}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace} disabled={text.length === 0}>Remove Extra Space</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{countWords(text)} words and {text.length} characters</p>
                <p>Your text can be read in  {0.008 * countWords(text)}</p>
                <h2>Preview : </h2>
                <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div>
        </>
    )
}
