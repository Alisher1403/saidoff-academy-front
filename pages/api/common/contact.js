import { base_url } from "../base_url";

export default async function subscribe(req, res) {
  if (req.method === "POST") {
    const response = await fetch(`${base_url}/common/contact/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    res.status(response.status).json(response);
  }
}
