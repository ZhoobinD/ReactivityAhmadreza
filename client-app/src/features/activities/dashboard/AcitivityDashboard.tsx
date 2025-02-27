import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default observer(function ActivityDashboead() {
    const {activityStore} = useStore();
    const {loadActivities, activityRegistery} = activityStore;

    useEffect(() => {
      if (activityRegistery.size <= 1) loadActivities();
    }, [loadActivities, activityRegistery.size])
  
    if (activityStore.loadingInitial) return <LoadingComponent content={'Loading App'}></LoadingComponent>

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                <h2>Acitivity Filters</h2>
            </Grid.Column>
        </Grid>
    )
})