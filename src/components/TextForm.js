import React,{useState}  from 'react'



export default function TextForm(props) {
    //The first one is the example with text.
    //const [text,setText]=useState('Enter text here...');
    const [text,setText]=useState('');

    const handleupperclick=()=>{
        //console.log("uppercase is clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }
    const handlelowerclick=()=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success")
    }
    const cleartext=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text Cleared!","success")
    }
    const handlecopytext=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value).then(() => 
          {
            alert("successfully copied");
          })
          .catch(() => {
            alert("something went wrong");
          });
          props.showAlert("Text Copied","success")
    }

    const handleExtraSpace=()=>{
        //if there is more than one space in the sentence then it will break into and 
        //it will added to the aaray and then join to by the single space;
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed!","success")
    }
    const handleonchange=(event) =>{
        //console.log("on change");
        setText(event.target.value);
    }
  return (
    <>
    <div className="container-box my-3" style={{ color: props.mode==='dark'? 'white':'black'}}>
        <h1>{props.title}</h1>
        <div className="textBox my-3">
            {/*<label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
            <textarea className="form-control" id="myBox"  value={text} onChange={handleonchange} style={{ backgroundColor: props.mode==='dark'? 'grey':'white',color: props.mode==='dark'? 'white':'black'}} rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleupperclick}>CONVERT UPPERCASE</button>
        <button className="btn btn-success mx-2" onClick={handlelowerclick}>CONVERT LOWERCASE</button>
        <button className="btn btn-primary mx-2" onClick={cleartext}>CLEAR-TEXT</button>
        <button className="btn btn-primary mx-2" onClick={handlecopytext}>COPY-TEXT</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>REMOVE-EXTRA-TEXT</button>


    </div>
    <div className='container my-3' style={{ color: props.mode==='dark'? 'white':'black'}}>
        <h2>YOUR TEXT SUMMARY</h2>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somethings here for the preview."}</p>


    </div>
    </>
    
  )
}
