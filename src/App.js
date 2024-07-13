import './App.css';
import AboutMe from './Components/AboutMe';
import WorkExperince from './Components/WorkExperience'
import Form from './Components/Form';
import Services from './Components/services/Services';
import UseStateRenderization from './Components/UseStateRenderization';
import ListStacks from './Components/ListStack';
import Table from './Components/Table';




function App() {

  const stacks = ["Front-End","• JS","• React"," ","Back-End","• Node JS","• Python","• PHP"]
  const emptyList =[]

  const tableStacks = ["Javascript","3 years","Crud, Landing Page"]

 
 
  return (
<div className="App">
    <AboutMe fullName="Gabriel Carvalho" 
             ocupation="Software Developer"
             name="Gabriel" 
             age="25" 
             techStack="JavaScript with Node.js and React"/> 
 
    <WorkExperince companyName={"Idéli.Oui Beauty"}
                   positionTitle={"Data Analyst and Information Systems Developer"}
                   employmentData={"2023 - Actualy"}/> 
  
    <Form />

    <Services/>

    <UseStateRenderization/>

    

    <ListStacks arrayStacks={stacks}/>
    <ListStacks arrayStacks={emptyList}/>
    <Table stacksIused={tableStacks}/>
    

</div>
  
  );
}

export default App;
