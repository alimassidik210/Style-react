import NavComp from "./Functional/NavComp";
import Jumbotron from "./Functional/Jumbotron";
import Main from "./Functional/Main";

export default class Boostrap extends Component {
  render() {
    return (
      <div>
        <NavComp />
        <Jumbotron />
        <Main />
      </div>
    );
  }
}
