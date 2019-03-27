import React from 'react';
import ReactDOM from 'react-dom';
import {Prueba} from './Prueba';
import { equal } from 'assert';

it('Prueba báscia', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Prueba />, div);

  //Assert
  let oLabel = div.getElementsByTagName("label")[0];
  equal(oLabel.innerHTML, "Prueba")

  ReactDOM.unmountComponentAtNode(div);
});

it('Prueba báscia2', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Prueba />, div);
  
    //Assert
    let oLabel = div.getElementsByTagName("label")[0];
    equal(oLabel.innerHTML, "Prueba")
  
    ReactDOM.unmountComponentAtNode(div);
  });