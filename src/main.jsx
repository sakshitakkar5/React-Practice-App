import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import CSSInline from './CSSInline';
import CSSExternal from './CSSExternal';
import TailwindExample from './TailwindExample';
import CSSModule1 from './CSSModule1';


// import CSSModule from './CSSModule'
// import './index.css'
// import Ap from './App.jsx'
// import Application11 from './App.jsx'
// import {App} from './App.jsx'
// import Message from './Message.jsx'
// import Dashboard from './Dashboard.jsx'
// import StudentClassComp from './StudentClassComp.jsx'
// import ChangeClassComponent from './ChangeClassComponent.jsx'
// import PropsComponent from './PropsComponent.jsx'
// import DestructuringProps from './destructuringProps.jsx'
// import HorizontalGreenEnsembleWorkflow from './Block.jsx'
import CalibrationDrivenWorkflow from './Block.jsx';
import App1 from './App1';
import CSSModule from './CSSModule';
import ImageFile from './ImageFile.jsx';
import EventHandler from './EventHandler.jsx';
import EventHandler1 from './EventHandler1.jsx';
import ClassState from './ClassState.jsx';
import IncrementDecrement from './IncrementDecrement.jsx';
import UseState from './UseState.jsx';
import UseState1 from './UseState1.jsx';
import UseState2 from './UseState2.jsx';
import UseEffect from './UseEffect.jsx';
import ShoppingCartUseState from './ShoppingCartUseState.jsx';
import PasswordExampleUsestate from './PasswordExampleUseState.jsx';
import ProfileCardTailwind from './ProfileCardTailwind.jsx';

import CartExampleUseEffect from './CartExampleUseEffect.jsx';
import PasswordExampleUseState from './PasswordExampleUseState.jsx';
import WithoutUseContext from './WithoutUseContext.jsx';
import UseContextFile from './UseContextFile.jsx';
import ProviderComp from './Components/ProviderComp.jsx';
// import ThemeProvider from './Components/ThemeProvider.jsx';
import WithoutUseContext1 from './UseContext/WithoutUseContext1.jsx';
import ProviderComponent from './UseContext/ProviderComponent.jsx';
import ThemeProvider from './UseContext/ThemeProvider.jsx';
import UseCallbackExample from './UseCallback/UseCallbackExample.jsx';
import ShoppingCart from './UseCallback/ShoppingCart.jsx';
import IceCreamShop from './UseCallback/IceCreamShop.jsx';
import ParentComponent from './UseCallback/ParentComponent.jsx';
import MyParentComp from './UseCallback/MyParentComp.jsx';
import UseMemoExample from './UseMemoExample.jsx';
import UseMemoExample1 from './UseMemoExample1.jsx';
import UseReducerExample1 from './UseReducer/UseReducerExample1.jsx';
import UseReducerExample2 from './UseReducer/UseReducerExample2.jsx';
import IncreDecre from './UseCallback/IncreDecre.jsx';
import ThemeExample from './UseCallback/ThemeExample.jsx';
import UseMemoPractice from './UseMemoPractice.jsx';
import UseRefExample from './UseRefExample.jsx';
import UseReducerExample3 from './UseReducer/UseReducerExample3.jsx';
import UseRefExample1 from './UseRef/UseRefExample1.jsx';
import UseRefExample2 from './UseRef/UseRefExample2.jsx';
import UseRefExample3 from './UseRef/UseRefExample3.jsx';
import CustomHookComponent from './CustomHooks/CustomHookComponent.jsx';
import MenuCart from './Assignment/MenuCart.jsx';
import StepCounter from './Assignment/StepCount.jsx';
import TabSwitcher from './Assignment/TabSwitcher.jsx';
import MovieCard from './Assignment/MovieCard.jsx';
import MoviesList from './Assignment/MoviesList.jsx';
import ContolledComponent from './Form Handling/ContolledComponent.jsx';
import ControlledComponent1 from './Form Handling/ControlledComponent1.jsx';
import CustomToggleON from './CustomHooks/CustomToggleON.jsx';
import ControlledComponentPractice from './Form Handling/ControlledComponentPractice.jsx';
import ControlledComponentPractice1 from './Form Handling/ControlledComponentPractice1.jsx';
import UncontrolledComponent from './Form Handling/UncontrolledComponent.jsx';
import FormValidation from './Form Handling/FormValidation.jsx';
import FormValidationPractice from './Form Handling/FormValidationPractice.jsx';
import FormValidationPractice1 from './Form Handling/FormValidationPractice1.jsx';
import HTTPFetchRequest from './HTTPRequests/HTTPFetchRequest.jsx';
import ActivityusingForm from './HTTPRequests/ActivityusingForm.jsx';
import HTTPFetchRequest1 from './HTTPRequests/HTTPFetchRequest1.jsx';
import HTTPAxiosRequest from './HTTPRequests/HTTPAxiosRequest.jsx';
import TableAxios from './HTTPRequests/TableAxios.jsx';
import Parent from './Routing/Parent.jsx';
import ParentRouting from './RoutingExample1/ParentRouting.jsx';
import ParentPractice from './Routing/ParentPractice.jsx';
// import ParentRouting2 from './RoutingExample2.jsx/ParentRouting2.jsx';

// import { store2 } from './store2.jsx';
import App from './App.jsx';
import { Provider } from 'react-redux';
import {store3} from './store3.jsx'

const Elt1 = React.createElement('div',{style:{backgroundColor:'pink'}},React.createElement('h1',{style:{color:'green'}},'Nested create React Element Example'))
// function Car(props){
//   return(
//     <div>
//       <h1>I have a {props.brand} car</h1>
//     </div>
//   )
// }

// function Garage(){
//   return(
//     <>
//     <h1>This is my new garage</h1>
//     <Car brand = "Maruti"/>
//     <Car brand = "tata"/>
//     </>
//   )
// }

let Years = [2000, 2002, 2004];
let carInfo = {brand:"Ford", color:"Black"}
createRoot(document.getElementById('root')).render(

  <Provider store={store3}>

    <App />
  </Provider>




    
 
)
