import { useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import NavBar from './NavBar'
import ActivityDashboead from '../../features/activities/dashboard/AcitivityDashboard'
import LoadingComponent from './LoadingComponent'
import { useStore } from '../stores/store'
import { observer } from 'mobx-react-lite'

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

  if (activityStore.loadingInitial) return <LoadingComponent content={'Loading App'}></LoadingComponent>

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>        
        <ActivityDashboead />
      </Container>
    </>
  )
}

export default observer(App)
