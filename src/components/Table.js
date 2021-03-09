import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/action-creators";
import TableRowElement from "./TableRowElement";


const Table = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch]);

    const items = useSelector(state => state.items);

    return (
        <table className={'table table-hover'}>
            <thead className={'thead-dark'}>
            <tr>
                <th scope={'col'}>1 Lorem.</th>
                <th scope={'col'}>2 Lorem ipsum.</th>
                <th scope={'col'}>3 Lorem ipsum dolor.</th>
            </tr>
            </thead>
            <tbody>
            {items.length > 0 &&
                items.map((item, index) => (
                    <TableRowElement key={index} item={item}/>
                ))
            }
            </tbody>
        </table>
    )
};

export default Table;