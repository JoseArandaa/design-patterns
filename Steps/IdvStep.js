import { STATUS } from "../CONST.js";
import { IStep } from "./IStep.js";
import { mocktrulio } from "../mockTrulioo.js";

export default class IdvStep extends IStep {
  async execute(customer, kycApplication) {
    const response = mocktrulio(customer, kycApplication);
    try {
      if (response == "idvApproved") {
        kycApplication.status = STATUS.APPROVED;
      } else if (response == "IdvRejected") {
        kycApplication.status = STATUS.REJECTED;
      }
    } catch (error) {
      console.error(error.message);
    }
  }
}
