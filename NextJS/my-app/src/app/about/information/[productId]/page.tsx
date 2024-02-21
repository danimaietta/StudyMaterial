import  { notFound } from "next/navigation"
import styles from '../styles.module.scss'
import options from '../../../_lib/logic'

export default function productId({ params }: {
    params: { productId: number }
}) {
    params.productId > 100 && notFound()

    console.log(options)

    return (
        <>
            <h1>Product: {params.productId} </h1>
            <input className={styles['input-select']} />
              <select id="standard-select">
                {options.map((opt: string, i: number) => {
                  return <option value={`Option ${i}`}>{opt}</option>
                })}
              </select>
              <span className={styles['focus']}></span>
        </>
    )
}
  