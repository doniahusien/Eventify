import {events} from '../../../../productData'

export default function handler(req, res) {
    let id = req.query.id
    let event = events.find( p=>p.id == id)
    res.status(200).json(event)
  }
  