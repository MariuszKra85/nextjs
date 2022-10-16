import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const QUERY_USER = gql`
  query {
    allUsers {
      name
    }
  }
`;

export default function Home() {
  console.log('dziala!!!');
  const { data, loading, error } = useQuery(QUERY_USER);
  return (
    <div>
      <p>{console.log(data)}</p>
      <p>I love you my sweet little girl!!!</p>
      <p>it is work? abc</p>
    </div>
  );
}
