import { Link } from 'react-router-dom';

const BuildPage = (index) => (
  <>
    <h3>Page {index}</h3>
    <div>Page {index} content:</div>
  </>
);

export const PageOne = () => BuildPage(1);
export const PageTwo = () => BuildPage(2);
export const PageError = () => BuildPage('This Error');
