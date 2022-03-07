import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.styles';

const WithSpinner =
    (WrappedComponent: any) =>
    ({ isLoading, ...otherProps }: any) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };

export default WithSpinner;
