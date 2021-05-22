import React from 'react'
import { ImLocation } from 'react-icons/im'
import { GoGraph } from 'react-icons/go'
import { BiCodeAlt } from 'react-icons/bi'
import { RiStackLine } from 'react-icons/ri'
import Chart from 'react-apexcharts'
import { ProgressBar } from 'react-bootstrap'
import { IconContext } from 'react-icons'

import Card from './Card'
import {
    barOptions,
    barSeries,
    areaOptions,
    areaSeries,
    donutOptions,
    donutSeries,
    doubleBarOptions,
    doubleBarSeries,
} from '../../../constants/CHART'
import './Main.css'

const Main = () => {
    return (
        <div className="main">
            <Card title={'author sales'}>
                <div className="firstCardWrapper">
                    <div className="figureWrapper">
                        <span>$</span>
                        <h1>64M</h1>
                    </div>
                    <div className="chartWrapper">
                        <Chart
                            options={barOptions}
                            series={barSeries}
                            type="bar"
                            width="100%"
                            height="90%"
                        />
                    </div>
                </div>
            </Card>
            <Card title={'technologies'}>
                <Chart
                    options={donutOptions}
                    series={donutSeries}
                    type="donut"
                    width="90%"
                    height="90%"
                />
            </Card>
            <Card title={'total orders'}>
                <Chart
                    options={areaOptions}
                    series={areaSeries}
                    type="area"
                    width="100%"
                    height="90%"
                />
            </Card>
            <Card title={'announcement'}>
                <div className="main__middleWrapper">
                    <h3>Incredible Positive Reviews</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                        unde iste vitae modi reprehenderit consectetur magni sunt odio
                        laboriosam doloremque.
                    </p>
                    <div className="utils">
                        <span>22 May,2021</span>
                        <button>View</button>
                    </div>
                </div>
            </Card>
            <Card title={'projects'}>
                <div className="main__middleWrapper">
                    <h3>First Milestone Achievement</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                        unde iste vitae modi reprehenderit consectetur magni sunt odio
                        laboriosam doloremque.
                    </p>
                    <div className="utils">
                        <h4>Projects</h4>
                        <div className="progressValue">55%</div>
                    </div>
                    <ProgressBar now={55} />
                </div>
            </Card>
            <Card title={"today's schedule"}>
                <div className="main__middleWrapper">
                    <h3>UI/UX Design Updates</h3>
                    <p className="time">11:15AM - 12:30PM</p>
                    <div className="utils">
                        <p>
                            <ImLocation /> 246R, St. Manhatten NY...
                        </p>
                        <button>View Map</button>
                    </div>
                </div>
            </Card>
            <Card title={'top products'}>
                <div className="itemsWrapper">
                    <div className="item">
                        <span className="icon">
                            <IconContext.Provider
                                value={{ size: '1.25rem', color: '#fff' }}
                            >
                                <GoGraph />
                            </IconContext.Provider>
                        </span>
                        <span className="text">Settings</span>
                    </div>
                    <div className="item">
                        <span className="icon">
                            <IconContext.Provider
                                value={{ size: '1.25rem', color: '#fff' }}
                            >
                                <BiCodeAlt />
                            </IconContext.Provider>
                        </span>
                        <span className="text">Code</span>
                    </div>
                    <div className="item">
                        <span className="icon">
                            <IconContext.Provider
                                value={{ size: '1.25rem', color: '#fff' }}
                            >
                                <RiStackLine />
                            </IconContext.Provider>
                        </span>
                        <span className="text">Design</span>
                    </div>
                </div>
                <div className="contentWrapper">
                    <div className="contentItem">
                        <div className="leftWrapper">
                            <h3>HTML 5 Templates</h3>
                            <p>Font-end, Admin & Email</p>
                        </div>
                        <div className="rightWrapper">
                            <span className="percentage">+79%</span>
                            <span className="bar one">
                                <ProgressBar now={79} />
                            </span>
                        </div>
                    </div>
                    <div className="contentItem">
                        <div className="leftWrapper">
                            <h3>Wordpress Theme</h3>
                            <p>eCommerce Website, Plugin</p>
                        </div>
                        <div className="rightWrapper">
                            <span className="percentage">+21%</span>
                            <span className="bar two">
                                <ProgressBar now={65} />
                            </span>
                        </div>
                    </div>
                    <div className="contentItem">
                        <div className="leftWrapper">
                            <h3>eCommerce Websites</h3>
                            <p>Shops, Fashion website & etc</p>
                        </div>
                        <div className="rightWrapper">
                            <span className="percentage">-16%</span>
                            <span className="bar three">
                                <ProgressBar now={46} />
                            </span>
                        </div>
                    </div>
                    <div className="contentItem">
                        <div className="leftWrapper">
                            <h3>UI/UX Design</h3>
                            <p>Everything you ever imagine</p>
                        </div>
                        <div className="rightWrapper">
                            <span className="percentage">+4%</span>
                            <span className="bar four">
                                <ProgressBar now={70} />
                            </span>
                        </div>
                    </div>
                    <div className="contentItem">
                        <div className="leftWrapper">
                            <h3>Freebie Themes</h3>
                            <p>Font-end & Admin</p>
                        </div>
                        <div className="rightWrapper">
                            <span className="percentage">+34%</span>
                            <span className="bar five">
                                <ProgressBar now={84} />
                            </span>
                        </div>
                    </div>
                </div>
            </Card>
            <Card title={'sales statistics'}>
                <Chart
                    options={doubleBarOptions}
                    series={doubleBarSeries}
                    type="bar"
                    width="100%"
                    height="95%"
                />
            </Card>
        </div>
    )
}

export default Main
