//import { PaymentsService, paymentsService } from '../services/paymentsServices.js'
//
//class PaymentsController {
//  #paymentsService
//  constructor(
//    /** @type {PaymentsService} */ paymentsService) {
//    this.#paymentsService = paymentsService
//  }
//
//  handlePost = async (req, res, next) => {
//    try {
//      
//      const pid = req.query.id
//      const paymentIntent = await this.#paymentsService.createPaymentIntent(pid)
//      console.log(paymentIntent)
//
//      res.status(201).json({ status: 'success', payload: paymentIntent })
//    } catch (error) {
//      next(error)
//    }
//  }
//}
//
//export const paymentsController = new PaymentsController(paymentsService)