import Selers from "../models/selers/selers";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './shop.css'
import filter from './img/filter.png'
import sheep from './img/sheep.png'
import search from './img/search.png'

function Shop() {
    return (
        <div className="container">
            <Header />

            <div className="search">
                <h4><img src={filter} alt="" /> Filtering</h4>
                <input type="search" name="search" placeholder="Search...." />
                <img className="search_img" src={search} alt="" />
                <h4><img src={sheep} alt="" /> Cheep</h4>
            </div>

            <Selers />
            <Selers />
            <Selers />
            <Footer />
        </div>
    )
}

export default Shop