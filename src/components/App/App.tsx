import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from '../../features/counter/Counter';
import { useAppSelector } from '../../app/hooks';
import { selectCount } from '../../features/counter/counterSlice';

type BoxProps = {
    children: string
}

const Box: FC<BoxProps> = ({children}) => {
    return (
        <div>{children}</div> 
    )
}

const Header: FC = () => {
    const count = useAppSelector(selectCount);

    return (
        <header>
            <Box>{`valeur du count : ${count}`}</Box>
        </header>
    )
}

const App = () => {

  return (
    <div className="App">
        <Header ></Header>
        <Counter />
        <Counter />
    </div>
  );
}

export default App;
