const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    bookingdayone: {
        type: Date,
        required: true
    },
    bookingdaytwo: {
        type: Date,
        required: true
    },
    bookingdaythree: {
        type: Date,
        required: true
    },
    bookingdayfour: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: [true, 'Please enter the email id'],
        maxlength: [50, 'eMail cannot be more than 50 characters']
    }
})

module.exports = mongoose.models.Bookingdates || mongoose.model('Bookingdates', BookingSchema)