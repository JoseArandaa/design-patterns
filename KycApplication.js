import StepFactory from "./StepFactory.js";

export class KycApplication {
  constructor(customer) {
    this.customer = customer;
    this.status = "pending";
  }

  async process(strategy) {
    const factory = new StepFactory(this.customer, this);
    await strategy.executeSteps(factory, this.customer, this);
  }
}
