const Share = require('./db');

const Add = (obj) => {
    let share = new Share(obj);
    share.save((err) => {
        if(err)
            console.log(err);
    })
}

const Update = (id, obj) => {
    let share = Share.findByIdAndUpdate(id, obj, {new: true});
}

const Find = (id) => {
    let share = Share.findOne({id: id});
}

const Delete = (id) => {
    let share = Share.findOneAndDelete({id:id});
}

module.exports = {
    Add: Add,
    Update: Update,
    Find: Find,
    Delete: Delete
}