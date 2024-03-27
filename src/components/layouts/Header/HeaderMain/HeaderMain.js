import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './HeaderMain.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTruckFast, faUser } from '@fortawesome/free-solid-svg-icons';
import Search from '~/components/layouts/Search';
import Button from '~/components/common/Button';
import { Modal } from 'antd';
import ModalLogin from '~/components/common/Modal/ModalLogin';

const cx = classNames.bind(styles);

function HeaderMain() {
    const [modalOpen, setModalOpen] = useState(false);

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
                            to={'/tra-cuu-don-hang-online'}
                            className={cx('order')}
                            leftIcon={<FontAwesomeIcon icon={faTruckFast} />}
                        >
                            Tra cứu đơn hàng
                        </Button>
                        <Button
                            to={'/cart'}
                            className={cx('cart')}
                            leftIcon={<FontAwesomeIcon icon={faCartShopping} />}
                        >
                            Giỏ hàng
                        </Button>
                        <Button
                            className={cx('user')}
                            leftIcon={<FontAwesomeIcon icon={faUser} />}
                            onClick={() => setModalOpen(true)}
                        >
                            User
                        </Button>
                    </div>
                </div>
            </div>
            <Modal centered open={modalOpen} footer={null} onCancel={() => setModalOpen(false)} width={350}>
                <ModalLogin />
            </Modal>
        </nav>
    );
}

export default HeaderMain;
