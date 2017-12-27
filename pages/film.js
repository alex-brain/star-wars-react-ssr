import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const linkStyle = {
  marginRight: 15
};

const Film =  (props) => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Layout>
      <h1>{props.film.title}</h1>
      <p>{props.film.opening_crawl}</p>
    </Layout>
  </div>
);

Film.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://swapi.co/api/films/${id}`);
  const film = await res.json();

  return { film };
};

export default Film;