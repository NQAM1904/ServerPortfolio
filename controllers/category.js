const express = require('express');
const router = express.Router();
const Category = require('../models/category.model');


//lấy danh sách Category
router.route('/').get((req, res) => {
    Category.find()
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error:', + err));
});
function ResultModel(message, data) {
    return {
        'status': 'success',
        'message': message,
        'data': data,
    }
}
// Thêm Category


router.route('/add').post((req, res) => {
    const nameCategory = req.body.nameCategory;


    const newCategory = new Category({ nameCategory });
    // lưu dưới database
    newCategory.save()
        .then(() => res.json(ResultModel('Add Category Successed!', newCategory)))
        .catch(err => res.status(400).json('Error:', + err));
});

// lấy id category

router.route('/:id').get((req, res) => {
    Category.findById(req.params.id)
        .then(category => res.json(category))
        .catch(err => res.status(400).json('Error:', + err));
});
// xóa category

router.route('/:id').delete((req, res) => {
    Category.findByIdAndDelete(req.params.id)
        .then(() => res.json('Category Deleted!'))
        .catch(err => res.status(400).json('Error:', + err));
});

// sửa category

router.route('/update/:id').post((req, res) => {
    Category.findById(req.params.id)
        .then(categories => {
            categories.nameCategory = req.body.nameCategory;

            categories.save()
                .then(() => res.json('Update Category Successed!'))
                .catch(err => res.status(400).json('Error:', + err));
        })
        .catch(err => res.status(400).json('Error:', + err));

});
module.exports = router;