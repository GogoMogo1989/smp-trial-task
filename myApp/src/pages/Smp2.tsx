import {
    IonHeader, 
    IonPage,
    IonTitle, 
    IonToolbar, 
    IonCardContent, 
    IonBackButton,
    IonButtons
} from '@ionic/react';
import './Smp2.css';
import React from 'react';

const Smp2: React.FC = () =>{


    return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>SMP Trial task, React + Ionic</IonTitle>
              <IonButtons slot="start">
                <IonBackButton /> 
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          
          <IonCardContent>
             
          </IonCardContent>
        </IonPage>
    )
};

export default Smp2;