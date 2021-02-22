import { useState, useEffect } from 'react';
import pagination from './utils';

const url = 'https://api.github.com/users/john-smilga/followers?&per_page=100';

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(pagination(data));
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return { loading, data };
};
