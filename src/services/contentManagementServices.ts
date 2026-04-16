import { createClient } from "contentful";
import { GraphQLClient, gql } from "graphql-request";

const client = createClient({
  space: "lthkij62ze88",
  //accessToken: "X_i0JXmSKEiX7SwiBd17HP8rZLPCtoI5zeLhU6ol57k",
  host: "preview.contentful.com",
  accessToken: "7a3gYVP0TPC0FncF4w2szg0CfIxx38W0EjfErjaf3WM",
});

const gqlClient = new GraphQLClient(
  "https://graphql.contentful.com/content/v1/spaces/lthkij62ze88",
  {
    headers: {
      Authorization: "Bearer 7a3gYVP0TPC0FncF4w2szg0CfIxx38W0EjfErjaf3WM",
    },
  },
);

export const getEmptyState = async () => {
  const response = await client.getEntries({
    content_type: "emptyPost",
  });

  return response.items[0].fields;
};

export const getSample = async () => {
  const response = await client.getEntries({
    content_type: "blogPost",
  });

  return response;
};

// export const getGraphQl = async () => {
//   const response = await client.getEntries({
//     content_type: "examplePost",
//   });
//   return response;
// };

export const getGraphQl = async () => {
  const query = gql`
    {
      examplePostCollection {
        items {
          name
          isVote
          imagePath {
            url
          }
        }
      }
    }
  `;

  const data = await gqlClient.request(query);

  return data;
};
