import React from "react";
import { connect } from "react-redux";
import { fetchAction } from "./actions/fetchAction";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => this.props.fetchAction()}>Fetch Data</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state
});

const mapDispatchToProps = (dispatch) => ({
  fetchAction: () => dispatch(fetchAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
