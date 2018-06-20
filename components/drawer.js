import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Drawer, List, WhiteSpace } from 'antd-mobile-rn';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default class DrawerExample extends React.Component {
    drawer;

    onOpenChange = (isOpen) => {
        console.log('是否打开了 Drawer', isOpen.toString());
    }

    render() {
        const itemArr = Array.apply(null, Array(20))
            .map(function(_, i) {
                return i;
            })
            .map((_i, index) => {
                if (index === 0) {
                    return (
                        <List.Item
                            key={index}
                            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                            multipleLine
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Text>Categories - {index}</Text>
                                <Button
                                    type="primary"
                                    size="small"
                                    onClick={() => this.drawer.closeDrawer()}
                                >
                                    close drawer
                                </Button>
                            </View>
                        </List.Item>
                    );
                }
                return (
                    <List.Item
                        key={index}
                        thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                    >
                        <Text>Categories - {index}</Text>
                    </List.Item>
                );
            });

        const sidebar = (
            <ScrollView style={[styles.container]}>
                <List>{itemArr}</List>
            </ScrollView>
        );

        return (
            <Drawer
                sidebar={sidebar}
                position="left"
                open={false}
                drawerRef={(el) => (this.drawer = el)}
                onOpenChange={this.onOpenChange}
                drawerBackgroundColor="#ccc"
            >
                <View style={{ flex: 1, marginTop: 114, padding: 8 }}>
                    <Button onClick={() => this.drawer && this.drawer.openDrawer()}>
                        Open drawer
                    </Button>
                    <WhiteSpace />
                </View>
            </Drawer>
        );
    }
}