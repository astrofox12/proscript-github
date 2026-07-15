async function hmacSha1(message, secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    {
      name: "HMAC",
      hash: "SHA-1"
    },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(message)
  );

  return [...new Uint8Array(signature)]
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}


export default {

  async fetch(request, env) {

    const url = new URL(request.url);


    if (url.pathname === "/") {

      return Response.json({
        status: "ok",
        worker: "gateline",
        uid: env.GATELINE_UID
      });

    }


    if (url.pathname === "/create-payment") {


      const params = {

        amount: "3.00",

        description: "Test payment",

        merchant_order_id: "TEST_ORDER_001",

        return_success_url:
          "https://proscriptacademy.com/payment/success",

        return_failure_url:
          "https://proscriptacademy.com/payment/failure"

      };


      // сортировка параметров как требует GateLine

      const sortedParams =
        Object.keys(params)
          .sort()
          .map(
            key => `${key}=${params[key]}`
          )
          .join(";");


      const signString =
        `/checkout/pay;${sortedParams}`;


      const checksum =
        await hmacSha1(
          signString,
          env.GATELINE_PASSWORD
        );


      const form =
        new URLSearchParams(params);


      const response =
        await fetch(
          "https://api.sandbox.gateline.net:18210/checkout/pay",
          {

            method: "POST",

            headers: {

              "Content-Type":
                "application/x-www-form-urlencoded",

              "X-Authorization":
                `${env.GATELINE_UID} ${checksum}`

            },

            body: form

          }
        );


      const result =
        await response.text();


      return new Response(
        result,
        {
          headers: {
            "Content-Type": "application/xml"
          }
        }
      );

    }


    return new Response(
      "Not found",
      {
        status:404
      }
    );

  }

};