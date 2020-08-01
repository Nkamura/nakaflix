import { useState } from 'react';

// Custom hook para facilitar reutilização ou mudança
function useForm(valoresIniciais) {
    const [values, setValues] = useState(valoresIniciais);
    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,

        });
    }

    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value,
        );
    }
    function clearForm() {
        setValues(valoresIniciais);
    }
    return {
        values,
        handleChange,
        clearForm,
    };
}

export default useForm;
