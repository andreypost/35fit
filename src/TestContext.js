import React from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';

// function Toolbar(props) {
//   return(
//     <ThemeTogglerButton onClick={props.changeTheme}>
//       change theme...
//     </ThemeTogglerButton>
//   )
// }
export default class TestContext extends React.Component {
  constructor(props) {
    super(props)
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }))
    }
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    }
  }
  render() {
    return(
      <ThemeContext.Provider value={this.state}>
        <ThemeTogglerButton />
      </ThemeContext.Provider>
    )
  }
}























