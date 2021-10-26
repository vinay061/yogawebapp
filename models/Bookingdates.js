const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    bookingdayone: {
        type: String,
        required: true
    },
    bookingdaytwo: {
        type: String,
        required: true
    },
    bookingdaythree: {
        type: String,
        required: true
    },
    bookingdayfour: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, 'Please enter the email id'],
        maxlength: [50, 'eMail cannot be more than 50 characters']
    }
})

module.exports = mongoose.models.Bookingdates || mongoose.model('Bookingdates', BookingSchema)