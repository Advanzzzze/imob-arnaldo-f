function Button({ children, onClick, variant, className }) {
    if (!variant || variant == 'normal') {
        return (
            <button
                onClick={onClick ? onClick : () => {}}
                className={`text-white border border-ascent-color-300 whitespace-nowrap rounded-lg px-4 py-2 bg-ascent-color-300 active:bg-ascent-color-300/75 ${className}`}
            >
                {children}
            </button>
        )
    } else if (variant == 'outline') {
        return (
            <button
                onClick={onClick ? onClick : () => {}}
                className={`text-white border border-ascent-color-300 whitespace-nowrap rounded-lg px-4 py-2 active:bg-ascent-color-300/10 ${className}`}
            >
                {children}
            </button>
        )
    } else if (variant == 'text') {
        return (
            <button
                onClick={onClick ? onClick : () => {}}
                className={`text-ascent-color-300 p-2 hover:text-white ${className}`}
            >
                {children}
            </button>
        )
    } else if (variant == 'text-invert') {
        return (
            <button
                onClick={onClick ? onClick : () => {}}
                className={`text-white p-2 hover:text-ascent-color-300 ${className}`}
            >
                {children}
            </button>
        )
    } else if (variant == 'a-normal' || variant == 'a') {
        return (
            <a
                href={onClick ? onClick : '/'}
                className={`text-white text-center border border-ascent-color-300 whitespace-nowrap rounded-lg px-4 py-2 bg-ascent-color-300 active:bg-ascent-color-300/10 ${className}`}
            >
                {children}
            </a>
        )
    } else if (variant == 'a-outline') {
        return (
            <a
                href={onClick ? onClick : '/'}
                className={`text-white text-center border border-ascent-color-300 p-2 active:bg-ascent-color-300/10 ${className}`}
            >
                {children}
            </a>
        )
    } else if (variant == 'a-text') {
        return (
            <a
                href={onClick ? onClick : '/'}
                className={`text-ascent-color-300 p-2 hover:text-white ${className}`}
            >
                {children}
            </a>
        )
    } else if (variant == 'a-text-invert') {
        return (
            <a
                href={onClick ? onClick : '/'}
                className={`text-white p-2 hover:text-ascent-color-300 ${className}`}
            >
                {children}
            </a>
        )
    }
}

export default Button
