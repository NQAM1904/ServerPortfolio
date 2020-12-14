const express = require('express');
const router = express.Router();
const Project = require('../models/project.model');
const Category = require('../models/category.model');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, './upload/');
    },
    filename: function (request, file, callback) {

        callback(null, Date.now() + file.originalname)
    },
});

const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 3,
    },
})

function ResultModel(message, data) {
    return {
        'status': 'success',
        'message': message,
        'data': data,
    }
}

router.route('/').get(async (req, res) => {
    try {
        await Project.find().populate({ path: 'category', model: Category })
            .then(project => res.status(200).json({ project }))
            .catch(err => res.status(500).json({ message: err.message }));
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// add Project

router.route('/add').post(upload.single('image'), (req, res) => {
    var image = req.file.path
    const { name, deployed_url, github_url, category } = req.body
    image = image.split('\\')[1]
    const newProject = new Project({ name, category, deployed_url, github_url, image });
    newProject.save()
        .then(() => {
            res.json(ResultModel('Thêm project thành công!', newProject))
        })
        .catch(err => res.status(400).json('Error:', + err));
});

// xóa project 

router.route('/:id').delete((req, res) => {
    Project.findByIdAndDelete(req.params.id)
        .then(() => res.json('Xóa thành công!'))
        .catch(err => res.status(400).json('Error:' + err));
})


module.exports = router;