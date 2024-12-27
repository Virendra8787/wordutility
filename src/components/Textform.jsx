import React, { useState } from 'react'

const Textform = () => {
    const [text, setText] = useState('');

   

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearTextClick = () =>{
        setText('');
    }

    const selectAndCopyText = () => {
        let newText = document.getElementById("mytext");
        newText.select();
        navigator.clipboard.writeText(newText.value);
      }

      const handleRemoveExtraSpace = () => {
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
      }

      const handleAddHyphen = () => {
        let newText =  text.replace(/ /g, "-");
        setText(newText);
      }

      const handleRemoveAllSpaceFromLine = () => {
        let newText =  text.replaceAll(' ', '');
        setText(newText);
      }

      

      const handleRemoveAllSpaceFromAllLines = () => {
        let newText = text.replace(/\s+/g, '');
        setText(newText);
      }



    return (
        <>
            <div className="container mt-5">
                <h1>Enter text below:</h1>
                <div className="form-floating">
                    <label htmlFor="mytext"></label>
                    <textarea className="form-control" value={text} id="mytext" onChange={handleOnChange} style={{ height: 150 }}  ></textarea>
                </div>
                <div className="btn btn-primary mt-2" onClick={handleUpperCaseClick} >Uppercase</div>
                 <div className="btn btn-primary mt-2 ms-2" onClick={handleLowerCaseClick} >Lowercase</div>
                 <div className="btn btn-primary mt-2 ms-2" onClick={handleClearTextClick} >Clear</div>
                 <div className="btn btn-primary mt-2 ms-2" onClick={selectAndCopyText} >Copy</div>
                 <div className="btn btn-primary mt-2 ms-2" onClick={handleRemoveExtraSpace} >Remove Extra Space</div>
                 <div className="btn btn-primary mt-2 ms-2" onClick={handleAddHyphen} >Add hyphen</div>
                 <div className="btn btn-primary mt-2 ms-2" onClick={handleRemoveAllSpaceFromLine} >Remove Space Line</div>
                 <div className="btn btn-primary mt-2 ms-2" onClick={handleRemoveAllSpaceFromAllLines} >Remove All Space</div>

            </div>

            <div className="container mt-4">
                <h2>Your text summary</h2>
                <p><strong>{ text.length  === 0 ? 0 : (text.trim().split(' ').length) }  </strong> words and  <strong>{text.length}</strong> characters</p>
                <p>Average time required to read <strong>  {parseFloat((0.008 * text.length).toFixed(3))} </strong> minutes.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter text to preview"}</p>

                

            </div>
        </>
    )
}

export default Textform
