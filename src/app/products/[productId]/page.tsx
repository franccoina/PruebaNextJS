"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IProduct, IResponse } from '../../../types/productInterface';
import { useSession } from 'next-auth/react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  width: 80%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  background-color: #2c3e50; 
  color: #ecf0f1;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); 
`;

const ProductImage = styled.img`
  margin: 20px auto;
  width: 50%; 
  height: auto;
  border-radius: 10px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); 
`;

const ProductTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;
`;

const ProductInfo = styled.p`
  font-size: 16px;
  text-align: left;
  margin: 5px 0;

  span {
    font-weight: bold;
    color: #f39c12; 
  }
`;

const BackLink = styled.a`
  color: #3498db; 
  text-decoration: none;
  margin-bottom: 15px;
  font-weight: bold;

  &:hover {
    text-decoration: underline; 
  }
`;

export default function ProductsDetails({ params }: { params: { productId: string } }) {
    const { productId } = params;
    const { data: session } = useSession();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (parseInt(productId) > 1000 || parseInt(productId) < 1) {
            console.error("Error: productId fuera de rango");
            return;
        }

        const fetchProductDetails = async () => {
            if (!session?.access_token) return;

            const token = session.access_token;

            try {
                const response = await fetch(`/api/products/${productId}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": 'application/json',
                        "Authorization": `Bearer ${token}`,
                    },
                });

                const data: IResponse<IProduct> = await response.json();

                if (response.ok && data.data) {
                    setProduct(data.data);
                } else {
                    console.error('Error:', data.error);
                }
            } catch (error) {
                console.error('Error fetching product details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [productId, session]);

    if (loading) {
        return <p>Cargando detalles del producto...</p>;
    }

    if (!product) {
        return <p>No se encontraron los detalles del producto.</p>;
    }

    return (
        <Container>
            <BackLink href="/products">← Volver a Productos</BackLink>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductImage src={product.image} alt={product.title} />
            <ProductInfo><span>Descripción:</span> {product.description}</ProductInfo>
            <ProductInfo><span>Precio:</span> ${product.price}</ProductInfo>
            <ProductInfo><span>Categoria:</span> {product.category}</ProductInfo>
            <ProductInfo><span>Calificación:</span> {product.rating.rate}</ProductInfo>
            <ProductInfo><span>Conteo de calificaciones:</span> {product.rating.count}</ProductInfo>
        </Container>
    );
}
