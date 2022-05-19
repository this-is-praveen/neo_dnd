import { isEmpty, isEqual } from 'lodash';
import { Fragment, useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import useFetch from 'use-http';
import * as Styled from './styles';
import React from 'react';
import { SearchBox } from './components/searchBox';
import { ColumnElement } from './components/columnElement';

const removeFromList = (list, index) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
};

const addToList = (list, index, element) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
};

const columns = ['Open', 'Contacted', 'Written', 'Technical'];

const optimizeResponse = ({ results = [], random = false }) => {
    const values = {};
    if (results) {
        results.forEach((data) => {
            const randomNumber = Math.floor(Math.random() * columns.length);
            const status = random ? columns[randomNumber] : data.status;
            const newData = {
                ...data,
                id: data.phone?.replace(/[^0-9]/g, ''),
                status,
            };
            values[status] = values[status]
                ? [...values[status], newData]
                : [newData];
        });
    }
    return values;
};

const DND_Randomuser = () => {
    const [initialData, setInitialData] = useState([]);
    const [userData, setUserData] = useState({});
    const [compKey, setCompKey] = useState('');

    const {
        get,
        response: apiResponse,
        loading,
    } = useFetch('https://randomuser.me');
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await get(
            '/api/?results=100&inc=location,name,picture,phone'
        );
        const results = response?.results || [];
        const modifiedResponse = optimizeResponse({ results, random: true });
        setUserData(modifiedResponse);
        setInitialData(Object.values(modifiedResponse).flat());
    };

    const seedValue = apiResponse?.data?.info?.seed;
    useEffect(() => {
        setCompKey(!isEmpty(userData) ? seedValue : Math.random().toString());
    }, [userData, seedValue]);

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const listCopy = { ...userData };

        const sourceList = listCopy[result.source.droppableId];
        const [removedElement, newSourceList] = removeFromList(
            sourceList,
            result.source.index
        );
        listCopy[result.source.droppableId] = newSourceList;
        const destinationList = listCopy[result.destination.droppableId];
        listCopy[result.destination.droppableId] = addToList(
            destinationList,
            result.destination.index,
            removedElement
        );

        setUserData(listCopy);
    };

    return (
        <Styled.AppContainer>
            <Styled.SearchBoxWrapper>
                <Styled.SearchBoxLabel>Search By Name : </Styled.SearchBoxLabel>
                <SearchBox
                    initialData={initialData}
                    setUserData={setUserData}
                    optimizeResponse={optimizeResponse}
                />
            </Styled.SearchBoxWrapper>
            <Styled.MainContainter>
                {isEmpty(userData) && !loading ? (
                    <Styled.NoResultImage src={'NoResults.png'} />
                ) : (
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Styled.ListGrid key={compKey}>
                            {columns.map((column) => {
                                return (
                                    <Fragment key={column}>
                                        <ColumnElement
                                            column={column}
                                            values={userData[column]}
                                            isDropDisabled={
                                                !isEqual(
                                                    initialData.length,
                                                    Object.values(
                                                        userData
                                                    ).flat().length
                                                )
                                            }
                                        />
                                    </Fragment>
                                );
                            })}
                        </Styled.ListGrid>
                    </DragDropContext>
                )}
            </Styled.MainContainter>
        </Styled.AppContainer>
    );
};

export { DND_Randomuser };
