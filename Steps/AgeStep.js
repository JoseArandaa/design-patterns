import { IStep } from "./IStep.js";
import { STATUS } from "../CONST.js";
export default class AgeStep extends IStep {
  execute(customer, kycApplication) {
    if (customer.getAge() < 18) {
      kycApplication.status = STATUS.REJECTED;
      return false;
    } else if (customer.getAge() >= 18) {
      kycApplication.status = STATUS.APPROVED;
      return true;
    }
  }
}
