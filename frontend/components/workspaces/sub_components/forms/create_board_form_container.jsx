import { connect } from 'react-redux';
import BoardForm from './board_form';
import { createBoard } from '../../../../actions/board_actions';

/*
Export a container component for the `PostForm` that will be used to create a
new post. Map in a post object with empty values for each field as a `post` prop
along with a `formType` prop set to the string 'Create Post'. Additionally, map
in a function that will dispatch the appropriate action to the store on form
submission as an `action` prop.
*/
 

const mSTP = (state) => ({
    board: {title: '' },
    currentWorkspaceId: state.entities.users[state.session.id].current_workspace_id
})

const mDTP = (dispatch) => ({
    createBoard: (board, currentWorkspaceId) => dispatch(createBoard(board, currentWorkspaceId))
})

export default connect(mSTP, mDTP)(BoardForm)