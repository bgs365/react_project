import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Option from './option/Option'

class Options extends Component {
    state = {
        courses: [],
        searchString: ''
    }
    constructor() {
        super()
        this.getCourses()
    }
    getCourses = () => {
        this.state.courses = MENUOPTIONS;
    }
    handleChange = (e) =>{
        this.setState({searchString: e.target.value});
    }
    render() {
        return (
            <div>
                <TextField id="text"
                           type="text"
                           placeholder="Recherche"
                           style={{paddingLeft: 50}}
                           onChange={this.handleChange} />
                { this.state.courses ? (
                    <div>
                        <Grid container style={{padding: 24}}>
                            { this.state.courses.filter( s => s.fields.title.toLowerCase().includes(this.state.searchString)).map(currentCourse => (
                                <Grid item item xs={3} style={{padding: 24}}>
                                    <Option course={currentCourse} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found" }
            </div>
        )
    }
}


const MENUOPTIONS = [
    {
        "fields": {
            "title": "Créer/Gerer Ma societé",
            "image": "http://localhost:63342/21galaxy/src/logo.svg?_ijt=2s779obv4h453qfq9pfkf8uqv8"
        }
    },
    {

        "fields": {
            "title": "Marketing et Communication",
            "image": "http://localhost:63342/21galaxy/src/logo.svg?_ijt=2s779obv4h453qfq9pfkf8uqv8"
        }
    },
    {

        "fields": {
            "title": "Investir",
            "image": "http://localhost:63342/21galaxy/src/logo.svg?_ijt=2s779obv4h453qfq9pfkf8uqv8"
        }
    },
    {

        "fields": {
            "title": "Audit / Finances",
            "image": "http://localhost:63342/21galaxy/src/logo.svg?_ijt=2s779obv4h453qfq9pfkf8uqv8"
        }
    },
    {

        "fields": {
            "title": "Affaires Publics",
            "image": "http://localhost:63342/21galaxy/src/logo.svg?_ijt=2s779obv4h453qfq9pfkf8uqv8"
        }
    },
    {

        "fields": {
            "title": "RH et Formation",
            "image": "http://localhost:63342/21galaxy/src/logo.svg?_ijt=2s779obv4h453qfq9pfkf8uqv8"
        }
    },
    {

        "fields": {
            "title": "Social",
            "image": "http://localhost:63342/21galaxy/src/logo.svg?_ijt=2s779obv4h453qfq9pfkf8uqv8"
        }
    },
    {

        "fields": {
            "title": "Santé",
            "image": "http://localhost:63342/21galaxy/src/logo.svg?_ijt=2s779obv4h453qfq9pfkf8uqv8"
        }
    }
];

export default Options;