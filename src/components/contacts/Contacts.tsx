import './Contacts.css';

function Contacts() {
    return (
        <div className='con-container'>
            <h1 className='h1-order'>Оформите заказ прямо сейчас!</h1>

            <div className="connecnt">
                <div className="left">
                    <h2>Контакты</h2>
                    <p>Телефон: +7 (999) 123-4567</p>
                    <p>WhatsApp: +7 (999) 123-4567</p>
                    <p>TG: +7 (999) 123-4567</p>
                    <p>Email: info@nezabudkaflowers.ru</p>
                    <p>Время работы: Пн-Пт: 9:00-18:00</p>
                </div>
                <div className="right">
                    <h2>Форма заказа</h2>
                    <form>
                        <label htmlFor="name">Имя:</label><br />
                        <input type="text" id="name" name="name" /><br />
                        <label htmlFor="phone">Телефон:</label><br />
                        <input type="tel" id="phone" name="phone" /><br />
                        <label htmlFor="message">Сообщение:</label><br />
                        <textarea id="message" name="message" /><br />
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
