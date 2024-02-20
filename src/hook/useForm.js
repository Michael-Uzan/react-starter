import { useEffect, useState } from "react";

export const useForm = (initalFields, cb = () => { }) => {
    const [fields, setFields] = useState(initalFields)

    useEffect(() => {
        cb(fields)
    }, [fields])

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === "number" ? +target.value : target.value
        setFields(prevFields => ({ ...prevFields, [field]: value }))
    }

    return [
        fields,
        handleChange,
        setFields
    ]
}