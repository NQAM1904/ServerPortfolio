const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema; // lay id cua 1 object

const ProjectsSchema = new mongoose.Schema(
    {
        name: { type: String },
        image: { type: String },
        deployed_url: { type: String },
        github_url: { type: String },
        category: [
            {
                type: ObjectId,
                ref: "Category",
                required: true,
            }
        ]
    });
const Projects = mongoose.model("project", ProjectsSchema);
module.exports = Projects;