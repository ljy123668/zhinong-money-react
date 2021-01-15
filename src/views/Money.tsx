import React, { useState } from "react";
import Layout from 'components/Layout'
import styled from 'styled-components'
import { TagsSection } from './Money/TagSection'
import { NoteSection } from './Money/NoteSection'
import { CategorySection } from './Money/CategorySection'
import { NumberPadSection } from './Money/NumberPadSection'

const MyLayout = styled(Layout)`
    border:1px solid red;
    background-color:red;
    display:flex;
    flex-direction:column;
`

type Category = '-' | '+'
function Money() {
    const [selected, setSelected] = useState({
        tagIds: [] as number[],
        note: '',
        category: '-' as Category,
        amount: 0
    })

    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }
    return (
        <MyLayout>
            <TagsSection value={selected.tagIds}
                onChange={(tagIds) => onChange({ tagIds })} />
            < NoteSection value={selected.note}
                onChange={(note) => onChange({ note })}
            />
            <CategorySection value={selected.category}
                onChange={(category) => onChange({ category })}
            />
            <NumberPadSection value={selected.amount}
                onChange={(amount) => onChange({ amount })}
                onOk={() => { console.log('okokok') }} />
        </MyLayout>
    )
}

export default Money