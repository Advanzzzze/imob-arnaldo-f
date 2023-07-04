import Link from 'next/link'

function SideButton({ OutlineIcon, FillIcon, href, condition, title }) {
    return (
        <Link
            href={href}
            className={`flex gap-4 items-center font-semibold text-xl p-4 rounded-lg ${
                condition ? 'bg-ascent-color-300' : 'bg-ascent-color-300/20'
            }`}
        >
            {condition ? <FillIcon size={25} /> : <OutlineIcon size={25} />}
            <p>{title}</p>
        </Link>
    )
}

export default SideButton
