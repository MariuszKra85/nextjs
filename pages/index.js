import gql from 'graphql-tag';

const All_USER = gql`
  query {
    allUsers {
      id
    }
  }
`;

export default function Home() {
  return (
    <div>
      <p>I love you my sweet little girl!!!</p>
      <p>it is work? abc</p>
    </div>
  );
}
