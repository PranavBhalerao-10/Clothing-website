import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../preview-collection/CollectionPreview.component';

import { selectCollectionForPreview } from '../../redux/shop/shop.selector';
import { CollectionsOverviewContainer } from './Collection-Overview.styles';

const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);