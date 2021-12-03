import React from "react";

import './shop.scss';

import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { fetchingStart } from "../../components/redux/shop/actions";

import CollectionPageContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";


class Shop extends React.Component   {


    componentDidMount() {
        const { fetchingStart } = this.props;
        fetchingStart();
    }

    render() {
        
        return (
            <div>
                <Routes>
                <Route path='' element={<CollectionsOverviewContainer />} />
                <Route path=':collectionId' element={<CollectionPageContainer />} />
                </Routes>
            </div>
            )
    }

}



const mapDispatchToProps = (dispatch) => ({
    fetchingStart: () => dispatch(fetchingStart())
})

export default connect(null, mapDispatchToProps)(Shop);