import { useState } from "react";
import axios from "axios";
import './style.scss'

import Post from "../../components/post/Post";
import Navbar from "../../components/navbar/Navbar";

type ProviderPageProps = {
    id_provider?: string,
    name_provider?: string,
    specialization_provider?: string,
    rating_provider?: number
};

const ProviderPage = (props: ProviderPageProps): JSX.Element => {

    type Item = {
        id_item?: string,
        name_item?: string,
        price_item?: number,
        rating_provider?: number,
        sale_item?: number
    };

    // const [state, setState] = useState('');
    // const [cards, setCards] = useState([]);

    // async function fetchData(state: string) {
    //     try {
    //         const res = await axios.get(`http://localhost:7017/providers/${state}`);
    //         setCards(res.data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    
    return (
        <div className="providerPage">
            <Navbar />
            <Post>
                <h2 className="name">{props.name_provider}</h2>
                <h3 className="specialization">{props.specialization_provider}</h3>
                <p className="rating">Рейтинг: {props.rating_provider}</p>
            </Post>
        </div>
    );
};

export default ProviderPage;