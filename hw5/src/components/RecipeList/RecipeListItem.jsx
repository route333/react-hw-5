import styled from "styled-components";

const Item = styled.li`
  background-color: #f8d593;
  width: 300px;
  border-radius: 10px;
  margin-right: auto;
  margin-left: auto;
`;

const ItemImg = styled.img`
  padding-top: 20px;
  width: 200px;
  height: 150px;
  border-radius: 10px;
`;

const ItemTitle = styled.h2`
  color: black;
  font-size: 15px;
`;

const ItemInfo = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 8px;
  background-color: white;
  width: 250px;
  justify-content: center;
  border-radius: 100px;
  margin-right: auto;
  margin-left: auto;
`;

const InfoItem = styled.p`
  color: black;
  padding: 0;
  margin: 0;
`;

const Difficalty = styled.div`
  margin-top: 20px;
  display: block;
  list-style: none;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: white;
  width: 250px;
  height: 90px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  border-radius: 20px;
`;

const DiffTitle = styled.h3`
  text-align: left;
  padding: 2px 10px;
  margin: 0px;
`;

const DiffLevel = styled.p`
  color: #fff;
  padding: 4px 10px;
  border-radius: 100px;
`;

const RecipeListItem = ({ img, title, info, difficalty }) => {
  return (
    <Item>
      <ItemImg src={img} />
      <ItemTitle>{title}</ItemTitle>
      <ItemInfo>
        <InfoItem>Time: {info.time}</InfoItem>
        <InfoItem>Servings: {info.servings}</InfoItem>
        <InfoItem>Calories: {info.calories}</InfoItem>
      </ItemInfo>
      <Difficalty>
        <DiffTitle>Difficulty</DiffTitle>
        <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
          <DiffLevel
            style={
              difficalty === "easy"
                ? { backgroundColor: "red" }
                : { backgroundColor: "#f5b235" }
            }
          >
            Easy
          </DiffLevel>
          <DiffLevel
            style={
              difficalty === "medium"
                ? { backgroundColor: "red" }
                : { backgroundColor: "#f5b235" }
            }
          >
            Medium
          </DiffLevel>
          <DiffLevel
            style={
              difficalty === "hard"
                ? { backgroundColor: "red" }
                : { backgroundColor: "#f5b235" }
            }
          >
            Hard
          </DiffLevel>
        </div>
      </Difficalty>
    </Item>
  );
};

export default RecipeListItem;
