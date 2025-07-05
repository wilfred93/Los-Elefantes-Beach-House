const { handleContactForm } = require("../../core/contactHandler.ts");

exports.handler = async (event, context) => {
  console.log("contact api request - serverless func");

  // Get authorization header
  const authHeader = event.headers.authorization;
  const expectedToken = `Bearer ${process.env.EDGE_FUNCTION_SECRET}`;

  if (authHeader !== expectedToken) {
    console.log("Auth incorrect");
    console.log(authHeader);
    console.log(expectedToken);
    return {
      statusCode: 401,
      body: "Unauthorized",
    };
  }

  try {
    // Create a Request object compatible with the handleContactForm function
    const request = new Request("https://example.com", {
      method: event.httpMethod,
      headers: event.headers,
      body: event.body,
    });

    const response = await handleContactForm(request);

    return {
      statusCode: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: await response.text(),
    };
  } catch (error) {
    console.error("Error in contact form handler:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
