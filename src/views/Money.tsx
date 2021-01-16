import React, { useState } from "react";
import Layout from 'components/Layout'
import styled from 'styled-components'
import { TagsSection } from './Money/TagSection'
import { NoteSection } from './Money/NoteSection'
import { CategorySection } from './Money/CategorySection'
import { NumberPadSection } from './Money/NumberPadSection'
import { useRecords } from 'hooks/useRecords';

const MyLayout = styled(Layout)`
    border:1px solid red;
    background-color:red;
    display:flex;
    flex-direction:column;
`
const defaultFormData = {
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
}

type Category = '-' | '+'
function Money() {
    const [selected, setSelected] = useState(defaultFormData)
    const { records, addRecord } = useRecords()
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }

    const submit = () => {
        if (addRecord(selected)) {
            addRecord(selected)
            alert('保存成功')
            setSelected(defaultFormData)
        }
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
                onOk={submit} />
        </MyLayout>
    )
}

export default Money