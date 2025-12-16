import { useState, useCallback } from 'react';
import useNotification from './useNotification';
import { useLanguage } from '../contexts/LanguageContext';

const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const { showNotification } = useNotification();
  const { t } = useLanguage();

  const handleInputChange = useCallback((e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }, []);

  const handleSubmit = useCallback((e, callback) => {
    e.preventDefault();
    showNotification(t.messageSent, 'success');
    setFormData(initialState);
    if (callback) {
      callback();
    }
  }, [initialState, showNotification, t]);

  return { formData, handleInputChange, handleSubmit, setFormData };
};

export default useForm;
