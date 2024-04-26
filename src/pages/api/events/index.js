import {events} from '../../../../productData'

export default function handler(req, res) {
    res.status(200).json(events)
  }