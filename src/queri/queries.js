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
        rating
      }
    }
  `,
};

export const createRecipe = {
  mutation: gql`
    mutation {
      insert_recipe_one(
        object: {
          title: "alecha"
          calories: 3000
          servings: 3
          image: "{https://cdn.pixabay.com/photo/2021/01/19/08/47/sandwich-5930496_960_720.jpg}"
          category: "vegetable"
          cook_time: "20 min"
          prep_time: "10 min"
          description: "good lunch for childrens"
          steps: "{wash the onion, chop the onion, cook it for 20 min, serve it on the table}"
          ingrediant: "{ onion 2kg, salt 2 spoon, water 1 Litter }"
          user_id: "abebeId1"
        }
      ) {
        title
        ingrediant
        steps
      }
    }
  `,
};

export const recipe_detail = {
  query: gql`
    query ($recipeId: Int!) {
      recipe_by_pk(id: $recipeId) {
        title
        servings
        steps
        ingrediant
      }
    }
  `,
};

// ============== Recipe by id =============================

export const recipebyid = {
  query: gql`
    query ($recipeId: Int!) {
      recipe_by_pk(id: $recipeId) {
        title
        image
        prep_time
        cook_time
        calories
        servings
        category
        description
        steps
        ingrediant
        created_at
        user_id
        user {
          name
        }
      }
    }
  `,
};

// ================== comment ========================
// export const comment = query MyQuery ($recipeId: Int!){
//   comment(where: {recipe_id: {_eq: $recipeId}}) {
//     comment
//     user{
//       name
//       id
//     }
//   }
// }
