import * as WorkspaceApiUtil from '../util/entities_api_util';
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';


const receiveProject = (project) => ({
    type: CREATE_PROJECT, 
    project
}) 

const removeProject = (project) => ({
    type: REMOVE_PROJECT, 
    project
}) 

export const createProject = (project, currentBoardId) => dispatch => (
    WorkspaceApiUtil.createProject(project, currentBoardId)
        .then(project => dispatch(receiveProject(project)))
)
  
export const deleteProject = (project) => dispatch => (
    WorkspaceApiUtil.deleteProject(project)
        .then(project => dispatch(removeProject(project)))
)
  