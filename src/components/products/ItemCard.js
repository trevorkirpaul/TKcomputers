import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import {API} from '../../config'

// includes trailing forward slash from source
const IMGURL = `http://${API.IMAGES_URI}`


export default () => {
  return (
   <Card>  
   <CardMedia
      overlay={<CardTitle title="Andromeda" subtitle="A powerful server" />}
    >
      <img src={`${IMGURL}prebuilt-andromeda.jpg`} alt="" />
    </CardMedia>
   <CardText>
     Lorem ipsum dolor sit amet, consectetur adipisicing.
   </CardText>
    </Card>
  )
}
