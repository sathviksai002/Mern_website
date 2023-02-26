const courseModel = require("../models/courseModel")

//read

module.exports.getAllCourses = async function(){
    return await courseModel.find({});
}


//create the course

module.exports.createCourse = async function(courseInput){
    const course = new courseModel(courseInput);
    await course.save();
}

//update the course

module.exports.updateCourse = async function(courseId, updatedInput){
    await courseModel.findOneAndUpdate({_id: courseId},updatedInput);
}


module.exports.createFirstCourse = async function(){
    
    const courses = await courseModel.find({});
    if(courses && courses.length == 0){
    const firstCourseInput = {
        "title" : "bz DSA",
        "level" : "easy"
    };
    const course = new courseModel(firstCourseInput);

    await course.save();
}
}