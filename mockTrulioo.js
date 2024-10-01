export function mocktrulio(customer) {
  const { id } = customer;
  if (id === "001") {
    return "idvApproved";
  } else if (id === "002") {
    return "IdvRejected";
  }
}
