import { mockApiAristotle } from "../mockApiAristotle.js";
import { IStep } from "./IStep.js";
import { STATUS } from "../CONST.js";
export default class EdvStep extends IStep {
  async execute(customer, kycApplication) {
    try {
      const response = await mockApiAristotle(customer);
      if (response.status == "edvApproved") {
        kycApplication.status = STATUS.APPROVED;
      } else if (response.status == "EdvNeedIdv") {
        kycApplication.status = STATUS.REJECTED;
      }
    } catch (error) {
      console.error(error.message);
    }
  }
}
