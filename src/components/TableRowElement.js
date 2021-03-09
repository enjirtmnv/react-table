import React from 'react';

const TableRowElement = ({item}) => {
    return(
        <tr>
            <th scope={'row'}>{item.email}</th>
            <td>{item.firstName}</td>
            <td>{item.phone}</td>
        </tr>
    )
};

export default TableRowElement