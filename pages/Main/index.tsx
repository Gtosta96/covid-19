import React from "react";
import Headline from "./Headline";

import Why from "./Why";
import Historical from "./Historical";

export const getData = async () => {
  const res = await fetch(
    "https://brasil.io/api/dataset/covid19/caso/data?is_last=True&place_type=state"
  );
  const posts = await res.json();

  return { props: { posts } };
};

const Main: React.FC = (props) => {
  const [data, setData] = React.useState<any>();

  React.useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  let total = data
    ? data.props.posts.results.reduce((prev, cur) => prev + cur.confirmed, 0)
    : 0;
  total = total.toLocaleString("pt-BR");

  return (
    <main>
      <Headline />
      <Why />
      <Historical />
    </main>
  );
};

export default React.memo(Main);
