import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const Pilots = props => (
  <Layout>
    <h1>Pilots</h1>
    <ul>
      {props.pilots.map(pilot => (
        <li key={pilot.id}>{pilot.firstName}</li>
      ))}
    </ul>
  </Layout>
);

Pilots.getInitialProps = async function() {
  const res = await fetch("https://labs9-flight-log.herokuapp.com/pilots");
  const data = await res.json();
  console.log(`Fetched ${data.length} records`);

  return {
    pilots: data
  };
};

export default Pilots;
