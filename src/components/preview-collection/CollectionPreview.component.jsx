import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-items/CollectionItems.component';

import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
} from './CollectionPreview.styles.jsx';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
        <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}
        </TitleContainer>
        <PreviewContainer>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);


