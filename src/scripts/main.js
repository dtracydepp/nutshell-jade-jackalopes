import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"

import "./events/EventHTML.js"
import "./events/EventProvider.js"
// import "./events/EventModalTester.js"
import { EventList } from "./events/EventList.js"

import "./Weather/WeatherList.js"
import "./events/EventForm.js"

LoginForm()
RegisterForm()
Nutshell()
//openEventModal()

// EventForm()
EventList()



/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/
