import React from 'react'
import {Card, CardTitle} from 'material-ui/Card';

export default (props) => {
  return (
    <Card>
      <CardTitle title={props.title} subtitle={props.subTitle} />
    </Card>
  )
}
