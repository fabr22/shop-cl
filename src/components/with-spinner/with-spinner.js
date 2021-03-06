import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = ( Wrapped ) => ({ isLoading, ...otherProps}) => {

    

    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>)
        : (<Wrapped  {...otherProps}/>)
}

export default WithSpinner;