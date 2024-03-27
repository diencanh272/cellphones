import classNames from 'classnames/bind';

import styles from './ProductCard.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import Button from '~/components/common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import StarRating from '~/utils/helpers/StarRating/StarRating';

const cx = classNames.bind(styles);

function ProductCard() {
    return (
        <div className={cx('col')}>
            <article className={cx('wrap')}>
                <div className={cx('img-wrap')}>
                    <Link to={'/detail'}>
                        <img className={cx('thumb')} src={images.product} alt="nameProduct" />
                    </Link>
                </div>
                <div className={cx('info')}>
                    <h3 className={cx('name', 'line-clamp')}>
                        <Link to={'/detail'}>Product name</Link>
                    </h3>
                    <div className={cx('price')}>
                        <span className={cx('current')}>Price</span>
                        <span className={cx('old')}>Price</span>
                    </div>
                    <div className={cx('rating')}>
                        <span className={cx('star')}>{StarRating()}</span>
                        <Button className={cx('like')} rightIcon={<FontAwesomeIcon icon={faHeart} />}>
                            Yêu thích
                        </Button>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default ProductCard;
