import { useEffect } from "react";
import { Layout, Navbar, Content } from "../components";

export default function Home({ games }) {
  const test = "TEST";

  useEffect(() => {
    console.log(games.results);
  }, []);

  return (
    <Layout>
      <Navbar />
      <Content />
    </Layout>
  );
}

export async function getServerSideProps() {
  // const url = `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_KEY}&page_size=10`;
  const res = await fetch(
    `https://api.rawg.io/api/games?key=33270e8f024f4b0685fd782b29664761&page_size=10`
  );
  const games = await res.json();

  return {
    props: {
      games,
    }, // will be passed to the page component as props
  };
}
