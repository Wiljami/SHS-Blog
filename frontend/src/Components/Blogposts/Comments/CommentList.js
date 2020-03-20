import React, { Fragment, Component } from 'react'
import { withStyles }  from '@material-ui/core/styles'
import Comment from "./Comment"
import Box from '@material-ui/core/Box'

const useStyles = theme => ({
  rightPane: {
    padding: "0 30px",
    height: 500
  },
});

class CommentList extends Component {

    constructor(props) {
        super(props);
    }

    render(){
    const { classes } = this.props;
        return <Fragment>
                <Box>
                    <h5>
                    <span>{this.props.comments.length}</span>{" "} Comment{this.props.comments.length > 0 ? "s" : ""}
                    </h5>

                    {/*  Used to give a alert if there are no comments made yet. */}
                    {this.props.comments.length === 0 && !this.props.loading ? (
                    <Box>
                        Be the first to comment.
                    </Box>
                    ) : null}

                    {this.props.comments.map((comment,index) => (
                    <Comment key={index} comment={comment} />
                    ))}
                </Box>
          </Fragment>
    }

}

export default withStyles(useStyles) (CommentList)