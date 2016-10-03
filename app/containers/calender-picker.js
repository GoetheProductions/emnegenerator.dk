/* eslint react/no-multi-comp:0, no-console:0 */

import 'rc-calendar/assets/index.css';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import React, {Component} from 'react';
import Picker from 'rc-calendar/lib/Picker';
import 'rc-time-picker/assets/index.css';
import daDK from 'rc-calendar/lib/locale/da_DK';
import 'rc-time-picker/assets/index.css';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import moment from 'moment';
import 'moment/locale/da';

const formatStr = 'YYYY-MM-DD HH:mm:ss';
const cn = location.search.indexOf('cn') !== -1;

const now = moment();
now.locale('da').utcOffset(8);

const defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

const timePickerElement = <TimePickerPanel />;

export class RangedCalender extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: []
        }
    }

    onChange(value) {
        this.setState({ value });
    }

    disabledDate(current) {
        const date = moment();
        date.hour(0);
        date.minute(0);
        date.second(0);
        return current.isBefore(date);  // can not select days before today
    }

    format(v) {
        return v ? v.format(formatStr) : '';
    }

    isValidRange(v) {
        return v && v[0] && v[1];
    }

    onStandaloneChange(value) {
        console.log('onChange');
        console.log(value[0] && this.format(value[0]), value[1] && this.format(value[1]));
    }
    
    render() {
        return (
        <RangeCalendar
            showWeekNumber={false}
            defaultValue={now}
            dateInputPlaceholder={['start', 'end']}
            locale={daDK}
            showOk={false}
            showClear
            format={formatStr}
            onChange={this.onStandaloneChange}
            onSelect={this.onStandaloneSelect}
            disabledDate={this.disabledDate}
            timePicker={timePickerElement}
        />
        );
    }
}