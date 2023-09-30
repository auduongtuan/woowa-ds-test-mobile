/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 40,
  },
  page: {
    backgroundColor: Colors.white,
    padding: 20,
    paddingTop: 0,
  },
});

import {
  CheckCircleFilled,
  MagnifyingGlassFilled,
  SendOutlined,
  SendFilled,
  PaymentMomo,
  PaymentZaloPay,
  PaymentViettelMoney,
  BasketOutlined,
  BasketFilled,
  MultiBasketOutlined,
  MultiBasketFilled,
  PaymentVnpayQr,
  PersonOutlined,
  PersonFilled,
  HeartOutlined,
  HeartFilled,
  CurrencyDongOutlined,
  CurrencyDollarFilled,
  EyeOutlined,
  EyeFilled,
  LockOpenFilled,
  LockOpenOutlined,
  ScooterOutlined,
  ScooterFilled,
  PromotionOutlined,
  PromotionFilled,
} from '@woowa/woowa-ds-icons-mobile';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.page}>
          <Text style={styles.title}>Outlined and filled icons</Text>
          <View style={styles.container}>
            <CurrencyDongOutlined />
            <CurrencyDollarFilled />
            <EyeOutlined />
            <EyeFilled />
            <ScooterOutlined />
            <ScooterFilled />
            <LockOpenFilled />
            <LockOpenOutlined />
            <PromotionOutlined />
            <PromotionFilled />
            <HeartOutlined />
            <HeartFilled />
            <PersonOutlined />
            <PersonFilled />
            <SendOutlined />
            <SendFilled />
            <BasketOutlined />
            <BasketFilled />
            <MultiBasketOutlined />
            <MultiBasketFilled />
          </View>
          <Text style={styles.title}>Able to change size and color</Text>
          <View style={styles.container}>
            <CheckCircleFilled color="#00a57c" />
            <MagnifyingGlassFilled width={40} height={40} color="#cc6415" />
            <SendFilled width={60} height={60} color="#25afb6" />
          </View>
          <Text style={styles.title}>Payment Icons</Text>
          <View style={styles.container}>
            <PaymentMomo />
            <PaymentZaloPay />
            <PaymentViettelMoney />
            <PaymentVnpayQr />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
