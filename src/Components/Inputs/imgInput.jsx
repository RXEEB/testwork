import React, { useState } from "react"
import style from './input.module.css'
import axios from 'axios';



export const DropImg = ({children, ...pors}) => {
    const [drag, setDrag] = useState(false)

    function dragStartHandler(e) {
    e.preventDefault()
    setDrag(true)
    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
        }

        function onDropHandler(e) {
            e.preventDefault()
            let files = [...e.dataTransfer.files]
            // const formData = new FormData()
            // formData.append('file', files[0])
            // axios.post('https://test-job.pixli.app/send.php',formData)
            setDrag(false)
            }
    

    return (
        <div className={style.dropApp}>
             {drag
                 ?  <div className = {style.dropIn}
                 onDragStart = {e => dragStartHandler(e)}
                 onDragLeave = {e =>dragLeaveHandler(e)}
                 onDragOver = {e => dragStartHandler(e)}
                 onDrop = {e => onDropHandler(e)}
                 >отпустить файл</div>
                 :  <div className={style.dropArea}
                 onDragStart = {e => dragStartHandler(e)}
                 onDragLeave = {e => dragLeaveHandler(e)}
                 onDragOver = {e => dragStartHandler(e)}
                 >Перетащить файл</div>
                } 
             
            

        </div>
    )}