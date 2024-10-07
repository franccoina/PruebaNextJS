"use client";
import { signIn, SignInResponse } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { createUser } from "../../api/users/route"
import { IUserRegistered, IResponseCreateUser } from "@/types/userInterface"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import Label from "@/components/UI/Label/Label";

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

const SignUpPage = () => {
    const [errors, setErrors] = useState<string[]>([]);
    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [phone, setPhone] = useState<string>("");

    const router: AppRouterInstance = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors([]);

        const newUser: IUserRegistered = {
            email,
            name,
            password,
            username,
            phone
        }

        const res: IResponseCreateUser = await createUser(newUser)

        const responseNextAuth: SignInResponse | undefined = await signIn("credentials", {
            username,
            password,
            redirect: false,
        });

        if (responseNextAuth?.error) {
            setErrors(responseNextAuth.error.split(","));
            toast.error("Ocurrio un error");
            return;
        }

        toast.success("Registro exitoso");
        router.push("/login");
    };

    return (
        <Container>
      <Card>
            <Title>Sign Up</Title>
            <Form onSubmit={handleSubmit}>
            <Label htmlFor="name" text="Full Name" />
                <Input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                />

                <Label htmlFor="username" text="Username" />
                <Input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={(event) =>
                        setUsername(event.target.value)
                    }
                />

                <Label htmlFor="email" text="Email" />
                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(event) =>
                        setEmail(event.target.value)
                    }
                />

                <Label htmlFor="password" text="Password" />
                <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <Label htmlFor="phone" text="Phone" />
                <Input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />

                <Button type="submit" label="SEND"></Button>
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

export default SignUpPage;

