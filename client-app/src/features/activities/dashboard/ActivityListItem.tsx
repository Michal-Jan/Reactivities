import { Button, Item, Label } from 'semantic-ui-react';
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

interface Props {
  activity: Activity;
}

export default observer(function ActivityListItem({ activity }: Props) {
  const { activityStore } = useStore();
  const { deleteActivity, loading } = activityStore;

  const [target, setTarget] = useState('');

  function handleActivityDelete(
    event: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(event.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <Item key={activity.id}>
      <Item.Content>
        <Item.Header as='a'>{activity.title}</Item.Header>
        <Item.Meta>{activity.date}</Item.Meta>
        <Item.Description>
          <div>{activity.description}</div>
          <div>
            {activity.city}, {activity.venue}
          </div>
        </Item.Description>
        <Item.Extra>
          <Button
            as={Link}
            to={`/activities/${activity.id}`}
            floated='right'
            content='View'
            color='blue'
          />
          <Button
            name={activity.id}
            loading={loading && target === activity.id}
            onClick={(event) => handleActivityDelete(event, activity.id)}
            floated='right'
            content='Delete'
            color='red'
          />
          <Label basic content={activity.category} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
});
