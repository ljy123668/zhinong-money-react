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
    display:flex;
    flex-direction:column;
`
const CategoryWrapper = styled.div`
    background-color: #c4c4c4;
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
    const { addRecord } = useRecords()
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
        <MyLayout scrollTop={9999}>
            <TagsSection value={selected.tagIds}
                onChange={(tagIds) => onChange({ tagIds })} />
            < NoteSection value={selected.note}
                onChange={(note) => onChange({ note })}
            />
            <CategoryWrapper>
                <CategorySection value={selected.category}
                    onChange={(category) => onChange({ category })}
                />
            </CategoryWrapper>

            <NumberPadSection value={selected.amount}
                onChange={(amount) => onChange({ amount })}
                onOk={submit} />
        </MyLayout>
    )
}

export default Money