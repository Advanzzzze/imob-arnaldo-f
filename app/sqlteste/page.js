'use client'

import axios from 'axios'
import { useRef, useState } from 'react'
import uploadImage from '../utils/uploadImage'

function Page() {
    const [imageUrl, setImageUrl] = useState()

    const nameInput = useRef()
    const imageInput = useRef()

    async function handleSubmit(e) {
        e.preventDefault()

        uploadImage(
            nameInput.current.value,
            imageInput.current.files[0],
            async (body) => {
                const response = await axios.post('/api/images', body)
                setImageUrl(response.data.response)
            }
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameInput} type="text" name="name" />
                <input ref={imageInput} type="file" name="image" />
                <button>Enviar</button>
            </form>
            {imageUrl && <img src={imageUrl} alt="teste" />}
        </div>
    )
}

export default Page
