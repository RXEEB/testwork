import React from 'react'
import style from './palettePage.module.css'
import ColorPicker from '../Components/Color/colorPicker'


function PalettePage() {
    return (
        <div className={style.container}>
          
                <ColorPicker />
            
        </div>
    )
}

export default PalettePage