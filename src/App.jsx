import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Popular from './pages/Popular';
import Fields from './pages/Fields';
import Payment from './pages/Payment';
import TaskView from './pages/TaskView';
import SocialLocationsMap from './pages/SocialLocationsMap';
import Reyestr from './pages/Reyestr';
import ProactiveComposite from './pages/ProactiveComposite';
import MobileAps from './pages/MobileAps';
import Participation from './pages/Participation';
import LifeSituations from './pages/LifeSituations';
import Faq from './pages/Faq';
import ForForeigners from './pages/ForForeigners';
import StateDuty from './pages/StateDuty';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/spheres" element={<Fields />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/task-view" element={<TaskView />} />
        <Route path="/task-view" element={<TaskView />} />
        <Route path="/social-locations-map" element={<SocialLocationsMap />} />
        <Route path="/reyestr" element={<Reyestr />} />
        <Route path="/proactive-composite" element={<ProactiveComposite />} />
        <Route path="/mobile-apps" element={<MobileAps />} />
        <Route path="/e-participation" element={<Participation />} />
        <Route path="/life-situations" element={<LifeSituations />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/for-foreigners" element={<ForForeigners />} />
        <Route path="/state-duty" element={<StateDuty />} />
      </Route>
    </Routes>
  );
};

export default App;
