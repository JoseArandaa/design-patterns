import { Customer } from "./Customer.js";
import { KycApplication } from "./KycApplication.js";
import { StrictStrategy } from "./Strategies/StrictStrategy.js";
import { CascadeStrategy } from "./Strategies/CascadeStrategy.js";

const customer = new Customer("John", "Doe", "2005-01-01", "001");
const kycApplication = new KycApplication(customer);
const strategy = new StrictStrategy();

kycApplication
  .process(strategy)
  .then(() => {
    console.log(kycApplication.status);
  })
  .catch((error) => {
    console.error("Error during KYC process:", error);
  });
