import Link from "next/link"
import  { notFound } from "next/navigation"

export default function productId({ params }: {
    params: { productId: number }
}) {
    params.productId > 100 && notFound()

    return (
        <>
            <h1>Product: {params.productId} </h1>
        </>
    )
}
  