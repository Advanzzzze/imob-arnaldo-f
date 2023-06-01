export default async function uploadImage(name, image, afterFunction) {
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
            houseId: name,
            image: dataUrl,
        }

        afterFunction(body)
    }

    img.src = URL.createObjectURL(image)
}
