import React, { Component } from 'react';
import Expanded from './modules/Expanded';
import ReactDOM from 'react-dom';

async function getCollection(type){
   let add;
   if(type === "s"){
      add = 'students'
   } else if(type === 't'){
      add = 'teachers'
   }
   let result;
   let response = await fetch('http://127.0.0.1:3000/'+add);
   if (response.ok) { // если HTTP-статус в диапазоне 200-299
      result = await response.json();
   } else {
      alert("Ошибка подгрузки "+add+" (HTTP): " + response.status);
   }
   result = result.map(elem=>{ // adding a student or teacher mark
      elem.who = add;
      return elem
   })
   return result
}

class App extends Component {
   constructor(props){
      super(props)
      this.state = {
         search: '',
         humans: [],
         selectedHuman: '',
         expandedPageState: false
      }
   }
   handleChange(e){
      this.setState({search: e.target.value})
   }

   // updateSingleHuman(newElem){
   //    let index = humans.indexOf(this.state.selectedHuman)
   //    this.setState(state=>{
   //       state.humans[index] = newElem
   //       return state
   //    })
   // }

   async loadHumans(){
      let students = await getCollection('s')
      // let teachers = await getCollection('t')
      let humans = students
      return humans
   }

   async componentDidMount(){
      let humans = await this.loadHumans()
      this.setState({humans})
   }

   filtering(str, arr){
      return arr.filter(elem=>{
         elem.name = elem.name.toLowerCase()
         str = str.toLowerCase()
         return elem.name.includes(str)
      })
   }

   selectHuman(human){
      this.setState({
         selectedHuman: human,
         expandedPageState: true
      })
   }
   async deselectHuman(){
      let humans = await this.loadHumans()
      this.setState({
         selectedHuman: '',
         expandedPageState: false,
         humans
      })
   }


   render() {
      let {search, humans, selectedHuman, expandedPageState} = this.state
      humans = this.filtering(search, humans)
      humans = humans.map(human=>{
         return (
         <div class="gall__item gall-item" onClick={()=>this.selectHuman(human)}>
            <div class="gall-item__photo">
               <img src={human.photo} alt="" class="gall-item__img" />
            </div>
            <p class="gall-item__title">{human.name}</p>
            {/* <p class="gall-item__descr">Анна Богуцька</p> */}
         </div>
         )
      })

      let expandedPage = expandedPageState ? <Expanded human={selectedHuman} funcs={this}/> : '';
      return (
      // <div class="page" id="page-books">
         <div class="page">
         <div class="page__inner">
            <div class="page__hd">
               <p class="page__title">Учні</p>
               {/* <div class="page__icon page__icon--left page__close-icon">
                  <i class="bi bi-arrow-left"></i>
               </div> */}
            </div>
            <div class="page__bd">
               <div class='gall gall--books'>
                  <div class="gall__inner">
                     <div class="gall__hd">
                        <div class="gall__filters">
                        <p class="gall__filter is-active bg-active-main">Всі</p>
                        <p class="gall__filter bg-active-eng">Deutsch</p>
                        <p class="gall__filter bg-active-deu">English</p>
                     </div>
                     <div class="input-group gall__search">
                        <div class="input-group-append">
                          <span class="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={search} onChange={(e)=>this.handleChange(e)}/>
                      </div>
                     </div>
                     <div class="gall__bd">
                        {humans}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {expandedPage}
      </div>
      );
   }
}


ReactDOM.render(
    <App/>,
  document.getElementById('root')
);