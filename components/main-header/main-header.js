//'use client'; // ->nav-link.js 로 옮겨줌, 여긴 서버에서 렌더링 됨 

import Link from "next/link";
import logoImg from '@/assets/logo.png' // next/image 사용할 땐 logoImg.src 가 아닌 logoImg 객체 전체여야 한다 

import classes from './main-header.module.css'
import Image from "next/image"; // srcset 기기나 뷰포인트 에 맞게 사이즈가 조졍됨, png -> webp, lazy loading -> 깜박이 없이 바로 로딩을 위해 priority
import MainHeaderBackgroundPage from "./main-header-background";
import NavLink from "./nav-link";


// MainHeaderBackgroundPage 를 rootRayout 에 넣을 수도 있지만 관심사를 모으기 위해 여기에 넣는다
// 형제요소를 넣기 위해선 <>{형제 요소를 여기에 넣어야 한다}</> 

export default function MainHeader() {

    return (
    <>
        <MainHeaderBackgroundPage />
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logoImg} alt="A plate with food on it" priority/>
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community" >Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>  
    </>
          
    )
    
}