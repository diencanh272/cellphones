import classNames from 'classnames/bind';

import styles from './Account.module.scss';
import images from '~/assets/images';
import Button from '~/components/common/Button';
import icons from '~/assets/icon';
// import FormLogin from '~/components/layouts/FormLogin';
import FormSignup from '~/components/layouts/FormSignup';
// import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Account() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('row')}>
                <div className={cx('offset-3', 'col-6')}>
                    <div className={cx('nav')}></div>
                    <div className={cx('top')}>
                        <div className={cx('thumb')}>
                            <img src={images.chibi} alt="" />
                        </div>
                        <div className={cx('title')}>
                            <h2>Đăng nhập tài khoản Cellphones</h2>
                        </div>
                    </div>
                    <div className={cx('choose-login')}>
                        <div className={cx('login-btn')}>
                            <Button leftIcon={<img src={icons.google} alt="" />}>Google</Button>
                        </div>
                        <div className={cx('login-btn')}>
                            <Button leftIcon={<img src={icons.zalo} alt="" />}>Zalo</Button>
                        </div>
                    </div>
                    <div className={cx('line-through')}>
                        <hr />
                        <p>hoặc</p>
                        <hr />
                    </div>
                    <div className={cx('form-wrap')}>
                        <FormSignup />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
