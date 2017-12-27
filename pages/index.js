import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
  <Layout>
    <h1>Star Wars films</h1>
    <ul>
      {props.films.map((film) => (
        <li key={film.episode_id}>
          <Link href={`/film?id=${film.episode_id}`}>
            <a>{film.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch('https://swapi.co/api/films');
  const data = await res.json();
  const films = data.results;

  return {
    films: films
  }
};

export default Index;