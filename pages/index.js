import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const All_USER = gql`
  query {
    allUsers {
      id
    }
  }
`;

export default function Home() {
  const { data, error, loading } = useQuery(All_USER);
  console.log('dziala');
  console.log(data);
  return (
    <div>
      <p>I love you my sweet little girl!!!</p>
      <p>it is work? abc</p>
    </div>
  );
}
