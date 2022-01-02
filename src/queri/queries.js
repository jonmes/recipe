import gql from "graphql-tag";

export const user_account = {
  query: gql`
    query {
      users {
        id
        name
        email
      }
    }
  `,
};

export const recipe = {
  query: gql`
    query {
      recipe {
        id
        title
        image
        prep_time
        cook_time
        created_at
        calories
        servings
        category
        description
        user_id
      }
    }
  `,
};
