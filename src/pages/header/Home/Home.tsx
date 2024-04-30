import AboutUS from '../../../components/aboutUS/AboutUS';
import Benefits from '../../../components/benefits/Benefits';
import Contacts from '../../../components/contacts/Contacts';
import Products from '../../../components/products/Products';
import Helpers from '../../../components/reklama/Helpers';
import './Home.css'

function Home() {
    return (
        <div className='container'>
            <AboutUS />
            <Products />
            <Helpers />
            <Benefits />
            <Contacts />
        </div>
    );
}

export default Home;