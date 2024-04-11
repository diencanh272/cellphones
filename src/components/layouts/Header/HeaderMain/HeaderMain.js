import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './HeaderMain.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import Search from '~/components/layouts/Search';
import Button from '~/components/common/Button';
import { Modal } from 'antd';
import Popup from '~/components/common/Modal/Popup';
import UserLogin from '../../UserLogin';
import { userCurrentSignup } from '~/utils/helpers/userCurrentSignup';

const cx = classNames.bind(styles);

function HeaderMain() {
    const [modalOpen, setModalOpen] = useState(false);
    const [account, setAccount] = useState(false);
    const location = useLocation();

    // console.log(userCurrentLogin);

    useEffect(() => {
        if (localStorage.getItem('Account')) {
            setAccount(true);
        }
    }, []);

    // Hàm kiểm tra xem một URL có phù hợp với đường dẫn cho trước không
    if (location.pathname) {
        setModalOpen(false);
    }

    const userLogin = () =>
        account ? (
            <UserLogin userCurrentSignup={userCurrentSignup} />
        ) : (
            <Button
                className={cx('user')}
                leftIcon={<FontAwesomeIcon icon={faUser} />}
                onClick={() => setModalOpen(true)}
            >
                User
            </Button>
        );

    return (
        <nav className={cx('wrap')}>
            <div className="container">
                <div className={cx('row', 'main')}>
                    <div className={cx('logo', 'col-3')}>
                        <Link to={'/'}>
                            <img src={images.logo} alt="CellPhones" />
                        </Link>
                    </div>
                    <div className={cx('search', 'col-5')}>
                        <Search />
                    </div>

                    <div className={cx('info', 'col-4')}>
                        <Button
                            to={'/cart'}
                            className={cx('cart')}
                            leftIcon={<FontAwesomeIcon icon={faCartShopping} />}
                        >
                            Giỏ hàng
                        </Button>
                        {userLogin()}
                    </div>
                </div>
            </div>
            <Modal centered open={modalOpen} footer={null} onCancel={() => setModalOpen(false)} width={350}>
                <Popup
                    title={'Cellphones'}
                    thumbs={<img src={images.chibi} alt="Cellphones" />}
                    textNote={'Vui lòng đăng nhập tài khoản Smember để xem ưu đãi và thanh toán dễ dàng hơn. '}
                    childrenButtonLeft={'Đăng kí'}
                    childrenButtonRight={'Đăng nhập'}
                />
            </Modal>
        </nav>
    );
}

export default HeaderMain;
