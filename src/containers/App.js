import React, {Component} from 'react';
import {connect} from 'react-redux';
import { ConfigProvider, Root, View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import * as vkSelectors from '../store/vk/reducer';
import * as vkActions from '../store/vk/actions';
import AboutPanel from './AboutPanel';
import MainPanel from './MainPanel';
import { RouteNode } from 'react-router5'
import VKConnect from '@vkontakte/vk-connect'

const isWebView = VKConnect.isWebView();

class App extends Component {

	componentWillMount() {
		this.props.dispatch(vkActions.initApp());
	}

	render() {
		let activePanel = this.props.route.name === 'about' ? 'aboutPanel' : 'mainPanel';

        return (
            <ConfigProvider insets={this.props.insets} isWebView={isWebView}>
                <Root activeView="mainView">
                    <View id="mainView" activePanel={activePanel}>
                        <MainPanel router={this.props.router} id="mainPanel" accessToken={this.props.accessToken}/>
                        <AboutPanel router={this.props.router} id="aboutPanel"/>
                    </View>
                </Root>
            </ConfigProvider>
        );
	}
}

function mapStateToProps(state) {
	return {
        accessToken: "", //vkSelectors.getAccessToken(state),
        insets: "", // vkSelectors.getInsets(state),
    };
}

export default connect(mapStateToProps)(
	(props) => (
		<RouteNode nodeName="">
			{({ route }) => <App route={route} {...props}/>}
		</RouteNode>
	)
);




// import React, { useState, useEffect } from 'react';
// import connect from '@vkontakte/vk-connect';
// import View from '@vkontakte/vkui/dist/components/View/View';
// import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
// import '@vkontakte/vkui/dist/vkui.css';

// import Home from '../panels/Home';
// import Persik from '../panels/Persik';

// const App = () => {
// 	const [activePanel, setActivePanel] = useState('home');
// 	const [fetchedUser, setUser] = useState(null);
// 	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

// 	useEffect(() => {
// 		connect.subscribe(({ detail: { type, data }}) => {
// 			if (type === 'VKWebAppUpdateConfig') {
// 				const schemeAttribute = document.createAttribute('scheme');
// 				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
// 				document.body.attributes.setNamedItem(schemeAttribute);
// 			}
// 		});
// 		async function fetchData() {
// 			const user = await connect.sendPromise('VKWebAppGetUserInfo');
// 			setUser(user);
// 			setPopout(null);
// 		}
// 		fetchData();
// 	}, []);

// 	const go = e => {
// 		setActivePanel(e.currentTarget.dataset.to);
// 	};

// 	return (
// 		<View activePanel={activePanel} popout={popout}>
// 			<Home id='home' fetchedUser={fetchedUser} go={go} />
// 			<Persik id='persik' go={go} />
// 		</View>
// 	);
// }

// export default App;

