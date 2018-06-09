import React from 'react';
import { Text2List } from 'react-text-2-list';
require('./table.css');
require('./Content.css')

const Content = () => {
    const addCallback = list => {
    console.log(list);
    };

    return(
        <div className="main">
            <div>
                <Text2List heading="Amazon, GearBest, eBay product links:" placeholder="Paste product link addresses here" enterButtonText="Add to Cart" stopOnDuplicate="true" onAdd={addCallback}/>
            </div>
            <div className="info">
                <h4 className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tristique fringilla pellentesque. Integer sodales feugiat odio, eget aliquam justo vestibulum at. Mauris gravida turpis vestibulum nisi scelerisque, vel bibendum dolor rhoncus. Integer felis nunc, commodo ac leo et, suscipit porttitor odio. Nullam ultrices sagittis dolor, fermentum bibendum eros dictum eu. Nullam auctor lobortis nunc ac convallis. Quisque fringilla ex in est mollis posuere. Aliquam erat volutpat. Pellentesque nec elit vel eros dictum posuere non non leo. Ut elit sem, aliquet sit amet turpis commodo, vehicula rutrum sapien. Nullam a ligula euismod, consequat eros scelerisque, sagittis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo accumsan nibh, nec tristique mauris. </h4>
            </div>
        </div>
    );
}

export default Content;