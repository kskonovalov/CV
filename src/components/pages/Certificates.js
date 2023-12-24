import React from 'react';

import Certificate from '../parts/Certificate';
import Loader from '../Loader';

import {certificatesDataLink} from '../../config';
import useAsyncHook from '../../helpers/useAsyncHook';

const Certificates = () => {
    const [result, loading, error] = useAsyncHook({link: certificatesDataLink});
    const title = <h1>Certificates and Courses</h1>;
    if (loading) {
        return <>
            {title}
            <Loader/>
        </>;
    }
    if(error) {
        return <>
            {title}
            {error}
        </>;
    }
    return (
        <>
            {title}
            {typeof result !== 'undefined' &&
                result.map(item => {
                    return (
                        <Certificate
                            key={item.title + item.year}
                            title={item.title}
                            year={item.year}
                            description={item.description}
                            image={item.image}
                            thumb={item.thumb}
                            link={item.link}
                        />
                    );
                })}
        </>
    );
};

export default Certificates;
