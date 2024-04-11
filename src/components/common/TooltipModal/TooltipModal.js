import classNames from 'classnames/bind';

import styles from './TooltipModal.module.scss';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faBell, faGears, faTruckFast, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { userCurrentSignup } from '~/utils/helpers/userCurrentSignup';
import ShortName from '~/utils/helpers/shortName';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function TooltipModal() {
    const navigate = useNavigate();

    const handleLogOut = () => {
        if (localStorage && localStorage.getItem('Account')) {
            localStorage.removeItem('Account');
            navigate('/account');
        }
    };

    const activeAdmin = () => {
        if (userCurrentSignup.status === 'ACTIVE') {
            return (
                <Button className={cx('btn')} to={'/admin'} text large leftIcon={<FontAwesomeIcon icon={faGears} />}>
                    Admin
                </Button>
            );
        }
    };

    const mainUserLogin = () => (
        <>
            <div className={cx('top-left')}>
                <ShortName />
            </div>
            <div className={cx('top-right')}>
                <span className={cx('fullname')}>{userCurrentSignup.fullname}</span>
                <span className={cx('username')}>{`@${userCurrentSignup.username}`}</span>
            </div>
        </>
    );

    return (
        <div className={cx('wrap')}>
            <div className={cx('top-wrap')}>{mainUserLogin()}</div>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    <Button
                        className={cx('btn')}
                        to={'/account'}
                        text
                        large
                        leftIcon={<FontAwesomeIcon icon={faUserTie} />}
                    >
                        Tài khoản cá nhân
                    </Button>
                </li>
                <li className={cx('item')}>
                    <Button className={cx('btn')} text large leftIcon={<FontAwesomeIcon icon={faTruckFast} />}>
                        Quản lý đơn hàng
                    </Button>
                </li>
                <li className={cx('item')}>
                    <Button className={cx('btn')} text large leftIcon={<FontAwesomeIcon icon={faBell} />}>
                        Thông báo
                    </Button>
                </li>
                <li className={cx('item')}>{activeAdmin}</li>
                <li className={cx('item')}>
                    <Button
                        className={cx('btn')}
                        text
                        large
                        leftIcon={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
                        onClick={() => {
                            handleLogOut();
                        }}
                    >
                        Đăng xuất tài khoản
                    </Button>
                </li>
            </ul>
        </div>
    );
}

export default TooltipModal;
