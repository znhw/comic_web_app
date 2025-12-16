import clsx from "clsx";    

export function Tab({
    children,
    className,
    label: string,
    variant,
    onClick,
    ...rest
}) {
    return (
        <button
            className={className}
            label={string}
            variant={variant}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
}