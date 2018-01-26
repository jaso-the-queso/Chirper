import React from 'react';

const ChirpList = (props) => {
    let listItems = props.items.map((item) => {
        return (
            <li className="container border rounded  mt-2 mb-2 pt-4 pb-4">
                {item}
            </li>
        );
    });
    return (
        <ul className="list-unstyled">
            {listItems}
        </ul>
    );
};


export default ChirpList;