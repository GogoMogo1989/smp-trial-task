import { 
      IonContent, 
      IonHeader, 
      IonPage, 
      IonModal, 
      IonTitle, 
      IonToolbar, 
      IonCard, 
      IonCardContent, 
      IonItem, 
      IonLabel, 
      IonInput, 
      IonButton,
      IonButtons  
} from '@ionic/react';
import './Smp.css';
import {useForm} from "react-hook-form"
import React, { useState } from 'react';
import {NavContext} from '@ionic/react';
import {useContext} from 'react';

const Smp: React.FC = () => {

  const [title, setTitle] = useState("")
  const [title2, setTitle2] = useState("")
  const [title3, setTitle3] = useState("")
  const [showModal, setShowModal] = useState(false);
  const { navigate } = useContext(NavContext);

  const {register, handleSubmit, formState: {errors}} = useForm()
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  const onSubmit = (data:any) => {
    alert(JSON.stringify(data, null, 2));
    return navigate("/Smp2")
  };

  return (
    <><IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">SMP Trial task, React + Ionic</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>

          <IonContent>
     {/*        <IonHeader>
              <IonToolbar>
                <IonTitle>Datas</IonTitle>
                <IonButtons slot="end">
                  <IonButton onClick={()=>setShowModal(false)}>Close</IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader> */}
            <IonModal isOpen={showModal} breakpoints={[0, 0.2, 0.5, 1]} initialBreakpoint={0.5} backdropBreakpoint={0.2}>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Datas</IonTitle>
                <IonButtons slot="end">
                  <IonButton onClick={()=>setShowModal(false)}>Close</IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
              <IonCardContent>
                <h2>Name: {text}</h2>
                <h2>Number: {number}</h2>
                <h2>Password: {title3}</h2>
              </IonCardContent>
            </IonModal>
          
          </IonContent>


          <form onSubmit={handleSubmit(onSubmit)} className="ion-padding">
            <IonCardContent>
              <IonItem>
                <IonLabel position="floating">Name</IonLabel>
                <IonInput required
                  value={text}
                  placeholder="Enter your name"
                  type="text"
                  onIonChange={e => setText(e.detail.value!)}
                  clearInput
                  onIonInput={(e: any) => setTitle(e.target.value)}
                  {...register("input_id1", { required: true })} />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Number</IonLabel>
                <IonInput required
                  value={number}
                  placeholder="Enter number"
                  type="number"
                  onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}
                  onIonInput={(e: any) => setTitle2(e.target.value)}
                  {...register("input_id2", { required: true })} />
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Password</IonLabel>
                <IonInput required
                  value={title3}
                  placeholder="Enter your password"
                  type="password"
                  onIonInput={(e: any) => setTitle3(e.target.value)}
                  {...register("input_id3", { required: true })} />
              </IonItem>
              <IonButton className="ion-margin-top" expand="block" type="submit" onClick={() => setShowModal(true)}>Submit</IonButton>
            </IonCardContent>
          </form>


        </IonCard>
      </IonContent>
    </IonPage>
    </>
  );
 
};

export default Smp;
