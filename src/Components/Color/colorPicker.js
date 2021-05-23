import React, { useState } from "react";
import styles from './color.module.css'
import { TwitterPicker } from 'react-color'



    function ColorPicker() {
        const [visibleColorPiker, setVisibleColorPiker] = React.useState(false)
        const [background, setbackground] = useState('#0000')
        const handleCHangeComplete = (color) =>{setbackground(color.hex) }
        const colorRef = React.useRef()
        
    
        const toggleVisiblePopup = () => {setVisibleColorPiker(!visibleColorPiker)}

        const handleOutsideClick = (e)=>{
            if (!e.path.includes(colorRef.current)){
                setVisibleColorPiker(false)
            }

        }
        React.useEffect(()=>{
        document.body.addEventListener('click',handleOutsideClick)
        },[])
    
    
        return (
            <div className ={styles.container}>
                <div className ={styles.ColorBoxs}>
                <div className ={styles.box} style ={{backgroundColor:background}}></div>
                <div className ={styles.box}></div>
                <div className ={styles.box}></div>
                </div>
        <div ref= {colorRef} className ={styles.colorPiker}>
           
            <button  onClick = {toggleVisiblePopup} className ={styles.button}>Добавить цвет</button>
            <div className ={styles.color}>
            { visibleColorPiker && <TwitterPicker
            color = {background}
            onChangeComplete = {handleCHangeComplete}
             />}
            </div>
            
           
           
            </div>
            </div>
        )
    }



export default ColorPicker