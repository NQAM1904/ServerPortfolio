import React from 'react';

const ProjectItem = props => {
    function onDelete(id) {
        if (confirm(`Bạn có muốn xóa ${props._id} ? `)) { // eslint-disable-line
            props.onDelete(id)
        }
    }

    function onEdit(id) {
        props.onEdit(id);
    }

    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{props.name}</td>
            <td><img src={'http://localhost:4000/' + props.image} width="100" height="100" /></td>
            <td>{props.github_url}</td>
            <td>{props.deployed_url}</td>
            <td className="text-center">
                <button className="btn btn-warning mr-10 white" onClick={() => onEdit(props._id)}>Sửa</button>
                <button className="btn btn-danger" onClick={() => onDelete(props._id)}>Xóa</button>
            </td>
        </tr>
    );
}

export default ProjectItem;
