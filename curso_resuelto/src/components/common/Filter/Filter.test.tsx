import React from 'react';
import ReactDOM from 'react-dom';
import {Filter} from './Filter';

const Pintar=(btnText:string, value:string="")=>{
  let eventText:string="";
  let Element = <Filter onChange={(t)=>{eventText = t}} btnText={btnText} value={value||null} />

  const div = document.createElement('div');
  ReactDOM.render(Element, div);

  let oTestElement = div.firstChild as HTMLElement;
  expect(oTestElement.querySelector("button").innerHTML).toEqual(btnText);
  expect(oTestElement.querySelector("input").value).toEqual(value);

  oTestElement.querySelector("button").click();
  console.log(eventText);
  console.log(value);

  expect(eventText).toEqual(value);

  ReactDOM.unmountComponentAtNode(div);
}

it('Pintado básico', () => {
  Pintar("text")
});

it('Pintado con texto', () => {
  Pintar("text", "holi")
});