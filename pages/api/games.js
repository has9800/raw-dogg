export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // await fetch(
      //   `https://api.rawg.io/api/games?key=069ac62242174bba98deeea8b0e4ffd3&page_size=1`
      // ).then((result) => result.json());
      // .then((data) => {
      //   return res.status(200).json(data);
      // });
      const response = await fetch(
        `https://api.rawg.io/api/games?key=069ac62242174bba98deeea8b0e4ffd3&page_size=10`
      );

      const { results } = await response.json();

      res.setHeader(
        "Cache-Control",
        "public, s-maxage=1200, stale-while-revalidate=600"
      );

      return res.status(200).json({ results });
    } catch (error) {
      return res.status(400).send({ message: "API SERVER ERROR" });
    }
  }
}
