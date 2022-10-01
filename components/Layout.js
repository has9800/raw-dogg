import Head from "next/head";

function Layout({ children }) {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>RawDog</title>
        <meta name="description" content="RawDog Games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">{children}</main>
    </div>
  );
}

export default Layout;
