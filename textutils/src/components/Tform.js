import React,{useState} from 'react'    



export default function Tform(props) {
    const handleUpclick=()=>{
        // console.log('uppercase was clicked'+text)
        let newtext=text.toUpperCase()
        setText(newtext)
        props.showAlert('converted to uppercase' ,'success')
    }
    
    const handleLoclick=()=>{
        // console.log('uppercase was clicked'+text)
        let newtext=text.toLowerCase()
        setText(newtext)
        props.showAlert('converted to lowercase','success')
    }
    const clearonclick=()=>{
        // console.log('uppercase was clicked'+text)
        let newtext=('')
        setText(newtext)
        props.showAlert('All text cleared ','success')
    }

    const handleonchange=(event)=>{
        // console.log('on change')
        setText(event.target.value)
    }
    const copyonhold=()=>{
        var text=document.getElementById('mybox')
        text.select();
        console.log(text.value)
        navigator.clipboard.writeText(text.value)
        props.showAlert('copied to click board','success')
    }
    const[text,setText]=useState('');
    // text='new text';//wrong way to change state
    // setText('new text');//correct way to change text
    return (
        <>
        <div >
            <div className="mb-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpclick}>convert to UPPERCASE</button>
            <button className="btn btn-primary mx-3" onClick={handleLoclick}>convert to lowercase</button>
            <button className="btn btn-primary mx-3" onClick={clearonclick}>clear all text</button>
            <button className="btn btn-primary mx-3" onClick={copyonhold}>copy text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}} >
            <h2>Your text summary</h2>
            
            <p>{text.split(' ').length-1} words and {text.length} characters</p>
            <p>{0.008 *text.split(' ').length} minutes read</p>
            <h2>preview</h2>
            <p>{text.length>0?text:'Enter your text above'}</p>
        </div>
        </>
    )
}
