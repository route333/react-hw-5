import styled from "styled-components";
import RecipeListItem from "./RecipeListItem";

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const RecipeList = ({ recipes }) => {
  return (
    <List>
      {recipes.map((recipe) => (
        <RecipeListItem
          key={recipe.id}
          img={recipe.img}
          title={recipe.name}
          info={recipe}
          difficalty={recipe.difficulty}
        />
      ))}
    </List>
  );
};

export default RecipeList;
