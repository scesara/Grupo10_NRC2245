import { useState } from "react";


export const useForm = (initialForm, validationForm) => {
  //1. form tendrá los valores iniciales del formulario, el cual lo recibe por parametro
  const [form, setForm] = useState(initialForm);

  //2. manejo de errores, se inicializa con un objeto vacio, si este objeto no tiene ningún atributo, significa que el formulario no tiene errores
  const [errors, setErrors] = useState({});

  //3. variable de cargado del formulario
  const [loading, setLoading] = useState(false);

  //4. variable de respuesta
  const [response, setResponse] = useState(null);

  //detectar cuando estamos escribiendo y se haga el cambio en los valores
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

    //1 actualizar el estado con handleChange
    //2. la variable que creamos para los errores debe lanzar un mensaje 
    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validationForm(form))
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(validationForm(form))

    };
    return {
        form: form,
        errors: errors,
        loading: loading,
        response: response,
        handleChange: handleChange,
        handleBlur: handleBlur,
        handleSubmit: handleSubmit,
      };
}