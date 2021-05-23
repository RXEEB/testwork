import React, { useState } from 'react'
import style from './formPage.module.css'
import PhotoDrop from '../Components/Inputs/photoDrop'


import Axios from 'axios'


const FormPage = () => {
    const url = 'https://test-job.pixli.app/send.php'
    const [data, setData] = useState([{
        name: '',
        surname: '',
        patronymic: '',
        img:'',

    }])
    function hendle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    function submit(e) {
        e.preventDefault()
        Axios.post(url, {
            id: 1,
            name: data.name,
            surname: data.surname,
            patronymic: data.patronymic,
           
        })
            .then(res => { console.log(res.data) })

    }
    return (
        <div className={style.container}>
            <form onSubmit={(e) => submit(e)} action="send_data" className={style.forms} >
                <label className={style.label}>Имя</label>
                <input onChange={(e) => hendle(e)}
                    id='name' value={data.name} type="text" placeholder="Имя" className={style.input} />
                <label className={style.label}>Фамилия</label>
                <input onChange={(e) => hendle(e)}
                    id='surname' value={data.surname} type="text" placeholder="Фамилия" className={style.input} />
                <label className={style.label}>Отчество</label>
                <input onChange={(e) => hendle(e)}
                    id='patronymic' value={data.patronymic} type="text" placeholder="Отчество" className={style.input} />
                <PhotoDrop />

                <button className={style.button}>Сохранить</button>
            </form>

        </div>
    )
}

export default FormPage