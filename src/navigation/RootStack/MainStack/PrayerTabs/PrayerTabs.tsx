import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {View, useWindowDimensions, Text} from 'react-native';
import {MyPrayersScreen} from './MyPrayersScreen';
import {SubscribedScreen} from './SubscribedScreen';
import {colors} from '../../../../shared/colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../MainStack';

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: colors.BLUE_GREEN}}
    style={{backgroundColor: colors.WHITE}}
    renderLabel={({route, focused}) => (
      <Text
        style={{
          color: focused ? colors.BLUE_GREEN : colors.NEW_GREY,
          margin: 8,
        }}>
        {route.title}
      </Text>
    )}
  />
);
type Props = NativeStackScreenProps<MainStackParamList, 'To Do'>;
export const PrayerTabs: React.FC<Props> = ({route, navigation}) => {
  const {columnId} = route.params;
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const FirstRoute = () => (
    <MyPrayersScreen
      columnId={columnId}
      navigation={navigation}
      route={route}
    />
  );

  const SecondRoute = () => (
    <SubscribedScreen
      columnId={columnId}
      navigation={navigation}
      route={route}
    />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const [tabRoutes] = React.useState([
    {key: 'first', title: 'MY PRAYERS'},
    {key: 'second', title: 'SUBSCRIBED'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      style={{backgroundColor: colors.WHITE}}
      navigationState={{index, routes: tabRoutes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};
