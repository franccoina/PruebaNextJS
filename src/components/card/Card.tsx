import { ICardProps } from '@/types/productInterface';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Button from '../UI/Button/Button';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  width: 300px; 
  display: flex;
  flex-direction: row; 
    width: 100%; 
  margin: 10px;
  background-color: #f0f8ff;
  transition: transform 0.2s;

  :nth-child(2){
    padding: 15px;
  }

  &:hover {
    transform: scale(1.05); 
  }
`;

const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  object-fit: cover;
  margin-right: 15px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
`;

const ProductTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
  color: #115d57; 
`;

const ProductPrice = styled.p`
  font-size: 14px; 
  font-weight: bold;
  color: #28a745; 
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const AddToCartButton = styled.button`
  background-color: #ffcc00;
  color: black;
  border: 2px solid #ffcc00;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e6b800;
  }
`;

export const FavoriteIcon = styled.div`
  cursor: pointer;
  font-size: 24px;
  color: #ffcc00; 
`;

const Card: React.FC<ICardProps> = ({ product }) => {
  const handleAddToCart = () => {
    console.log("add to cart");
  };

  const handleAddToLike = () => {
    console.log("add to Likes");
  };

  return (
    <CardContainer>
      <ProductImage src={product.image} alt={product.title} />
      <InfoContainer>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>${product.price}</ProductPrice>
        <ButtonContainer>
          <Button onClick={handleAddToCart} label="Agregar" />
          <FavoriteIcon onClick={handleAddToLike}>
            {<AiFillStar />}
          </FavoriteIcon>
        </ButtonContainer>
      </InfoContainer>
    </CardContainer>
  );
};

export default Card;
