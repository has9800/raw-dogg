export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&page_size=10`
      );

      const { results } = await response.json();

      res.setHeader(
        "Cache-Control",
        "public, s-maxage=1200, stale-while-revalidate=600"
      );

      return res.status(200).json(JSON.stringify(results));
    } catch (error) {
      return res.status(400).send({ message: "API ERROR!" });
    }
  }
}
