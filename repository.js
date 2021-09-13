const Share = require('./db');

//TODO Transform data

const Add = async (obj) => {
    let share = new Share(obj);
    return await share.save();
}

const Update = async (id, obj) => {
    let share = await Share.findOneAndUpdate({id: id}, obj, {new: true}).exec();
    return share;
}

const Find = async (id) => {
    let share = Share.findOne({id: id}).exec();
    return share;
}

const Delete = async (id) => {
    let share = await Share.findOneAndDelete({id:id}).exec();
    return share;
}

module.exports = {
    Add: Add,
    Update: Update,
    Find: Find,
    Delete: Delete
}