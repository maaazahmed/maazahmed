import React, { Component } from 'react';
import './ui.css';
import logo from './imagex/Logo.png'
import profile from './imagex/icon.PNG';
import dashboard from './imagex/Group.png'
import user from './imagex/Profile.png'
import video from './imagex/Vector.png'
import news from './imagex/Vector (1).png'
import transactions from './imagex/transection.png'
import profileP from './imagex/Profile (1).png'
class UiDesign extends Component {
    render() {
        return (
            <div className='main' >
                <div>
                    <div className='navbar'>
                        <div className='logoContainer'>
                            <img src={logo} />
                        </div>
                        <div className='profileContainer'>
                            <img src={profile} alt='profile' />
                            <a src=''>Admin</a>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='sidebar'>
                            <div className='menu'>
                                <div className='menuCardSelect'>
                                    <img src={dashboard} />
                                    <a src=''>Dashboard</a>
                                </div>

                                <div className='menuCard'>
                                    <img src={user} />
                                    <a src=''>User Management</a>
                                </div>

                                <div className='menuCard'>
                                    <img src={video} />
                                    <a src=''>Video Management</a>
                                </div>

                                <div className='menuCard'>
                                    <img src={news} />
                                    <a src=''>News</a>
                                </div>

                                <div className='menuCard'>
                                    <img src={transactions} />
                                    <a src=''>Transactions</a>
                                </div>
                            </div>

                        </div>
                        <div className='body'>
                            <div className='bodyContent' >
                                <div style={{ height: '78vh' }} >
                                    <div className='head'>
                                        <div className='headCard'>
                                            <span className='headCardPic'>
                                                <img src={profileP} />
                                            </span>
                                            <span className='cardText'>
                                                <p>USERS</p>
                                                <p>100</p>
                                            </span>
                                        </div>

                                        <div className='headCard'>
                                            <span className='headCardPic'>
                                                <img src={profileP} />
                                            </span>
                                            <span className='cardText'>
                                                <p>VIDEOS</p>
                                                <p>100</p>
                                            </span>
                                        </div>

                                        <div className='headCard'>
                                            <span className='headCardPic'>
                                                <img src={profileP} />
                                            </span>
                                            <span className='cardText'>
                                                <p>NEWS</p>
                                                <p>100</p>
                                            </span>
                                        </div>

                                        <div className='headCard'>
                                            <span className='headCardPic'>
                                                <img src={profileP} />
                                            </span>
                                            <span className='cardText'>
                                                <p>Transactions</p>
                                                <p>100</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='foter'>
                                <p>Copyright @ videos - All right reserved </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UiDesign 