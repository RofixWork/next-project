export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((dt) => {
    return {
      params: { id: dt.id.toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + params.id
  );
  const data = await res.json();

  return {
    props: { item: data },
  };
};

const Details = ({ item }) => {
  return (
    <div>
      <h1>Details</h1>
      <h3>Name: {item.name}</h3>
      <h3>Email: {item.email}</h3>
      <h3>Phone: {item.phone}</h3>
    </div>
  );
};

export default Details;
