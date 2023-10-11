import { useState } from 'react';
import Navbar from './Navbar'
import About from './about';
import Formm from './form'
import Alert from './alert'

export default function Maincom () {
    const [mode ,setmode] = useState('light');
    const togglemode = () => {
        if(mode==='light'){
            setmode('dark');
            showAlert("Darkmode has been Enabled","success");
        }
        else{
            setmode('light');
            showAlert("Ligtmode has been Enabled","success");
        }
    }
    const [alert,setAlert] = useState(null);
    const showAlert = (message,type) => {
            setAlert({
                msg : message,
                typ : type
            })
            setTimeout(() => {
                setAlert(null);
            },1500);
    }
    return (
        <>
        <Navbar title='Textutil' mode={mode} togglemode={togglemode}/>
        <Alert alert={alert}/>
        <Formm showalert={showAlert} heading="Enter The Text To Analyse Below : " mode={mode}/> 
        <About mode={mode}/>
        </>
    );
}

