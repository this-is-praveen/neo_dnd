import { Droppable } from 'react-beautiful-dnd';
import * as Styled from '../styles';
import React from 'react';
import { CardItem } from './cardItem';

const ColumnElement = (props) => {
    const { column = '', values = [], isDropDisabled = false } = props || {};
    return (
        <Styled.DroppableStyles>
            <Styled.ColumnHeader>{column}</Styled.ColumnHeader>
            <Droppable isDropDisabled={isDropDisabled} droppableId={column}>
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {values.map((item, index) => {
                            return (
                                <CardItem
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    isDragDisabled={isDropDisabled}
                                />
                            );
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </Styled.DroppableStyles>
    );
};

export { ColumnElement };
