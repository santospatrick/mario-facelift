import styles from './Square.module.css'

type Props = {
    src?: string
}

function Square({ src }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                {src && <img src={src} alt="" />}
            </div>
        </div>
    )
}

export default Square
