import React from "react"

const Drawer = () => {
    return (
        <div className="overlay">
            <div className="drawer cartItems">
                <div className='flex justify-between'>
                    <h2 className='text-2xl font-bold'>Корзина </h2>
                    <img className='removeBtn' src="/img/btn-remove.svg" alt="remove"/>
                </div>

                <div className="cartItem flex mt-5">
                    <img className='mr-1' width={100} src="/img/selling/1.webp"/>
                    <div>
                        <p className='mb-1'>Электрогитара Fender Vibe '60s Custom Esquire</p>
                        <b>7899 Лей</b>
                    </div>
                    <img className='removeBtn' src="/img/btn-remove.svg" alt="remove"/>
                </div>


                <ul className='cartTotalBlock'>
                    <li className='flex cartTotalPrice'>
                        <span>Итого:</span>
                        <b>7899 Лей</b>
                    </li>
                    <button className='orderButton'>Оформить заказ</button>
                </ul>
            </div>
        </div>
    )
}

export default Drawer;