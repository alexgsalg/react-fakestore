// plugins
import { MouseEventHandler } from 'react';
import ReactDOM from 'react-dom';
// redux
// components
import Icon from '../Icon/icon.component';
// imports
// images
// styles
import styles from './img-lightbox.module.css';

type LightboxType = {
  img: string | undefined;
  isOpen: boolean;
  onclose: MouseEventHandler<SVGSVGElement | HTMLSpanElement>;
  onNext?: MouseEventHandler<SVGSVGElement | HTMLSpanElement>;
  onPrev?: MouseEventHandler<SVGSVGElement | HTMLSpanElement>;
};
const ImgLightbox = ({
  img,
  isOpen = false,
  onclose,
  onNext,
  onPrev,
}: LightboxType): React.ReactPortal | null => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className={styles.lightbox}>
      <span className={styles.lightbox_overlay} onClick={onclose}></span>
      <div className={styles.lightbox_content}>
        <picture className={styles.lightbox_picture}>
          <img src={img} alt='' />
        </picture>

        <Icon iconName='close' size={42} className={styles.close} actionOnClick={onclose} />
        <Icon iconName='chevron_right' size={42} className={styles.next} actionOnClick={onNext} />
        <Icon iconName='chevron_left' size={42} className={styles.prev} actionOnClick={onPrev} />
      </div>
    </div>,
    document.body,
  );
};

export default ImgLightbox;
