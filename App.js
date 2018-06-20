/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
} from 'react-native';

import {ScrollView, Text} from 'react-native';
import {Button, InputItem, List} from 'antd-mobile-rn';
import PopoverExample from "./components/popover";
import DrawerExample from "./components/drawer";
import BasicPaginationExample from "./components/pagination";
import BasicTagExample from "./components/segment";
import BasicTabsExample from "./components/tabs";
import BasicTabBarExample from "./components/tabBar";
import ButtonExample from "./components/button";
import BasicCheckboxExample from "./components/checkbox";
import PopupExample from "./components/datePicker";
import DatePickerViewExample from "./components/datePickerView";
import BasicInputItemExample from "./components/input";
import ImagePickerExample from "./components/imgePicker";
import PickerExample from "./components/picker";
import PickerViewExample from "./components/pickerView";
import BasicRadioExample from "./components/radio";
import SearchBarDemo from "./components/searchBar";
import BasicSliderExample from "./components/slide";
import StepperExample from "./components/stepper";
import SwitchExample from "./components/switch";
import BasicTextAreaItemExample from "./components/textarea";
import AccordionExmple from "./components/accordion";
import BadgeExample from "./components/badge";
import BasicCarouselExample from "./components/carouse";
import BasicCardExample from "./components/card";
import BasicGridExample from "./components/grid";
import IConDemo from "./components/icon";
import BasicListExample from "./components/list";
import NoticeBarExample from "./components/noticBar";
import BasicTimelineExample from "./components/steps";
import TagExample from "./components/tag";
import ActionSheetExample from "./components/actionsheet";
import ActivityIndicatorExample from "./components/activityIndicator";
import BasicModalExample from "./components/modal";
import BasicProgressExample from "./components/process";
import ToastExample from "./components/toast";
import BasicSwipeActionExample from "./components/swip";
import ResultExample from "./components/result";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <ResultExample/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
