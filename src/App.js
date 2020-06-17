import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { adminRouter } from './routes'
import {
    Button
} from 'antd'

// const testHOC = (WrappedComponent) => {
//     return class HOCComponent extends Component {
//         render() {
//             return (
//                 <>
//                     <WrappedComponent />
//                     <div>HOC</div>
//                 </>
//             )
//         }
//     }
// }

// @testHOC
class App extends Component {
    render() {
        return (
            <div>
                <div>公共部分</div>
                <Switch>
                    {
                        adminRouter.map(route => {
                            return (
                                <Route
                                    key={route.pathname}
                                    path={route.pathname}
                                    exact={route.exact}
                                    render={(routerProps) => {
                                        return <route.component {...routerProps} />
                                    }}
                                />
                            )
                        })
                    })

                <Redirect to={adminRouter[0].pathname} from="/admin" exact />
                    <Redirect to="/404" />
                </Switch>
            </div>
        )
    }
}

export default App
