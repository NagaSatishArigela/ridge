import { useEffect, useState } from 'react';
import { grahcms, QUERY_DEV_IMAGES } from './Queries';

export const useFetchDevelopments = () => {
  const [developments, setDevelopments] = useState([]);

  useEffect(() => {
    const fetchDevelopment = async () => {
      try {
        const data = await grahcms.request(QUERY_DEV_IMAGES);
        setDevelopments(data?.developments || []);
      } catch (error) {
        console.error('Error fetching developments:', error);
      }
    };

    fetchDevelopment();
  }, []);

  return developments;
};
