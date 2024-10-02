import { STATUS } from "../CONST.js";

export class CascadeStrategy {
  constructor(customer, factory, kycApplication) {
    this.customer = customer;
    this.factory = factory;
    this.kycApplication = kycApplication;
  }

  async executeSteps(factory, customer, kycApplication) {
    const edvStep = factory.createstep("edv");
    await edvStep.execute(customer, kycApplication);

    if (kycApplication.status === STATUS.APPROVED) {
      console.log("EDV approved. Skipping further steps.");
      return;
    }

    const idvStep = factory.createstep("idv");
    await idvStep.execute(customer, kycApplication);

    if (kycApplication.status === STATUS.APPROVED) {
      console.log("IDV approved. Skipping further steps.");
      return;
    }

    const ageStep = factory.createstep("age");
    await ageStep.execute(customer, kycApplication);

    if (kycApplication.status === STATUS.APPROVED) {
      console.log("KYC completed successfully.");
    } else {
      console.log("All Failed");
    }
  }
}
