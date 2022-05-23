import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  
  return (
    <div>
      <ul className="nav nav-pills nav-fill" >
  <li className="nav">
   <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    File
  </button>
  </li>
  <li className="nav-item">
  <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Data
  </button>
  </li>
  <li className="nav-item">
  <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Worksheet</button>
  </li>
  <li className="nav">
  <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Dashboard</button>
  </li>
</ul>
<hr style={{color: "black"}}/>
<div className='task'>
<div className='gop'>
<table className='table table-bordered border-dark' style={{width:'160px'}}>
<thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col"><button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Datafeild</button></th>
      <th scope="col"><button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Analytics</button></th>
      {/* <th scope="col">Handle</th> */}
    </tr>
  </thead>
  <tbody style={{height:'80vh'}}>
    <tr>
     <td></td>
     <td></td>
     </tr>
    </tbody>
</table>
<table className='table table-bordered border-dark' >
  
  <tbody >
    <tr className='align'>
      
      <td style={{paddingRight:'90px'}} ><button type="button"  class="btn btn-secondary btn-sm "><i>Filters</i></button><br/><br/>
      <button type="button" class="btn btn-secondary btn-sm"><i>Marks</i></button><br/><br/>
      <button type="button" class="btn btn-secondary btn-sm"><i>Pages</i></button></td>
      
    </tr>
    
 </tbody>
</table>
</div>

<table className='table table-bordered border-dark' style={{justifyContent:'right'}}  >
<tbody >
    <tr>
      
      <td >row: <hr/> column:<hr /> <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Submit</button> </td>
      
    </tr></tbody>
</table>
</div>
</div>
   
  );
}

export default App;
