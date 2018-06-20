import React from 'react';
import { View } from 'react-native';
import { DatePicker, List } from 'antd-mobile-rn';

// const now = new Date();
export default class PopupExample extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: undefined,
        };
    }

    onChange = (value) => {
        this.setState({ value });
    }

    render() {
        return (
            <View>
                <List>
                    <DatePicker
                        value={this.state.value}
                        mode="date"
                        minDate={new Date(2015, 7, 6)}
                        maxDate={new Date(2026, 11, 3)}
                        onChange={this.onChange}
                        format="YYYY-MM-DD"
                    >
                        <List.Item arrow="horizontal">Select Date</List.Item>
                    </DatePicker>
                </List>
            </View>
        );
    }
}