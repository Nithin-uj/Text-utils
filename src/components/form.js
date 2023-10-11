import React,{useState } from "react";

export default function Form(props) {
    const [text,changeText] = useState("");
    let [emailarr,entermail] = useState(['']);

    const btnclicked = () =>{
        changeText(text.toUpperCase());
        props.showalert("Converted to Upper case ","success");
    }
    const lbtn = () =>{
        changeText(text.toLowerCase());
        props.showalert("Converted to Lower case ","success");
    }
    const textclicked = (event) =>{
        changeText(event.target.value)
    }

    const handle = () => {
        changeText("")
        props.showalert("Text Cleared ","danger");
    }
    const getmails = () => {
        entermail(text.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi));
       // console.log(emailarr);
        props.showalert("Check the Email section  ","success");
    }
    /*let formstyle = props.mode==='dark' ? {
        backgroundColor:'RGB(33, 37, 41)',
        color:'white'
    }:{
        backgroundColor:'white',
        color:'black'
    }*/

    let formstyle2 = props.mode==='dark' ? {
        backgroundColor:'rgb(54, 55, 90)',
        color:'white'
    }:{
        backgroundColor:'white',
        color:'black'
    }

  return (
      <div style={formstyle2}>
        <div className="container py-3" style={formstyle2}>
            <h2 className="py-3">{props.heading}</h2>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text}
            style={formstyle2}
            onChange={textclicked}
          ></textarea>
          <button className="btn btn-primary my-3" onClick={btnclicked}>To Uppercase</button>
          <button className="btn btn-primary my-3 mx-3" onClick={lbtn}>To Lowercase</button>
          <button className="btn btn-danger my-3" onClick={handle}>Clear</button>
          <button className="btn btn-warning my-3 mx-3" onClick={getmails}>Get Mails</button>
        </div>
        <div className="container py-3 my-0" 
            style={formstyle2}>
            <h1>Your Text Summery</h1>
            <p> {text.split(" ").length} words and {text.length} Characters</p>
            <p> {text.split(" ").length*0.008} Minutes To read</p>
            <h2>Preview</h2>
            <p>
                {text.length===0? 'Enter Something to preview Here' : text}
            </p>
            <h2 className="py-3 m-0">
                Emails
            </h2>
            <p>{text.length===0?'Filtered Emails Displayed Here':emailarr.map((emailarr) => (
                    <div key={emailarr}>{emailarr}</div>
                ))}
            </p>
        </div>
      </div>
  );
}
