import React from 'react';
import {Link} from 'react-router-dom'
import WorkspaceDropdownContainer from './dropdowns/workspace_dropdown_container'

class Workspace extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            workspaces: []
        }

    }
    

    render () {
        if(this.props.workspaces){
            return (
                <div className='workspace-parent-container'>
                    <div className='workspace-header'>
                        Workspace
                    </div>
                    <WorkspaceDropdownContainer workspaces={this.props.workspaces} />
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Workspace;