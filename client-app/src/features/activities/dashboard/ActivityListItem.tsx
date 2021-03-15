import { Button, Icon, Item, Segment } from 'semantic-ui-react';
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
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src='/assets/user.png' />
            <Item.Content>
              <Item.Header as={Link} to={`/activities/${activity.id}`}>
                {activity.title}
              </Item.Header>
              <Item.Description>Hosted by User</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {activity.date}
        </span>
        <span>
          <Icon name='marker' /> {activity.venue}
        </span>
      </Segment>
      <Segment secondary>Attendies</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          color='teal'
          floated='right'
          content='View'
        />
      </Segment>
    </Segment.Group>
  );
});
