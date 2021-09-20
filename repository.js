const Share = require('./db');

const Add = async (obj) => {
    let share = new Share(obj);
    return await share.save();
}

const Update = async (id, obj) => {
    let share = await Share.findOneAndUpdate({id: id}, obj, {new: true}).exec();
    return share;
}

const Find = async (id) => {
    let share = await Share.findOne({id: id}).exec();
    return share;
}

const Delete = async (id) => {
    let share = await Share.findOneAndDelete({id:id, editable:true}).exec();
    return share;
}

module.exports = {
    Add: Add,
    Update: Update,
    Find: Find,
    Delete: Delete
}