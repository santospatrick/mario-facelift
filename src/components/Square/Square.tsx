import { ReactNode } from 'react'
import styles from './Square.module.css'

type Props = {
    src?: string
    children?: ReactNode
}

function Square({ src, children }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                {src && <img src={src} alt="" />}
                <div className="content">{children}</div>
            </div>
        </div>
    )
}

export default Square
