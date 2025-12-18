'use client';
import Link from "next/link";

export function AppLink({
    href,
    children,
    className,
    variant,
    onClick,
    target,
    rel,
    ...rest
}) {
    return (
        <Link
            href={href}
            className={className}
            onClick={onClick}
            {...rest}
        >
            {children}
        </Link>
    );
}