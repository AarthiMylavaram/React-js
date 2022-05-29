//import react from 'react';
import DataContext from './DataContext';
import { useState } from 'react'; 
const Sample = (props)=>{
    // const s1 = {
    //     'name':'Aarthi',
    //     'sec':'b'
    // }
    // const [state, setState]= useState(s1);
    // const update = () =>{
    //     setTimeout(() => {
    //             setState({
    //                 'name':'Sowmya',
    //                 'sec': 'a'
    //             })
    //     }, 1000);}
    // const [addTableData, setAddtableData] = useState({
    //     rowText:'',
    //     columnText:''
    // })//All our inputs will be linked here}
    
        const [addTableData, setAddtableData] = useState({
          rowText:[''],
          columnText:['']
      })
        
    //     const handleAddTableChange = (e) =>{
    //       e.preventDefault(); 
    //       const feildName = e.target.getAttribute('name'); //This gets the name the user gave
    //       const feildValue = e.target.value;//this gets the actuall value
    //       const newTabledata = {...addTableData};//copy of the existing row or column data
    //       newTabledata[feildName] = feildValue;//updates the data
      
    //       setAddtableData(newTabledata);
      
      
      
    //   }
      
    //   const onclickSubmit=(e) =>{
    //     e.preventDefault();
    //     console.log(addTableData);
    //   }
   
   
    

    return(
        <DataContext.Provider value={{addTableData, setAddtableData
        //  , handleAddTableChange ,
        //  onclickSubmit
         }}>
            {props.children}
        </DataContext.Provider>
    )
    }

export default Sample;