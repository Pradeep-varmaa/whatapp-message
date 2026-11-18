import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ "Message": "Hello, this is a test message from the Next.js API route!" });
}

export async function POST(request: Request) {
  const requestData = await request.json();

  console.log(requestData);

  const to = String(requestData.customer).replace(/\D/g, "");

  const sendmessage = {
    messaging_product: "whatsapp",
    to,
    type: "template",
    template: {
      name: "hello_world",
      language: { code: "en_US" },
    },
  };
  
  const response = await fetch("https://corridor-giddiness-concur.ngrok-free.dev/api/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer wae_live_-57qWQY1vMIa_oECLpaZaltjXoDuXy8YNTRkUpM6VqQ"
    },
    body: JSON.stringify(sendmessage)
  });
  const data = await response.json();
  return NextResponse.json({ success: true, data: data });
}

// wae_live_-57qWQY1vMIa_oECLpaZaltjXoDuXy8YNTRkUpM6VqQ


