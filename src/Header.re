/* Header.re */

let make = (~name: string) => {
  <header>
    {React.string("Name: " ++ name)}
  </header>;
};

/* Default export */
export default make;
