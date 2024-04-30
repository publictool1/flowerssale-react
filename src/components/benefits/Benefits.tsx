import './Benefits.css'

function Benefits() {
    return (
        <div className='ben-container'>
            <h1>Особенности сервиса</h1>
            <div className="benefits">
                <div className="single">
                    <div className="single-img">
                        <img src="/images/smt1.jpeg" alt="smt" />
                    </div>
                    <h2>Широкий выбор</h2>
                    <p>У нас есть букеты на любой вкус и цвет.</p>
                    <div className="order-button">
                        <button>Заказать сейчас</button>
                    </div>
                </div>
                <div className="single">
                    <div className="single-img">
                        <img src="/images/smt1.jpeg" alt="smt" />
                    </div>
                    <h2>Быстрая доставка</h2>
                    <p>Мы доставим цветы вовремя и в отличном состоянии.</p>
                    <div className="order-button">
                        <button>Заказать сейчас</button>
                    </div>
                </div>
                <div className="single">
                    <div className="single-img">
                        <img src="/images/smt1.jpeg" alt="smt" />
                    </div>
                    <h2>Профессиональные флористы</h2>
                    <p>Наши флористы создадут уникальные композиции для вас.</p>
                    <div className="order-button">
                        <button>Заказать сейчас</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;