import React from 'react';

const CategoryItem = props => {

    function onDelete(id) {
        if (confirm(`Bạn có muốn xóa ${props.name} ? `)) { // eslint-disable-line
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
            <td className="text-center">
                <button className="btn btn-warning mr-10 white" onClick={() => onEdit(props._id)}>Sửa</button>
                <button className="btn btn-danger" onClick={() => onDelete(props._id)}>Xóa</button>
            </td>
        </tr>
    );
}

export default CategoryItem;
