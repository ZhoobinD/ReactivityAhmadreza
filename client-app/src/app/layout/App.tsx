import { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from 'semantic-ui-react'
import { Activity } from '../models/activity'
import NavBar from './NavBar'
import ActivityDashboead from '../../features/activities/dashboard/AcitivityDashboard'
import {v4 as uuid} from 'uuid'

function App() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/Activities')
      .then(response => {
        console.log(response)
        setActivities(response.data)
      })
  }, [])

  function handleSelectActivity(id: string)
  {
    setSelectedActivity(activities.find(x => x.id === id))
  }

  function handleCancelActivity()
  {
    setSelectedActivity(undefined)
  }

  function handleFormOpen(id?: string)
  {
    id ? handleSelectActivity(id) : handleCancelActivity();
    setEditMode(true) 
  }

  function handleFormClose() {
    setEditMode(false)
  }

  function handleCreateOrEditActivity(activity: Activity)
  {
    activity.id 
      ? setActivities([...activities.filter(a => a.id !== activity.id), activity]) 
      : setActivities([...activities, {...activity, id: uuid()}])
    setEditMode(false)
    setSelectedActivity(activity)
  }

  function handleDeleteActivity(id: string)
  {
    setActivities([...activities.filter(x => x.id !== id)])
  }

  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboead 
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </>
  )
}

export default App
