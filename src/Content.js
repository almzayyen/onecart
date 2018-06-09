import React from 'react';
import { Text2List } from 'react-text-2-list';
require('./table.css');

const Content = () => {
    const addCallback = list => {
    console.log(list);
    };

    return(
        <div>
         <div className="center">
                <Text2List heading="Amazon, GearBest, ebay.com URLs field:" placeholder="Paste product addresses here" enterButtonText="Add to  Cart" stopOnDuplicate="true" onAdd={addCallback}/>
                <button className=".Text2List_buttonsWrapper">test</button>
            </div>
        </div>
    );
}

export default Content;