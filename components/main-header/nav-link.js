'use client'; // header 에서 오직 이 부분만 화면에서 랜더링 되는 작은 조각의 마크업

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css"

export default function NavLink({href, children}) {
    const path = usePathname();
    return (
        <Link 
            href={href} 
            className={
                path.startsWith(href) 
                    ? `${classes.link} ${classes.active}` 
                    : classes.link
            }
        >
            {children}
        </Link>

        //<NavLink href="/community" className={path == "/community" ? classes.active : undefined}>Foodies Community</Link>
    )
}