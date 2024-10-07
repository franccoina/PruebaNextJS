"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import Input from "@/components/UI/Input/Input";
import Label from "@/components/UI/Label/Label";
import Button from "@/components/UI/Button/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Card = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  border-radius: 8px;
  border: rgba(0, 0, 0, 0.1);
  background-color: #fff; 
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333; 
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  & button {
    margin-top: 1rem;
  }
`;

const ErrorList = styled.ul`
  margin: 1rem 0 0; 
  padding: 1rem;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  list-style: none;
`;

const ErrorItem = styled.li`
  margin-bottom: 0.5rem;
`;

const LoginPage = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const responseNextAuth = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(","));
      toast.error("Ocurrió un error");
      return;
    }

    toast.success("Login exitoso");
    router.push("/products");
  };

  return (
    <Container>
      <Card>
        <Title>Iniciar Sesión</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="username" text="Usuario" />
          <Input
            type="text"
            placeholder="Nombre de usuario"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <Label htmlFor="password" text="Contraseña" />
          <Input
            type="password"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button type="submit" label="ENTRAR" />
        </Form>

        {errors.length > 0 && (
          <ErrorList>
            {errors.map((error) => (
              <ErrorItem key={error}>{error}</ErrorItem>
            ))}
          </ErrorList>
        )}
      </Card>
    </Container>
  );
};

export default LoginPage;
