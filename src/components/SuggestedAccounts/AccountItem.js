import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Poper';

import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountsItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper className={cx('preview')}>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                // visible
                interactive
                delay={[800, 0]} //show 800 hide 0
                placement="bottom"
                render={renderPreview}
                offset={[-10, 0]}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <h4 className={cx('nickname')}>
                            quocnguyenphu
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </h4>
                        <p className={cx('name')}>Quoc Nguyen Phu </p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountsItem;
