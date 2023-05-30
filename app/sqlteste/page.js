'use client'

import axios from 'axios'
import { useRef, useState } from 'react'

function Page() {
    const [imageUrl, setImageUrl] = useState()

    const nameInput = useRef()
    const imageInput = useRef()

    async function handleSubmit(e) {
        e.preventDefault()

        const img = new Image()

        img.crossOrigin = 'anonymous'

        img.onload = async () => {
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')
            canvas.height = img.naturalHeight
            canvas.width = img.naturalWidth
            ctx.drawImage(img, 0, 0)

            const dataUrl = canvas.toDataURL()

            const body = {
                name: nameInput.current.value,
                image: dataUrl,
            }

            const response = await axios.post('/api/image', body)

            setImageUrl(response.data.response.data.image)
        }

        img.src = URL.createObjectURL(imageInput.current.files[0])
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
