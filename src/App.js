import React,{Component} from 'react';
import './App.css';
import employeelist from './employeelist.json';
import Directory from './components/empTable.js';
import  InputData from './components/inputfield.js';
import TableIndex from './components/tableindex.js';
class App extends Component {
  state = {employeelist: employeelist,
    username: ""
  };
  changeUserName = (username) => {this.setState({ username: username });
    console.log(this.state)
  }

  render() {
    console.log(employeelist)
    return (

      <div>
        
        <InputData
          handleSubmit={this.changeUserName}/>
        
       
        <TableIndex/>
        {this.state.employeelist.filter(employee => {
          if (!this.state.username) {
            return true
          } else if (employee.name.toLowerCase().includes(this.state.username.toLowerCase())) {
            return true
          } else {
            return false
          }
        }).map((employeelist,index)=>(
            <Directory key={index}
              img={employeelist.img}
              name={employeelist.name}
              position={employeelist.position}
              mobile={employeelist.mobile}
              email={employeelist.email}
              />
          ))};
        </div>
      );
          }}
export default App;