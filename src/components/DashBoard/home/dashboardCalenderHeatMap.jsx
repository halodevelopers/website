import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import React from 'react';
import moment from 'https://cdn.skypack.dev/moment?min';
import Timeline from './heatmap';
import clsx from 'clsx';
import './css/heatmap.css';
// function DashBoardCalenderHeatMap() {
//      // 1 year range
//   let startDate = moment().add(-365, 'days');
//   let dateRange = [startDate, moment()];

//   let data = Array.from(new Array(365)).map((_, index) => {
//     return {
//       date: moment(startDate).add(index, 'day'),
//       value: Math.floor(Math.random() * 100)
//     };
//   });


//     return (
//         <>
            
    
//       <Timeline range={dateRange} data={data} colorFunc={({ alpha }) => `rgba(3, 160, 3, ${alpha})`} />
      

            
//         </>
//     );
// }





function DashBoardCalenderHeatMap() {
    // 1 year range
    let startDate = moment().add(-365, 'days');
    let dateRange = [startDate, moment()];
  
    let data = Array.from(new Array(365)).map((_, index) => {
      return {
        date: moment(startDate).add(index, 'day'),
        value: Math.floor(Math.random() * 100)
      };
    });
  
    return (
        <div className="conatiner-fluid takeoers">
            <div className="row">
                <div className="col-md-10">
                <Timeline range={dateRange} data={data} colorFunc={({ alpha }) => `rgba(3, 160, 3, ${alpha})`} />

                </div>
                <div className="col-auto links">
                            <nav className='navigation'>
                                <ul className='list'>
                                    <li className='nav-link bg-primary '><a href="#intro">2022</a></li>
                                    <li className='nav-link'><a href="#about">2021</a></li>
                                    <li className='nav-link'><a href="#tools">2020</a></li>
                                    <li className='nav-link'><a href="#program">2019</a></li>
                                </ul>
                            </nav>
                        </div>
            </div>
        </div>
    )
  }
export default DashBoardCalenderHeatMap;



