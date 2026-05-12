const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { items } = req.body;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: items.map((item) => ({
        price: item.price,
        quantity: item.quantity,
      })),

      metadata: {
        order: JSON.stringify(
          items.map((item) => ({
            name: item.name,
            size: item.size,
            quantity: item.quantity,
          }))
        ),
      },
      success_url: "https://YOUR-WEBSITE.com/success",
      cancel_url: "https://YOUR-WEBSITE.com",
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
