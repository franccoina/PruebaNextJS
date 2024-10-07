"use client"
import { notFound, useRouter } from "next/navigation";
import Button from "@/components/UI/Button/Button";

export default function ProductsDetails({
    params,
}: {
    params: {
        productId: string};
},
) {
    if(parseInt(params.productId) > 1000){
        notFound();
    }
    if (parseInt(params.productId) < 1){
        throw new Error("Error loading review")
    }

    const router = useRouter();

    const handleClick = () => {
        console.log("Placing your order")
        router.push("/products")
    }

    return (
        <>
            <h1>Details Profile Product {params.productId}</h1>
            <Button type="button" onClick={handleClick}>Order this Product</Button>
        </> 
    )
}