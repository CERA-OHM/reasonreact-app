/* Square.re */

let make = (~color: string) => {
  <div style=ReactDOM.Style.make(~backgroundColor=color, ()) />;
};

/* Default export */
export default make;
