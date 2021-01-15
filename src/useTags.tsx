import { useState } from "react";

const useTags = () => {
    const [tags, setTags] = useState<string[]>(['衣', 's食', '住', '行'])
    return {
        tags,
        setTags
    }
}

export { useTags }