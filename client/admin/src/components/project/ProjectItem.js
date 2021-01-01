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
    function formatSubstring(value) {
        if (value.length > 25) {
            return value.substring(0, 25) + '...'
        }
    }
    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{props.name}</td>
            <td><img src={'http://mern-stack-admin.herokuapp.com/' + props.image} width="80" height="80" alt="img" /></td>
            <td>{formatSubstring(props.github_url)}</td>
            <td>{formatSubstring(props.deployed_url)}</td>
            <td>{props.nameCategory}</td>
            <td className="text-center">
                <button className="btn btn-warning mr-10 white" onClick={() => onEdit(props._id)}>Sửa</button>
                <button className="btn btn-danger" onClick={() => onDelete(props._id)}>Xóa</button>
            </td>
        </tr>
    );
}

export default ProjectItem;
