export async function mockApiAristotle(customer) {
  const { id } = customer;
  try {
    const responseAristotle = await fetch(
      "http://localhost:3000/confirmation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customerId: id }),
      }
    );
    const responseText = await responseAristotle.text();
    try {
      const data = JSON.parse(responseText);
      return data;
    } catch (error) {
      console.error("Error parsing JSON:", error.message);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
