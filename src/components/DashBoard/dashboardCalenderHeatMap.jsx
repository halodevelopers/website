import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import React from 'react';

function DashBoardCalenderHeatMap() {
    return (
        <div>
            <CalendarHeatmap
                values={[
                    { date: '2016-01-01', count: 1 },
                    { date: '2016-01-03', count: 4 },
                    { date: '2016-01-06', count: 2 },
                    // ...and so on
                ]}
                classForValue={(value) => {
                    if (!value) {
                        return 'color-empty';
                    }
                    return `color-scale-${value.count}`;
                }}
            />
        </div>
    );
}

export default DashBoardCalenderHeatMap;