import HeaderStyles from '../styles/Header.module.css';
import Head from 'next/head';
// import HeaderToggle from './HeaderToggle';

const Header = () => {
    return (
        <>
        {/* <Head>
             <HeaderToggle/>   
        </Head> */}
            <header>
                <nav class={HeaderStyles.nav}>
                    <div class={HeaderStyles.navbar}>
                        <div class={HeaderStyles.navLeft}>
                            <img src="https://mobirise.com/extensions/shopamp/assets/images/logo1.png"/>
                        </div>
                        <button class={HeaderStyles.menuBtn}><img src="./images/Hamburger_icon.svg.png"/></button>
                        <div class={HeaderStyles.navRight}>
                            <ul>
                                <li><a href="/">HOME</a></li>
                                <li class={HeaderStyles.dropdownbox}>
                                    <a href="/">LIVE DEMO
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYWdTMa4UiHczxTQilFmCZ1eH92_YNjR23Q&usqp=CAU"/>
                                    </a>
                                </li>
                                <li class={HeaderStyles.dropdownbox}>
                                    <a href="/">LIVE DEMO BLOCKS
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYWdTMa4UiHczxTQilFmCZ1eH92_YNjR23Q&usqp=CAU"/>
                                    </a>
                                </li>
                                <li><button>BUY NOW</button></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header
