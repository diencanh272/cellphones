import classNames from 'classnames/bind';

import styles from './ModalLogin.module.scss';
import images from '~/assets/images';
import Button from '../../Button';

const cx = classNames.bind(styles);

function ModalLogin() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('top')}>
                <h2>CellPhones</h2>
                <div className={cx('thumbs')}>
                    <img src={images.chibi} alt="" />
                </div>
            </div>
            <div className={cx('text')}>
                <p>Vui lòng đăng nhập tài khoản Smember để xem ưu đãi và thanh toán dễ dàng hơn.</p>
            </div>
            <div className={cx('bottom')}>
                <Button className={cx('btn')}  rounded to={'/account'}>
                    Sign up
                </Button>
                <Button  className={cx('btn')} primary to={'/account'}>
                    Sign in
                </Button>
            </div>
        </div>
    );
}

export default ModalLogin;
