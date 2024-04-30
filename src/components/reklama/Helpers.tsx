import './Helpers.css'

function Helpers() {
    return (
        <div className="help-container">
            <h1>Отзывы</h1>
            <div className="lists">
                <div className="list">
                    <p>Быстрая доставка и свежие цветы!</p>
                    <div className="ava">
                        <img src="/images/m.jpeg" alt="ava" />
                    </div>
                    <h3>Иван</h3>
                </div>
                <div className="list">
                    <p>Незабудка - лучшее место для заказа цветов.</p>
                    <div className="ava">
                        <img src="/images/w.jpeg" alt="ava" />
                    </div>
                    <h3>Анна</h3>
                </div>
                <div className="list">
                    <p>Сервис на высшем уровне, рекомендую!</p>
                    <div className="ava">
                        <img src="/images/m1.jpeg" alt="ava" />
                    </div>
                    <h3>Петр</h3>
                </div>
            </div>
            <div className="stats">
                <div className="stat">
                    <h2>500+</h2>
                    <h3>Счастливых клиентов</h3>
                </div>
                <div className="stat">
                    <h2>100%</h2>
                    <h3>Гарантированная свежесть</h3>
                </div>
                <div className="stat">
                    <h2>24/7</h2>
                    <h3>Поддержка клиентов</h3>
                </div>
            </div>
        </div>
    );
}

export default Helpers;