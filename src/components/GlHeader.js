import React from 'react';
import { GlTopNav } from './GlTopNav';


export const GlHeader = (props) => {
  const article = props.articulos
  return (  
      <header className={props.clase}>
        <GlTopNav />
        <section>
          <article className="flex justStart headerGroupGl">
            <hgroup className="five alignLf">
              <h1>{article[0]}</h1>
              <h3>{article[1]}</h3>
            </hgroup>
          </article>
        </section>
      </header>
  );
}
