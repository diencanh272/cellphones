import classNames from 'classnames/bind';

import styles from './ProductList.module.scss';
import Button from '~/components/common/Button';
import ProductCard from '../ProductCard';

const cx = classNames.bind(styles);

function ProductList() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('row', 'top')}>
                <h2 className={cx('title')}>Category</h2>
                <div className={cx('filter')}>
                    <Button>Filter manufacturer </Button>
                </div>
            </div>
            <div className={cx('row', 'row-cols-5')}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
}

export default ProductList;
