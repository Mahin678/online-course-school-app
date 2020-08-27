import React ,{useState} from 'react';
import './App.css';
import data from '../src/FakeData/FakeData'
import Header from './Component/Header/Header';
import Course from './Component/Course/Course';
import MyCourse from './Component/MyCourse/MyCourse';
function App() {
  const [course , setCourse] = useState([])
  const [count , setCount] = useState([])
  //enrol btn 
  const handle = (enrol) =>{
      let newCourse = [...course,enrol]        
      setCourse(newCourse)
  }
  //confirm btn 
  const handleBar = (item) =>{
    let totalCourse = [...count,item]     
            setCount(totalCourse)   
}

  return (
    <div >
      <div className="body">
      <Header count={count}  ></Header>
      <div className="container" >
      <MyCourse course={course} handleBar={handleBar} ></MyCourse>
      <Course data={data} key={data.id} handle={handle} ></Course>
      </div>
      </div>
    </div>
  );
}

export default App;
