import React, { Component } from 'react';


class Expanded extends Component {
   constructor(props){
      super(props);
      let {human} = this.props
      if(human === ''){
         human = {
            name: '',
            photo: '',
            owner: '',
            professor: ['Deutsch'],
            _id: null
         }
      }
      this.state = {
         name: human.name,
         photo: human.photo,
         owner: human.owner,
         professor: human.professor,
         id: human._id,
         required: ['name', 'owner']
      }
      this.form = React.createRef()
   }
   
   handleChange(e){
      let key = e.target.name
      let value = e.target.value
      if(e.target.getAttribute('data-index')){ // meens that we process select
         let index = e.target.getAttribute('data-index')
         let name = e.target.name
         if(e.target.getAttribute('data-name')){ // if we need to change select pair
               key = e.target.getAttribute('data-name')
               this.setState(state=>{
                  state[key][index][name] = value
                  return state
               }, ()=>{
                  // console.log(this.state[key]);
               })
         } else{ // we have a simple select
            this.setState(state=>{
               state[name][index] = value;
               return state
            })
         }
      } else{
         this.setState({
            [key]: value
         })
      }
   }

   deleteField(e){
      let key = e.target.getAttribute('data-name');
      let index = e.target.getAttribute('data-index')
      this.setState(state=>{
         if(state[key].length > 1){
            state[key] = state[key].filter(elem=>{
               if(elem !== state[key][index]){
                  return elem
               }
            })
         }
         return state
      })
   }

   validate(){
      let response = {
         access: true,
         targets: []
      };
         this.state.required.forEach(elem=>{
            if(this.state[elem] === ''){
               console.log(elem);
               console.log(this.state[elem]);
               response.access = false
               response.targets.push(elem)
            }
         })
    
      this.form.current.classList.add('was-validated')
    
      return response
   }

   showInfo(){
      console.log(this.state)
   }

   async delStudent(){
      let id = this.state.id
      let photo = this.state.photo
      let reqData = new FormData()
      reqData.set('id', id)
      reqData.set('photo', photo)
      let response = await fetch('http://127.0.0.1:3000/certificates/del', {
         method: 'POST',
         headers: {
            encType: 'multipart/form-data'
          },
         body: reqData
       });
       
       let result = await response.text();
       console.log(result);

       this.props.funcs.deselectHuman()
   }
   async sendData(){
      let validation = this.validate()
      if(!validation.access){
         alert('Здається ви заповнили форму не до кінця. будь ласка заповніть поля підсвічені червоним')
      } else{
         // data preprocessing
         let owner = this.state.owner.split(' ').map(elem=>{
            console.log(elem); // making each first letter a capital
            let newStr = elem;
            let letterIndex = 0
            if(elem[letterIndex] !== ' '){
               while(!elem[letterIndex].toUpperCase()){
                  letterIndex++
               }
               newStr = elem[letterIndex].toUpperCase() + elem.slice(letterIndex+1, elem.length);
            } else{
               newStr = '';
            }
            return newStr
         }).join(' ');
         let human = {
            name: this.state.name,
            photo: this.state.photo,
            professor: this.state.professor,
            owner
         }
         if(this.state.id){
            human.id = this.state.id
         }

         let formInfo = new FormData(this.form.current) // to read info from our form
         let reqData = new FormData(); // this will be send to the server
         if(formInfo.get('photo').size > 0){ // if we added a new photo to the form
            let photo = formInfo.get('photo')
            reqData.set('photo', photo, 'avatar.jpg')
         }
         // alert('data is ready to deploy')

         reqData.set('info', JSON.stringify(human))

         let reqUrl;
         if(this.props.info.mode === 'edit') reqUrl = 'http://127.0.0.1:3000/certificates'
         else if(this.props.info.mode === 'add') reqUrl = 'http://127.0.0.1:3000/certificates/add'
         let response = await fetch(reqUrl, {
            method: 'POST',
            headers: {
               encType: 'multipart/form-data'
             },
            body: reqData
          });
          
          let result = await response.text();
          console.log(result);

          this.props.funcs.deselectHuman()
      }
   }
   render() {
      let {human} = this.props
      let {name, photo, video, about, languages, professor, certificates, role, owner} = this.state
      let index = 0;
      // creating professor element
      let professorElem = professor.map(elem=>{
         let content = (
         <div class="row professor-elem" data-name='professor'>
            <div class="col-11">
               <select class="form-select" aria-label="select example" id="professor" 
               name='professor'
               data-index={index}
               value={elem}
               onChange={(e)=>this.handleChange(e)}>
                  <option value='Deutsch'>Deutsch</option>
                  <option value="English">English</option>
               </select>
            </div>
            <div className="col-1">
               <div className="btn btn-danger"
               data-name='professor'
               data-index={index} onClick={(e)=>this.deleteField(e)}>x</div>
            </div>
         </div>
         )
         index++;
         return content
      })

      let style = {
         zIndex: 100, 
         position: 'fixed', 
         top: 0, left: 0, 
         width: '100%', height: '100%', 
         background: 'white', fontSize: '16px',
         overflow: 'auto'
      }
      return (
      <div style={style}>
      <div class="container" ref={c=>this.rootElem = c}>
         <div class="row">
            <div class="col d-flex justify-content-center">
               <h1 class='my-5'>{this.props.info.mode === 'add' ? 'Додати' : 'Редагувати'}</h1>
            </div>
         </div>
         <div class="row">
            <div class="col">
               <form action="" id='form' class="needs-validation" ref={this.form} noValidate>
                  <div class="mb-4">
                     <label htmlFor="name" class="form-label">Назва</label>
                     <input type="text" class="form-control" id="name" name='name' placeholder="" required value={name} onChange={(e)=>this.handleChange(e)}/>
                  </div>
                  <div class="mb-4">
                     <label htmlFor="name" class="form-label">Власник</label>
                     <input type="text" class="form-control" id="owner" name='owner' placeholder="" required value={owner} onChange={(e)=>this.handleChange(e)}/>
                  </div>
                  <div className="row">
                     <div className="col-12 col-md-6">
                        <img src={photo} height={100} alt="" />
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-12 col-md-6">
                        <div class="mb-4">
                           <label htmlFor="photo" class="form-label">Фото</label>
                           <input class="form-control" type="file" id="photo" name='photo'/>
                        </div>
                     </div>
                  </div>
                  <div class="mb-5">
                     <label class="form-label mb-2">Professor</label>
                     {professorElem}
                     <div class="btn btn-success mt-3" onClick={()=>this.addProfessor()}>Додати Школу</div>
                  </div>
               </form>
            </div>
         </div>
         <div class="row">
            <div class="col d-flex justify-content-end">
               <div class="btn btn-danger btn-lg px-5 py-3 my-5 mx-3" id="submit" onClick={()=>this.delStudent()}>Видалити</div>
               <div class="btn btn-primary btn-lg px-5 py-3 my-5 mx-3" id="submit" onClick={()=>this.sendData()}>Додати</div>
               <div class="btn btn-success my-5 d-none" id="get" onClick={()=>this.showInfo()}>Get Info</div>
            </div>
         </div>
      </div>
   </div>
      );
   }
}

export default Expanded;