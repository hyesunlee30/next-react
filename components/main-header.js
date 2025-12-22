import Link from "next/link";
import logoImg from '@/assets/logo.png' // next/image 사용할 땐 logoImg.src 가 아닌 logoImg 객체 전체여야 한다 

import classes from './main-header.module.css'
import Image from "next/image"; // srcset 기기나 뷰포인트 에 맞게 사이즈가 조졍됨, png -> webp, lazy loading -> 깜박이 없이 바로 로딩을 위해 priority


export default function MainHeader() {
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logoImg} alt="A plate with food on it" priority/>
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>    
    )
    
}