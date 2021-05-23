import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import style from './input.module.css'



const  PhotoDrop = (props) => {
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img className={style.img} src={file.preview} alt="preview" />
      </div>
    </div>
  ))

  return (
    <div className={style.photoDrop}>
      <div  {...getRootProps()}>
        <input type ={props.type} {...getInputProps()} />
        <p>выбрать изображение</p>
      </div>
      <div>{images}</div>
    </div>
  )
}

export default PhotoDrop
