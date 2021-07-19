import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Link from './Link'
// import Log from './Log/Log'
// import SighnIn from './SighnIn/SighnIn'

export default function LogIn() {
    return (
        <div>
        <Link/>
            <Switch>
                <Route exact path="/login" component={Log}/>
                {/* <Route exact path="/signin" component={SighnIn}/> */}
            </Switch>
            
        </div>
    )
}
