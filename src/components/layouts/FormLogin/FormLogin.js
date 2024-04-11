import classNames from 'classnames/bind';

import styles from './FormLogin.module.scss';
import Button from '~/components/common/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function FormLogin() {
    return (
        <div className={cx('wrap')}>
            <form>
                <div className={cx('box-input')}>
                    <input
                        className={cx('input')}
                        type="email"
                        placeholder="Nhập số điện thoại/email"
                        required
                        maxLength={255}
                        autoComplete="off"
                    />
                    <label className={cx('label')}>Số điện thoại/ email</label>
                </div>
                <div className={cx('box-input')}>
                    <input
                        className={cx('input')}
                        type="password"
                        placeholder="Nhập mật khẩu"
                        required
                        maxLength={255}
                        autoComplete="off"
                    />
                    <label className={cx('label')}>Mật khẩu</label>
                </div>
                <div className={cx('forget')}>
                    <p>Quên mật khẩu?</p>
                </div>

                <Button className={cx('btn')} type="submit" large primary>
                    Đăng nhập
                </Button>
            </form>

            <div className={cx('question')}>
                <p>Bạn chưa có tài khoản?</p>
                <Link to={'/account/register'}>Đăng kí ngay</Link>
            </div>
            <Link className={cx('policy')} to={'/'}>
                Xem chính sách ưu đãi Smember
            </Link>
        </div>
    );
}

export default FormLogin;
