import React from 'react';
import styled from 'styled-components';

export const AppContainer = styled.div`
    background-image: linear-gradient(
        to right top,
        #051937,
        #004d7a,
        #008793,
        #00bf72,
        #a8eb12
    );
    min-height: 100vh;
    padding: 1rem;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
`;
export const MainContainter = styled.div`
    padding: 1.5rem;
    display: flex;
    justify-content: center;
`;

export const ListGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
`;

export const ColumnHeader = styled.div`
    text-transform: uppercase;
    margin-bottom: 20px;
`;

export const DroppableStyles = styled.div`
    padding: 10px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    -webkit-backdrop-filter: blur(15.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Avatar = styled.img`
    height: 30px;
    width: 30px;
    border: 3px solid white;
    border-radius: 50%;
`;

export const CardHeader = styled.div`
    font-weight: 500;
`;

export const Author = styled.div`
    display: flex;
    align-items: center;
`;
export const CardFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DragItem = styled.div`
    padding: 0.75rem;
    margin: 1rem;
    -webkit-box-shadow: 18px 19px 19px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 18px 19px 19px rgba(0, 0, 0, 0.5);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`;

export const SearchBoxWrapper = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: right;
`;
export const SearchBoxLabel = styled.label`
    display: flex;
    align-items: center;
    padding-right: 1rem;
`;
export const NoResultImage = styled.img`
    display: flex;
    height: 80vh;
`;
export const AlignCenter = styled.div`
    align-items: center;
    display: flex;
    height: 90vh;
`;

export const SearchBoxInput = styled.input`
    outline: none;
    padding: 10px 20px;
    border: 1px solid #b7b7b7;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -o-text-overflow: clip;
    text-overflow: clip;
    -webkit-box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2) inset;
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2) inset;
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.66);
    -webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
    -moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
    -o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
    transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
`;
