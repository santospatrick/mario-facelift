import { useCallback, useState } from 'react'
import update from 'immutability-helper'
import { Box } from '../Box'
import { ItemTypes } from '../ItemTypes'
import { useDrop, XYCoord } from 'react-dnd'
import { DragItem } from '../../interfaces'
import styles from '../Square/Square.module.css'

type DraggableSquareProps = {
    src: string
}

function DraggableSquare({ src }: DraggableSquareProps) {
    const [boxes, setBoxes] = useState<{
        [key: string]: {
            top: number
            left: number
            src: string
        }
    }>({
        a: { top: 20, left: 80, src: '/assets/shy-guy/right-eye.png' },
    })

    const moveBox = useCallback(
        (id: string, left: number, top: number) => {
            setBoxes(
                update(boxes, {
                    [id]: {
                        $merge: { left, top },
                    },
                }),
            )
        },
        [boxes, setBoxes],
    )

    const [, drop] = useDrop(
        () => ({
            accept: ItemTypes.BOX,
            drop(item: DragItem, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
                const left = Math.round(item.left + delta.x)
                const top = Math.round(item.top + delta.y)
                moveBox(item.id, left, top)
                return undefined
            },
        }),
        [moveBox],
    )

    return (
        <div ref={drop} className={styles.container}>
            <div className={styles.inner}>
                {src && <img src={src} alt="" />}
                {Object.keys(boxes).map((key) => {
                    const { left, top, src } = boxes[key]
                    return (
                        <Box
                            key={key}
                            id={key}
                            left={left}
                            top={top}
                            hideSourceOnDrag={true}
                        >
                            <img src={src} alt="" />
                        </Box>
                    )
                })}
            </div>
        </div>
    )
}

export default DraggableSquare
