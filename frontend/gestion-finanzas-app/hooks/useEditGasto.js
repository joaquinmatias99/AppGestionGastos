import { useState } from 'react';

const useEditGasto = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const editGasto = async (gasto) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gasto),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el gasto');
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { editGasto, loading, error, success };
};

export default useEditGasto;
