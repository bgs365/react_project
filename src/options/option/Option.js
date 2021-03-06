import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {Media} from "react-md";

const Option = (props) => {
    return(
        <div>
            { props.course ? (
                <Card >
                    <Media>
                        <img src={props.course.fields.image} alt={props.course.fields.title} />
                    </Media>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.course.fields.title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={''} target="_blank">
                            En France
                        </Button>
                        <Button size="small" color="primary" href={''} target="_blank">
                            À l'international
                        </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}
export default Option;