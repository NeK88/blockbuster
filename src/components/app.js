import { Component } from "../lb/react/index.js";
import styled from "../lb/styled-components.js";
import Header from "./header.js";
import Actions from "./actions.js";
import Search from "./search.js";
import Filters from "./filters.js";
import MovieList from "./movie.js";

const AppStyled = styled.div``;

class App extends Component {
  render() {
    return AppStyled({
      children: [
        new Header(),
        new Actions({
          children: [new Search(), new Filters()],
        }),
        new MovieList(),
      ],
    });
  }
}

export default App;
