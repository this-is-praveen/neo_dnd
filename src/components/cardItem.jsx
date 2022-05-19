import { Draggable } from 'react-beautiful-dnd';
import * as Styled from '../styles';
import React from 'react';

const CardItem = (props) => {
    const { item, index, isDragDisabled } = props || {};

    return (
        <Draggable
            isDragDisabled={isDragDisabled}
            draggableId={`${item.id}`}
            index={index}
        >
            {(provided, snapshot) => {
                return (
                    <Styled.DragItem
                        ref={provided.innerRef}
                        {...snapshot}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <Styled.CardHeader>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Styled.CardHeader>
                        <Styled.CardFooter>
                            <span>{item.location.country}</span>
                            <Styled.Author>
                                <Styled.Avatar src={item.picture.thumbnail} />
                            </Styled.Author>
                        </Styled.CardFooter>
                    </Styled.DragItem>
                );
            }}
        </Draggable>
    );
};

export { CardItem };
