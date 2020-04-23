import React from 'react';
import { NavigationGl } from './NavigationGl';

export const HeaderGl = (props) => {
  const articulos = props.articulos
  return (  
      <header className={props.clase}>
        <NavigationGl />
        <section>
          <article className="flex justStart headerGroupGl">
            <hgroup className="five alignLf">
              <h1>{articulos[0]}</h1>
              <h3>{articulos[1]}</h3>
            </hgroup>
          </article>
        </section>
      </header>
  );
}
