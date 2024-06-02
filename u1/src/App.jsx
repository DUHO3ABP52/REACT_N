import Header from './components/Header/Header';
import TeachSection from './components/TeachSection';
import EffectSection from './components/EffectSection';
import Tabs from './components/Tabs'
import IntroSection from './components/IntroSection';
import TabSection from './components/TabSection';
import FeedbackSection from './components/FeedbackSection';
import { useState } from 'react';


export default function App() {
  const [tab, setTab] = useState('effect');

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabSection active={tab} onChange={(current) => setTab(current)}/>

        {tab === 'main' &&  (
          <>
          <TeachSection />       
          <Tabs />
          </>
        )} 

        {tab === 'feedback' && <FeedbackSection />}

        {tab === 'effect' && <EffectSection />}

      </main>
    </>
  );
}


