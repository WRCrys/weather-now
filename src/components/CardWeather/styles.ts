import styled from 'styled-components';

export const Container = styled.main`
    margin: 2rem;
    height: 12rem;
    width: 25rem;
    background: #d9d9d9;
    border-radius: 15px;
    display: flex;

    #weather-illustrator {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 15px;
        height: 100%;
        width: 9rem;

        div { 
            display: flex;
            flex-direction: row;
            span { 
                font-size: 2.4rem;
                font-weight: 600;
            }
            p {
                margin-top: 0.5rem;
                margin-left: 0.2rem;
            }
        }
    }

    #weather-information {
        height: 100%;
        width: 16rem;        
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 0.5rem;

        div {
            display: flex;
            flex-direction: row;
            margin: 1rem;
        }

        button {
            font-size: 1rem;
            color: white;
            background: #3385ff;
            border: 0;
            border-radius: 2rem;
            padding: 0 2rem;
            height: 2.8rem;
            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.7);
            }
        }
    }

    #weather-loading {
        height: 12rem;
        width: 25rem;
        background: #d9d9d9;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const LoadingButton = styled.button`
    font-size: 1rem;
    background: #3385ff;
    border: 0;
    border-radius: 2rem;
    padding: 0 2rem;
    height: 2.8rem;
    width: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
`