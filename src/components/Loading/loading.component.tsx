import styles from './loading.module.scss';

const LoadingIcon = () => {
  return (
    <div className={styles.container}>
      <div className={styles.double_ringed}></div>
    </div>
  );
};

export default LoadingIcon;
