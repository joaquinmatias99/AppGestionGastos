import { useState } from 'react';

const useDeleteGasto = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const deleteGasto = async (id) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { deleteGasto, loading, error, success };
};

export default useDeleteGasto;
