import Card from './components/Card/Card.jsx';
import Header from './components/Header';
import Drawer from './components/Drawer.jsx';

const arr = [
    {
        title: 'Электрогитара Fender Squier Affinity Series LF',
        price: 5979,
        imageUrl: '/img/selling/1.webp',
    },
    {
        title: 'Акустическая гитара Fiesta FST-D65',
        price: 2579,
        imageUrl: '/img/selling/2.webp',
    },
    {
        title: 'Электрогитара Ibanez RGA42FM-BLF',
        price: 8989,
        imageUrl: '/img/selling/3.webp',
    },
    {
        title: 'Электрогитара Ibanez GRX70QA TBB',
        price: 4979,
        imageUrl: '/img/selling/4.webp',
    },
];

function App() {
    return (
        <div className="wrapper clear">
            <Drawer />
            <Header />
            <div className="content p-10">
                <div className="">
                    <h1 className='font-bold text-3xl mb-10'>Все гитары</h1>
                    <div className="search-block flex p-2 outline-none">
                        <img className='ml-2' src="/img/search.svg" alt="Search" />
                        <input className='ml-2' placeholder="Поиск..." />
                    </div>
                </div>

                <div className="flex justify-between">
                    {arr.map((obj) => (
                        <Card
                            title={obj.title}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                            FavoriteClick={() => console.log('Добавили закладку')}
                            PlusClick={() => console.log('Добавили в корзину')}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;