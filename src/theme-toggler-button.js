import React from 'react';
import { ThemeContext } from './theme-context';

export const ThemeTogglerButton = () => {
  return(
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <button onClick={toggleTheme} style={{background: theme.background, color: theme.color}}>
          change theme...
        </button>
      )}
    </ThemeContext.Consumer>
  )
}

/*
export default class ThemedButton extends React.Component {
  render() {
    let props = this.props
    let theme = this.context
    console.log(this.context)
    return(
      <button {...props} style={{background: theme.background, color: theme.color}} className="white" />
    )
  }
}
ThemedButton.contextType = ThemeContext;
*/