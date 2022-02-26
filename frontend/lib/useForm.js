import { useEffect, useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for our inputs
  const [inputs, setInputs] = useState(initial);

  const initialValues = Object.values(initial).join('');
  useEffect(() => {
    // This function runs when the things we are watching change
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      // put the first file out the array to the value variable
      [value] = e.target.files;
    }
    setInputs({
      // copy the existing state
      ...inputs,
      // update the piece of state
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    // take an object, loop over its properties, set each of its keys to nothing
    const blackState = Object.fromEntries(
      // Object.entries
      // We get key from .map(item => item[0])
      // We get value from .map(item => item[1])
      // destructure item to [key, value]
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );

    setInputs(blackState);
  }
  // return the things we want to surface from this custom hook
  return {
    clearForm,
    inputs,
    handleChange,
    resetForm,
  };
}
