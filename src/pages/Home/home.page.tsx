// plugins
import { useEffect, useRef, useState } from 'react';
// context
// components
// imports
import { ProductType } from '../../models/products.model';
import { getProductPaginated } from '../../services/core.services';
// images
// styles
import styles from './home.module.css';

const Home = () => {
  const [store, setStore] = useState<ProductType[]>([]);

  useEffect(() => {
    getProductPaginated().then((res) => {
      console.log(res.data);
      setStore(res.data);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      {store.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default Home;
