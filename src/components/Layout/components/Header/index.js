import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignIn,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Poper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AcountItem';
import Button from '~/components/Button';
import Menu from '~/components/Poper/Menu';
import Image from '~/components/Image';
import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from '~/components/Icons';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Einglish',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
                {
                    type: 'language',
                    code: 'ja',
                    title: 'Japanese',
                    children: {
                        title: 'Language',
                        data: [
                            {
                                type: 'language',
                                code: 'en',
                                title: 'English2',
                            },
                            {
                                type: 'language',
                                code: 'vi',
                                title: 'Tiếng việt2',
                            },
                            {
                                type: 'language',
                                code: 'ja',
                                title: 'Japanese2',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'feedback and help',
        to: './feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
const currentUser = true;

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([
                /** API call */
            ]);
        }, 0);
    });

    const hanleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: './feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: './coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: './setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: './logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok logo" />
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accouynts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                   <InboxIcon/>
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button
                                primary
                                leftIcon={<FontAwesomeIcon icon={faSignIn} />}
                                rightIcon={<FontAwesomeIcon icon={faSignIn} />}
                            >
                                Login
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={hanleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1660951399602177.jpeg?x-expires=1662444000&x-signature=Dp2MWkZdDV1kqY6OuUUsE8LRiRY%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                fallback="https://yt3.ggpht.com/wgneNTiW753q5G6XMnjyNLAzReR4TVFJryTKTpIqJefrKMyhABPwfnyNWIoT5NNGstFlva1tgw=s88-c-k-c0x00ffffff-no-rj"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
