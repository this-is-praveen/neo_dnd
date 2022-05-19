import * as Styled from '../styles';
import React from 'react';

const SearchBox = (props) => {
    const {
        initialData = [],
        setUserData = () => {},
        optimizeResponse = () => {},
    } = props || {};
    return (
        <>
            <Styled.SearchBoxInput
                placeholder={'John Doe'}
                onChange={(event) => {
                    const value = event.target.value;
                    setUserData((prevState) => {
                        const results = initialData.filter((data) => {
                            const name =
                                `${data.name.title} ${data.name.first} ${data.name.last}`.toLowerCase();
                            return name.includes(value.toLowerCase());
                        });

                        return results
                            ? optimizeResponse({ results, random: false })
                            : prevState;
                    });
                }}
            />
        </>
    );
};

export { SearchBox };
