import React from 'react';
import parse from 'html-react-parser';

import useAsyncHook from "../../helpers/useAsyncHook";
import {resumeDataLink} from "../../config";
import Loader from "../Loader";


const Resume = () => {

    const [result, loading, error] = useAsyncHook({link: resumeDataLink});
    const title = <h1>Resume</h1>;
    if (loading) {
        return <>
            {title}
            <Loader/>
        </>;
    }
    if (error) {
        return <>
            {title}
            {error}
        </>;
    }
    return (
        <>
            {title}
            <h2>{result.subtitle}</h2>
            <ul className="work-list">
                {typeof result.jobs !== 'undefined' &&
                    result.jobs.map(item => {
                        return (
                            <li className="work-list__item" key={item.company}>
                                <h3>
                                    <b>{item.position}</b>, {item.company}{' '}
                                    {item.country && <img
                                        src={`/assets/images/flags/${item.country.toLowerCase()}.png`}
                                        alt={item.country}
                                        title={item['country-name']}
                                    />}
                                </h3>
                                <span className="year">
            <i className="fa fa-calendar"/> {item['date-from']} {item['date-to'] && `- ${item['date-to']}`}
          </span>
                                {parse(item.description)}
                            </li>
                        );
                    })}
            </ul>
        </>
    );
};

export default Resume;
