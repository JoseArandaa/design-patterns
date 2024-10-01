import AgeStep from "./Steps/AgeStep.js";
import EdvStep from "./Steps/EdvStep.js";
import IdvStep from "./Steps/IdvStep.js";

export default class StepFactory {
  constructor(customer, kycApplication) {
    this.customer = customer;
    this.kycApplication = kycApplication;
  }

  createstep(type) {
    switch (type) {
      case "age":
        return new AgeStep(this.customer, this);
      case "edv":
        return new EdvStep(this.customer, this);
      case "idv":
        return new IdvStep(this.customer, this);
      default:
        throw new Error("Unknown Step Type");
    }
  }
}
