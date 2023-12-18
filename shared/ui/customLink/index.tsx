import Link from "next/link";
import { ReactNode } from "react";

type LinkTypes = {
    children : ReactNode
    href: string 
}

export default function CustomLink({children, href} : LinkTypes) {
    return(
        <Link href={href}>
         {children}
        </Link>
    )
}