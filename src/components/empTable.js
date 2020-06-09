import React from 'react';


function Directory(props) {
  return (
    <table class="table table-bordered">
    
    <tbody>
      <tr>
      <td><img src={props.img}/></td>
        <th scope="row">{props.name}</th>
        <td>{props.position}</td>
        <td>{props.mobile}</td>
        <td>{props.email}</td>
      </tr>
    </tbody>
  </table>
    
  );
}
export default Directory









