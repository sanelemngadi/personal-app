import { useState } from 'react';

const useHandleChange = (initialData) => {
    const [formData, setFormData] = useState(initialData);

    return [formData,
        e => setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    ]
};

export default useHandleChange;
