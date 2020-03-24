import React, { Component } from "react";
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import Comment from './Comment'
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'

class Comments extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    };
    this.addComment = this.addComment.bind(this);
  }
  componentDidMount() {
    // loading
    this.setState({ loading: true });
    this.fetching(this.props.currentPostId)
  }

  componentWillReceiveProps(nextProps) {
    this.fetching(nextProps.currentPostId)
  }

  fetching = (id) => {

    // get all the comments
    fetch("api/getComments/" + id, {
      credentials: 'same-origin'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }


  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    })
  }

  render() {
    var sorted_comments = this.state.comments.sort((a,b) => {
      return new Date(a.time).getTime() -
        new Date(b.time).getTime()
    }).reverse();

    return (
      <Box>
        <Box className="row">
          <Box className="col-12  pt-3 border-right">
            <CommentForm addComment={this.addComment} fetching={this.fetching} currentPostId =  {this.props.currentPostId}/>
            <CommentList
              loading={this.state.loading}
              comments={sorted_comments}
            />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Comments
