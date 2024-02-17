import React from "react"

const Header = () => {
    return (
        <header>
            <div className='headerLeft p-10'>
                <img width={250} src="/img/logo.svg"/>
                <div className='headerInfo'>
                    <p className='mt-2 text-1xl font-light'>Магазин лучших музыкальных акссесуаров</p>
                </div>
            </div>

            <ul className='headerRight p-10'>
                <li className='userAndCard flex'>
                    <img className='userAndCardIcon' width={18} height={18} src="/img/cart.svg"/>
                    <span className='UserAndCardText'>1200 Лей</span>
                </li>
                <li className='userAndCard mt-2 flex rounded-2xl'>
                    <img className='userAndCardIcon' width={18} height={18} src="/img/user.svg"/>
                    <span className='UserAndCardText'>Дмитрий</span>
                </li>
            </ul>
        </header>
    )
}

export default Header;