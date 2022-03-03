import React from 'react';
import CollectionItems from '../collection-items/CollectionItems.component';
import './CollectionPreview.styles.scss'

export const CollectionPreview = ({ title, items }) => {
    return <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item, idx) => idx < 4).map(item => {
                return <CollectionItems key={item.id} item={item} />
            })}
        </div>
    </div>;
};
