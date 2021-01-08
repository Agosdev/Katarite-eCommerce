import React,{useContext} from 'react';
import './WidgetCart.css';
import {Store} from '../../../store';

const WidgetCart = ({show, action}) => {
    const [data, setData] = useContext(Store);

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            {
                data.items.map(item => <p>{item.title}</p>)
            }
            <button onClick={action} style={{padding: 5}}>x</button>
        </div>
    )
}

export default WidgetCart;