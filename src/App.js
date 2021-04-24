import React from "react";
import { connect } from "react-redux";
import { fetchAction } from "./actions/fetchAction";
import Post from "./Post";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => this.props.fetchAction()}>Fetch Data</button>
        {this.props.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  fetchAction: () => dispatch(fetchAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
