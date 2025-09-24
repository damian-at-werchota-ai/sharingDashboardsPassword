export default function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get the password from the request body
  const { password } = req.body;

  // Get the expected password from environment variable
  const expectedPassword = process.env.PORTFOLIO_PASSWORD;

  // Check if the password matches
  if (password === expectedPassword) {
    return res.status(200).json({ authenticated: true });
  }

  // Password doesn't match
  return res.status(401).json({ authenticated: false });
}
