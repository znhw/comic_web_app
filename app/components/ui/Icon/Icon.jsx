import clsx from "clsx";

export function Icon({ 
    size = 'md',  
    color, 
    className,
    children,
    ...rest
}) {
    const sizeClasses = {
        sm: 12,
        md: 18,
        lg: 24,
    };

    const pixelSize = sizeClasses[size] || sizeClasses['md'];

    return (
        <svg 
            width={pixelSize}
            height={pixelSize}
            viewBox="0 0 24 24"
            className={clsx("icon", className)}
            style={color ? {color} : undefined}
            {...rest}
        >
            {children}
        </svg>
)}