import Link from "next/link";
import Head from "next/head";
const api = "https://jsonplaceholder.typicode.com/users";

export const getStaticProps = async () => {
  try {
    const response = await fetch(api);
    const data = await response.json();

    return {
      props: { items: data },
    };
  } catch (error) {
    console.log(error.message);
  }
};

const index = ({ items }) => {
  return (
    <>
      <Head>
        <title>Information</title>
      </Head>
      <section>
        <h1>Information</h1>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <Link href={`/info/${item.id}`}>
                  <a>
                    <h3>{item.name}</h3>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default index;
