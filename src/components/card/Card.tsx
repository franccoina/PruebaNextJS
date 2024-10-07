import { ICardProps } from '@/types/productInterface';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Button from '../UI/Button/Button';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '@/redux/slices/cartSlice';
import { addFavorite, removeFavorite } from '../../redux/slices/favoriteSlice';
import { RootState, AppDispatch } from '../../redux/store';
import { IProduct } from '@/types/productInterface';

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

  &:hover {
    transform: scale(1.05); 
  }

  @media (max-width: 700px) {
    flex-direction: column;

    & img {
      width: 100%;
      height: auto;
    }
  }
`;

const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
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
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const isFavorite = useSelector((state: RootState) => 
      state.favorites.items.some((item: IProduct) => item.id === product.id)
  );

  const handleAddToCart = () => {
      dispatch(addItem(product));
  };

  const handleViewDetails = () => {
      router.push(`/products/${product.id}`);
  };

  const handleAddToFavorites = () => {
      if (isFavorite) {
          dispatch(removeFavorite(product.id));
      } else {
          dispatch(addFavorite(product));
      }
  };

  return (
      <CardContainer>
          <ProductImage src={product.image} alt={product.title} />
          <InfoContainer>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>${product.price}</ProductPrice>
              <ButtonContainer>
                  <Button onClick={handleAddToCart} label="ADD" />
                  <Button onClick={handleViewDetails} label="DETAILS"/>
                  <FavoriteIcon onClick={handleAddToFavorites}>
                      {isFavorite ? <AiFillStar color="#ffcc00" /> : <AiOutlineStar color="#ffcc00" />}
                  </FavoriteIcon>
              </ButtonContainer>
          </InfoContainer>
      </CardContainer>
  );
};

export default Card;
