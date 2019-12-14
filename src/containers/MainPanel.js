import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Panel, PanelHeader, Div, Group } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import * as vkSelectors from '../store/vk/reducer';
import logo from '../logo.png';

class MainPanel extends Component {

    componentWillMount() {
        
    }

    render() {
        // const isProduction = process.env.NODE_ENV === 'production';
        // let logger = null;
        // if (!isProduction) {
        //     logger = <Logger/>;
        // }

        return (
            <Panel id={this.props.id}>
                <PanelHeader>
                    Meal planner
                </PanelHeader>
                <Div style={{textAlign: 'center', marginTop: 10}}>
                    <img width={96} height={96} src={logo} alt="logo"/>
                </Div>
                {/* <Group title="Курс ЦБ РФ">
                    <CurrencyRateDashboard/>
                </Group>
                <Group title="Калькулятор">
                    <CurrencyConverter/>
                </Group> */}
            </Panel>
        );
    }
}

function mapStateToProps(state) {
    return {
        notificationStatus: vkSelectors.getNotificationStatus(state),
    };
}

export default connect(mapStateToProps)(MainPanel);
