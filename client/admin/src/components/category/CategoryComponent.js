import React, { Component } from 'react'
import { Button, Modal, Table, Spinner } from 'react-bootstrap'
import CategoryItem from './CategoryItem';
import API_URL from '../../settings/config';
import axios from 'axios';
class CategoryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            categorys: [],
            title: '',
            showModal: false,
            txtName: ''
        }
    }
    getCategory = () => {
        axios.get(`${API_URL}/category`)
            .then(res => {
                this.setState({
                    categorys: res.data,
                });
            })
            .catch(err => console.log(err))
    }
    async componentDidMount() {
        await this.getCategory();
    }
    onEdit = (id) => {
        axios(`${API_URL}/category/${id}`)
            .then(res => {
                this.setState({
                    id: id,
                    showModal: true,
                    title: 'Sửa danh mục',
                    txtName: res.data.nameCategory
                });
                console.log(this.state.id)
            }).catch(error => console.log(error))
    }
    onDelete = (id) => {
        const { categorys } = this.state;
        axios.delete(`${API_URL}/category/${id}`)
            .then(res => {
                if (res.status === 200) {
                    var index = this.findIndex(categorys, id);
                    if (index !== -1) {
                        categorys.splice(index, 1);
                        window.location.reload();
                        // this.getCategory();
                    }
                }
            })
            .catch(err => console.log(err))
    }
    findIndex = (categorys, id) => {
        var resutl = -1;
        categorys.forEach((category, index) => {
            if (category.id === id) {
                resutl = index;
            }
        })

        return resutl;
    }
    showCategory(category) {
        var result = null;
        if (category.length > 0) {
            result = category.map((item, index) => {
                return (
                    <CategoryItem
                        key={index}
                        index={index}
                        _id={item._id}
                        name={item.nameCategory}
                        onDelete={this.onDelete}
                        onEdit={this.onEdit}
                    />
                );
            });
        } else {
            return (<Spinner animation="grow" variant="success">
                <span className="sr-only">Loading...</span>
            </Spinner>)
        }
        return result;
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
        // console.log(value)
    }
    onSave = (e) => {
        e.preventDefault();
        var { txtName, id } = this.state;
        console.log(id)
        if (id) {
            axios.post(`${API_URL}/category/update/${id}`, {
                nameCategory: txtName,
            }).then(res => {
                this.setState({ showModal: !this.state.showModal })
                this.getCategory();
            }).catch(error => console.log(error))
        } else {
            this.setState({
                txtName: '',
            })
            axios.post(`${API_URL}/category/add`, {
                nameCategory: txtName,
            })
                .then(res => {
                    this.setState({ showModal: !this.state.showModal, txtName: '' })
                    this.getCategory();
                })
                .catch(error => console.log(error))
        }
    }

    render() {
        const { categorys, showModal, txtName, title } = this.state;
        return (
            <>
                <h1>Danh mục</h1>
                <div className="text-right">
                    <Button type="button" className="btn btn-primary mb-10" onClick={() => {
                        this.setState({
                            showModal: true,
                            title: 'Thêm danh mục'
                        })
                    }}>Thêm danh mục</Button>
                </div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên danh mục</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showCategory(categorys)}
                    </tbody>
                </Table>

                <Modal show={showModal} onHide={() => {
                    this.setState({
                        showModal: false,
                    })
                }}>
                    <form onSubmit={this.onSave}>
                        <Modal.Header closeButton>
                            <Modal.Title>{title.toString()}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>

                            <label>Tên danh mục</label>
                            <input className="form-control" type="text" name="txtName" value={txtName} onChange={this.onChange} />

                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" type='button' onClick={() => { this.setState({ showModal: false, txtName: '' }) }}>Đóng</Button>
                            <Button variant="primary" type="submit">Save changes</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </>
        )
    }
}

export default CategoryComponent
