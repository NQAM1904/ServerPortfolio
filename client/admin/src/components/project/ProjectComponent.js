import React, { Component } from 'react'
import { Button, Form, Modal, Table, Spinner } from 'react-bootstrap';
import API_URL from '../../settings/config';
import axios from 'axios';
import ProjectItem from './ProjectItem';
class ProjectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            id: '',
            title: '',
            txtName: '',
            txtUrl: '',
            txtGitHub: '',
            image: '',
            selectCategory: '',
            category: [],
            showModal: false,
            isLoading: false

        }

    }
    getData = async () => {
        try {
            await axios.get(`${API_URL}/projects`)
                .then(res => {
                    this.setState({
                        isLoading: false,
                        projects: res.data,
                    });
                    console.log(this.state.projects)
                })
                .catch(err => console.log(err))
        }
        catch (e) {
            console.log('error', e)
        }
    }
    componentDidMount() {
        console.log('comonentDidMount')
        this.getData();

        axios.get(`${API_URL}/category`)
            .then(res => {
                this.setState({
                    category: res.data
                });
            })
            .catch(err => console.log(err))
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    onDelete = (id) => {
        const { projects } = this.state;
        this.setState({ isLoading: true })
        axios.delete(`${API_URL}/projects/${id}`)
            .then(res => {
                if (res.status === 200) {
                    var index = this.findIndex(projects, id);
                    if (index !== -1) {
                        projects.splice(index, 1);
                        this.setState({
                            isLoading: false,
                            projects: projects
                        });

                    }
                    window.location.reload();
                }
            })
            .catch(err => console.log(err))
    }
    findIndex = (projects, id) => {
        var resutl = -1;
        projects.forEach((project, index) => {
            if (project.id === id) {
                resutl = index;
            }
        })

        return resutl;
    }
    showProject(projects) {
        var result = null;
        if (projects.length > 0) {
            result = projects.map((item, index) => {
                return (
                    <ProjectItem
                        key={index}
                        index={index}
                        _id={item._id}
                        name={item.name}
                        deployed_url={item.deployed_url}
                        github_url={item.github_url}
                        image={item.image}
                        // nameCategory={item.category.nameCategory}
                        onDelete={this.onDelete}
                    />
                )
            })
        }
        return result;
    }

    onSave = (e) => {

        e.preventDefault();
        const { txtName, txtUrl, txtGitHub, image, selectCategory } = this.state;
        var bodyFormData = new FormData();
        bodyFormData.append('name', txtName);
        bodyFormData.append('deployed_url', txtUrl);
        bodyFormData.append('github_url', txtGitHub);
        bodyFormData.append('image', image);
        bodyFormData.append('category', selectCategory);

        axios.post(`${API_URL}/projects/add`, bodyFormData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(result => {
                console.log(result)

            })
            .catch(error => console.log('error', error));


    }
    render() {
        const { projects, title, txtName, txtUrl, txtGitHub, selectCategory, showModal, isLoading } = this.state;
        // console.log(this.state)
        console.log('render')
        const showProject = isLoading === true ?
            (<div className="text-center">
                <Spinner animation="grow" variant="success" >
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>)
            : <Table striped bordered hover variant="dark" responsive="lg">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên </th>
                        <th>Hình ảnh</th>
                        <th>Page-Url</th>
                        <th>Github-URL</th>
                        <th>Danh mục</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {this.showProject(projects)}
                </tbody>
            </Table>
        return (

            <>
                <h1>Projects</h1>
                <div className="text-right">
                    <Button type="button" className="btn btn-primary mb-10" onClick={() => {
                        this.setState({
                            showModal: true,
                            title: 'Thêm project'
                        })
                    }}>Thêm Project</Button>
                </div>


                {showProject}
                {/* {isLoading === true ? (<div className="text-center">
                    <Spinner animation="grow" variant="success" >
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>) : ''} */}
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={showModal} onHide={() => {
                        this.setState({
                            showModal: false,
                        })
                    }}>
                    <Form onSubmit={this.onSave}>
                        <Modal.Header closeButton>
                            <Modal.Title>{title.toString()}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label>Tên</label>
                            <input className="form-control" type="text" name="txtName" value={txtName} onChange={this.onChange} />

                            <label>Hình ảnh</label>
                            <Form.File
                                id="custom-file-translate-scss"
                                label="Hình ảnh"
                                lang="en"
                                custom
                                type="file" onChange={(e) => {
                                    this.setState({
                                        image: e.target.files[0]
                                    });
                                    console.log(e.target.files[0])
                                }
                                }
                            />
                            <label>URL</label>
                            <input className="form-control" type="text" name="txtUrl" value={txtUrl} onChange={this.onChange} />

                            <label>GITHUB</label>
                            <input className="form-control" type="text" name="txtGitHub" value={txtGitHub} onChange={this.onChange} />

                            <label>Danh Mục</label>
                            <select className="form-control" size="as" as="select" onChange={this.onChange} value={selectCategory} name="selectCategory">
                                {this.state.category.map((item, index) => {
                                    // console.log(selectCategory)
                                    return (
                                        <option value={item._id} key={index} > { item.nameCategory}</option>
                                    )
                                })}
                            </select>


                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" type='button' onClick={() => { this.setState({ showModal: false }) }}>Đóng</Button>
                            <Button type='submit'>Lưu</Button>
                            {/* <input type='submit' /> */}
                        </Modal.Footer>
                    </Form>
                </Modal>
            </>
        )
    }
}
export default ProjectComponent;
