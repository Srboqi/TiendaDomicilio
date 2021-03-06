import React, {useState} from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { Redirect, Route } from 'react-router-dom';
import Menu from '../components/Menu'
import Page from './Page'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '../Styles/styles.css'
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.css';

const App: React.FC = () => {

    return (
        <IonSplitPane contentId="main">
          <Menu TypeUser="Tienda"/>
          <IonRouterOutlet id="main">
              <Page/>
          </IonRouterOutlet>
        </IonSplitPane>
    );
  };
  
  export default App;