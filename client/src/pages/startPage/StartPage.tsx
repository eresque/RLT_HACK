import React, { useState } from 'react';
import axios from "axios";
import './style.scss';

import InputArea from '../../components/inputArea/InputArea';
import Navbar from '../../components/navbar/Navbar';
import Button from '../../components/button/Button';
import Post from '../../components/post/Post';

const StartPage = (): JSX.Element => {

    type Card = {
        id_provider?: string,
        name_provider?: string,
        specialization_provider?: string,
        rating_provider?: number,
    };

    const [state, setState] = useState('');
    const [cards, setCards] = useState([]);

    async function fetchData(state: string) {
        try {
            const res = await axios.get(`http://localhost:3306/providers/${state}`);
            setCards(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if (state) {
            console.log('Запрос');
            fetchData(state);
        }
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setState(e.target.value);
    };

    return (
        <div className="startPage">
            <Navbar />
            <form name="form" className="form" onSubmit={handleSubmit} style={{ marginBottom: '10px' }}>
                <InputArea
                    value={state}
                    onChange={handleChange}
                    className='title'
                    placeholder='Поиск'
                    style={{ margin: '10px', width: '1000px' }}
                >
                    Поиск
                </InputArea>
                <Button style={{ display: 'block', margin: '10px', marginLeft: '30px' }}>Найти</Button>
            </form>
            <div className="all-posts">
                {cards.map((card: Card, index) => {
                    if (state.toLowerCase() === card.specialization_provider?.toLowerCase()) {
                        return <Post key={index} _id={card.id_provider} >
                            <h2 className="name">{card.name_provider}</h2>
                            <h3 className="specialization">{card.specialization_provider}</h3>
                            <p className="rating">Рейтинг: {card.rating_provider}</p>
                        </Post>
                    }
                })}
            </div>
        </div>
    );
}

export default StartPage;