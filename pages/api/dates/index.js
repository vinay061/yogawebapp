import dbConnect from "../../../utils/dbConnect";
import Bookingdates from "../../../models/Bookingdates";

dbConnect()

export default async function handler(req, res) {
    const { method } = req

    switch(method) {
        case 'GET':
            try{
                const bookingdata = await Bookingdates.find({})
                res.status(200).json({success: true, data: bookingdata})
            }
            catch(error){
                res.status(400).json({success: false, info: 'Unable to get details'})
            }
            break
        case 'POST':
            try{
                const customerdata = await Bookingdates.create(req.body)
                res.status(200).json({success: true, data: customerdata})
            }
            catch(error){
                res.status(400).json({success: false, info: 'Unable to insert the details'})
            }
            break
        default:
            res.status(400).json({success: false})
            break
    }
}