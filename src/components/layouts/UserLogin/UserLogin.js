import classNames from 'classnames/bind';

import styles from './UserLogin.module.scss';
import Button from '~/components/common/Button';
import { Tooltip } from 'antd';
import ShortNameUser from '~/utils/helpers/shortName';
import TooltipModal from '~/components/common/TooltipModal';

const cx = classNames.bind(styles);

function UserLogin({ userCurrentLogin }) {
    // console.log(userCurrentLogin);

    return (
        <Tooltip placement="bottomRight" title={<TooltipModal />} color="#fff">
            <Button className={cx('wrap')} leftIcon={<ShortNameUser />}>
                {userCurrentLogin.username}
            </Button>
        </Tooltip>
    );
}

export default UserLogin;
