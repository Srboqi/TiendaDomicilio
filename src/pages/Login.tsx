import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonPage, IonRow } from '@ionic/react';
import React, {useState} from 'react';

import './Login.css';
import {loginUser} from '../Controller/UserController'

const Login: React.FC = () => {
 
  const  [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [entry, setEntry] = useState("/page/Inicio");

  async function login(){
    
    const res = await loginUser(username, password);
        
   /* if(loginUser(username, password)){
      setEntry("/page/Inicio")
    }else{
      setEntry("/logo")
    }*/
   // console.log( `${res ? 'login success' : 'login failed'}`);
  }

  return (
    <IonPage>
      <IonContent >
        <IonGrid class="bg">
          <IonRow class="cont">
            <IonCol>
              <IonRow>
                <IonInput class="entrada" 
                  placeholder="Nombre de usuario"
                  onIonChange = {(e: any)=> setUsername(e.target.value)}>
                </IonInput>
              </IonRow>
              <IonRow>
                <IonInput class="entrada" type ="password" placeholder="Contraseña" onIonChange = {(e:any) => setPassword(e.target.value)}> </IonInput>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol id="bIngresar">
              <IonButton onClick = { () => {login()}} href={entry}>
                Iniciar Sesion
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Login;