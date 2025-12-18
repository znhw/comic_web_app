import clsx from "clsx";

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    disabled = false,
    className,
}){
    return (
        <button
            className={`clsx("btn") ${className || ''}`}
            role="button"
            style={fullWidth ? {width: '100%'} : undefined  }
        >
            {children}
        </button>
    );
}   