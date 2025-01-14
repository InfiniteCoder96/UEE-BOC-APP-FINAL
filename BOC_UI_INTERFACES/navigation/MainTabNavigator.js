import React from 'react';
import { Platform } from 'react-native';
import { DrawerNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ReminderScreen from '../screens/ReminderScreen';
import ThirdPartyBOCAccountScreen from '../screens/ThirdPartyBOCAccountScreen';
import ThirdPartyTransferMenuScreen from '../screens/ThirdPartyTransferMenuScreen';
import ThirdPartyTransferScreen from '../screens/ThirdPartyTransferScreen';
import OtherBankAccCreditMenuScreen from '../screens/OtherBankAccCreditMenuScreen';
import OtherBankAccountScreen from '../screens/OtherBankAccountScreen';
import OtherBankCreditCardScreen from '../screens/OtherBankCreditCardScreen';
import BudgetCalculatorScreen from '../screens/BudgetCalculator';
import AddexpenseScreen from '../screens/AddExpense';
import PayBillsScreen from '../screens/PayBills';
import TransferFinalScreen from '../screens/TransferFinalScreen';
import MessageScreen from '../screens/MessagesScreen';
import MyAccounts from '../screens/MyAccounts';
import MyAccount from '../screens/MyAccountScreen';
import ComposeMessageScreen from '../screens/ComposeMesageScreen';
import AddPayBillsScreen from '../screens/AddPayBills';
import MessageBtn from '../symbols/MaterialButtonMessage';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  // tabBarLabel: 'Home',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-information-circle${focused ? '' : '-outline'}`
  //         : 'md-information-circle'
  //     }
  //   />
  // ),
  header : null,
};

HomeStack.path = '';
const AddPayBillsStack = createStackNavigator(
  {
    AddPayBills: AddPayBillsScreen,
  },
  config
);

AddPayBillsStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

AddPayBillsStack.path = '';

const MessageBtnStack = createStackNavigator(
  {
    MessageBtn: MessageBtn,
  },
  config
);

MessageBtnStack.navigationOptions = {
  // tabBarLabel: 'Home',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-information-circle${focused ? '' : '-outline'}`
  //         : 'md-information-circle'
  //     }
  //   />
  // ),
  header : null,
};

MessageBtnStack.path = '';

const MyAccountsStack = createStackNavigator(
  {
    MyAccounts: MyAccounts,
  },
  config
);

MyAccountsStack.navigationOptions = {
  // tabBarLabel: 'Home',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-information-circle${focused ? '' : '-outline'}`
  //         : 'md-information-circle'
  //     }
  //   />
  // ),
  header : null,
};

MyAccountsStack.path = '';

const MyAccountStack = createStackNavigator(
  {
    MyAccount: MyAccount,
  },
  config
);

MyAccountStack.navigationOptions = {
  // tabBarLabel: 'Home',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-information-circle${focused ? '' : '-outline'}`
  //         : 'md-information-circle'
  //     }
  //   />
  // ),
  header : null,
};

MyAccountStack.path = '';

const ComposeMessageStack = createStackNavigator(
  {
    ComposeMessage: ComposeMessageScreen,
  },
  config
);

ComposeMessageStack.navigationOptions = {
  // tabBarLabel: 'Home',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-information-circle${focused ? '' : '-outline'}`
  //         : 'md-information-circle'
  //     }
  //   />
  // ),
  header : null,
};

ComposeMessageStack.path = '';

const MessageStack = createStackNavigator(
  {
    Message: MessageScreen,
  },
  config
);


MessageStack.navigationOptions = {
  // tabBarLabel: 'Home',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-information-circle${focused ? '' : '-outline'}`
  //         : 'md-information-circle'
  //     }
  //   />
  // ),
  header : null,
};

MessageStack.path = '';

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  config
);

LoginStack.navigationOptions = {
  // tabBarLabel: 'Links',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  // ),
  header : null,
};

LoginStack.path = '';

const BudgetCalculatorStack = createStackNavigator(
  {
    BudgetCalculator: BudgetCalculatorScreen,
  },
  config
);

BudgetCalculatorStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

BudgetCalculatorStack.path = '';

const AddExpenseStack = createStackNavigator(
  {
    AddExpense: AddexpenseScreen,
  },
  config
);

AddExpenseStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

AddExpenseStack.path = '';

const PayBillsStack = createStackNavigator(
  {
    PayBills: PayBillsScreen,
  },
  config
);

PayBillsStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

PayBillsStack.path = '';


const ContactUsStack = createStackNavigator(
  {
    ContactUs: ContactUsScreen,
  },
  config
);

ContactUsStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

ContactUsStack.path = '';

const ForgotPasswordStack = createStackNavigator(
  {
    ForgotPassword: ForgotPasswordScreen,
  },
  config
);

ForgotPasswordStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

ForgotPasswordStack.path = '';

const DashboardStack = createStackNavigator(
  {
    Dashboard: DashboardScreen,
  },
  config
);

DashboardStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

DashboardStack.path = '';

const ReminderStack = createStackNavigator(
  {
    Reminder: ReminderScreen,
  },
  config
);

ReminderStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

ReminderStack.path = '';


const ThirdPartyBOCAccountStack = createStackNavigator(
  {
    ThirdPartyBOCAccount: ThirdPartyBOCAccountScreen,
  },
  config
);

ThirdPartyBOCAccountStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

ThirdPartyBOCAccountStack.path = '';

const ThirdPartyTransferMenuStack = createStackNavigator(
  {
    ThirdPartyTransferMenu: ThirdPartyTransferMenuScreen,
  },
  config
);

ThirdPartyTransferMenuStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

ThirdPartyTransferMenuStack.path = '';

const OtherBankAccCreditMenuStack = createStackNavigator(
  {
    OtherBankAccCreditMenu: OtherBankAccCreditMenuScreen,
  },
  config
);

OtherBankAccCreditMenuStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

OtherBankAccCreditMenuStack.path = '';

const ThirdPartyTransferStack = createStackNavigator(
  {
    ThirdPartyTransfer: ThirdPartyTransferScreen,
  },
  config
);

ThirdPartyTransferStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

ThirdPartyTransferStack.path = '';

const OtherBankAccountStack = createStackNavigator(
  {
    OtherBankAccount: OtherBankAccountScreen,
  },
  config
);

OtherBankAccountStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

OtherBankAccountStack.path = '';

const TransferFinalStack = createStackNavigator(
  {
    TransferFinal: TransferFinalScreen,
  },
  config
);

TransferFinalStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

TransferFinalStack.path = '';

const OtherBankCreditCardStack = createStackNavigator(
  {
    OtherBankCreditCard: OtherBankCreditCardScreen,
  },
  config
);

OtherBankCreditCardStack.navigationOptions = {
  // tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  header : null,
};

OtherBankCreditCardStack.path = '';

const tabNavigator = createStackNavigator({
  HomeStack,
  LoginStack,
  ContactUsStack,
  ForgotPasswordStack,
  DashboardStack,
  ReminderStack,
  ThirdPartyTransferStack,
  ThirdPartyTransferMenuStack,
  ThirdPartyBOCAccountStack,
  OtherBankCreditCardStack,
  OtherBankAccountStack,
  OtherBankAccCreditMenuStack,
  BudgetCalculatorStack,
  AddExpenseStack,
  PayBillsStack,
  TransferFinalStack,
  MessageStack,
  MyAccountStack,
  MyAccountsStack,
  ComposeMessageStack,
  AddPayBillsStack,
  MessageBtnStack
});

tabNavigator.path = '';

const AppContainer = createAppContainer(tabNavigator);

export default AppContainer;
