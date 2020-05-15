const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})



    // const me = new User({
    //     name: '    Ponmile',
    //     email: 'MYEMAIL@GMAIL.COM    ',
    //     password: 'valuation10' 
    // })

    // me.save().then(() => {

    // }).catch((error) => {
    //     console.log('Error!', error)
    // })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

    // const task = new Task({
    //     description: '   Eat'
    // })
            
    // task.save().then(() => {
    //     console.log(task)
    // }).catch((error) => {
    //     console.log(error)
    // })
