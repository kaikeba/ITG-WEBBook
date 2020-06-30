import React, { Fragment } from 'react';
import Title from './title';
import Create from './create';
import Todos from './todos';
import State from './state';
import { useSelector } from 'react-redux';
function App(){
    let data = useSelector(state=>state);
    return (<div id="todoapp">
        <Title />
        <div className="content">
            <Create />
            {
              data.length>0?<Fragment>
                <Todos />
                <State />
              </Fragment>
              :
              ""
            }
        </div>
    </div>)
}
export default App;
