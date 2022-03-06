import React from 'react'
import './Collection-Overview.styles.scss'
import { CollectionPreview } from '../preview-collection/CollectionPreview.component'
import { selectCollectionForPreview } from '../../redux/shop/shop.selector'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

const CollectionOverview = ({ collections }) => {
    return (
        <div className='collection-overview'>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview,
})

export default connect(mapStateToProps)(CollectionOverview);