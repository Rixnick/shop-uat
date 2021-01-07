import gql from "graphql-tag";

export const MY_BRANDS = gql`
      query MY_BRANDS {
            user {
                  id
                  brands {
                        id
                        name
                        logo
                  }
            }
      }
`;

export const CREATE_BRAND = gql`
      mutation CREATE_BRAND($name: String!, $logo: String!) {
            createUserCategory(name: $name, logo: $logo) {
                  id
                  name
                  logo
            }
      }
`;

export const QUERY_BRANDS = gql`
      query {
            brands {
                  id
                  name
                  logo
                  products {
                        id
                  }
            }
      }
`;
