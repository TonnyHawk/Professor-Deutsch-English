import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { getFirestore, addDoc, collection, updateDoc, doc } from "firebase/firestore";
// import {doc, setDoc} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuX8AU5VZ3oFlHaa9YHLHpCeBoDEOQAOY",
  authDomain: "profde-fbd15.firebaseapp.com",
  projectId: "profde-fbd15",
  storageBucket: "profde-fbd15.appspot.com",
  messagingSenderId: "795515383884",
  appId: "1:795515383884:web:571c2f96df7185db53c4e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(app); 

function validate(){
  let state = true

  let importantFields = document.querySelectorAll('*[required]')
  importantFields.forEach(elem=>{
    if(elem.value === ''){
      state = false
    }
  })

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.classList.add('was-validated')
    })

  return state
}

function clearForms(){
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.was-validated')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.classList.remove('was-validated')
      })
}

async function submit(){

  if(validate()){ // validation passed
    alert('додаємо вчителя...')
  
    // collecting the data
    let data = new FormData(document.querySelector('#form'))

    let name = data.get('name') || '',
    photo = data.get('photo') || '',
    video = data.get('video'),
    about = data.get('about'),
    certificates = [...document.querySelectorAll('.certificate-elem')],
    highlights = [...document.querySelectorAll('.highlight-elem')];


    let lang = [...document.querySelectorAll('.language-elem')]
    let editedLang = lang.map(elem=>{
      let name = elem.querySelector('[name="lang-type"]').value || ''
      let lvl = elem.querySelector('[name="lang-level"]').value || ''
      return {name, lvl}
    })

    let professor = [...document.querySelectorAll('.professor-elem')]
    professor = professor.map(elem=>{
      let name = elem.querySelector('[name="professor"]').value
      return name
    })

   let editedHighlights = highlights.map(elem=>{
      let num = elem.querySelector('[name="number"]').value || '';
      let descr = elem.querySelector('[name="descr"]').value || '';
      if(num !== '' || descr !== ''){
         return {num, descr}
      }
   })


  
    let student = {
      name,
      about,
      professor,
      language: editedLang,
      highlights: editedHighlights
    }

    let photos = {
      avatar: '',
      certificates: [],
      video: ''
    }

    // sending data
    // creating a profile
    let coll = collection(db, "teachers")
    let profileRef = await addDoc(coll, student);
    console.log("Created a profile with ID: ", profileRef.id);
    student.id = profileRef.id

    // create a folder for this profile
    const studentFolderRef = ref(storage, 'teachers/'+student.id);

    // uploading an avatar
    console.log('uploading an avatar');
    const avatarRef = ref(studentFolderRef, 'avatar.jpg');

    await uploadBytes(avatarRef, photo).then(async (snapshot) => {
      await getDownloadURL(avatarRef).then((downloadURL) => {
        photos.avatar = downloadURL;
      });
    });

    if(video.name !== ''){ // if there is a video
      const videoRef = ref(studentFolderRef, video.name);
      await uploadBytes(videoRef, video).then(async (snapshot) => {
        await getDownloadURL(videoRef).then((downloadURL) => {
          photos.video = downloadURL;
        });
      });
    }

    // uploading certificates
    console.log('uploading certificates');
    await prepareCertificates(studentFolderRef, certificates).then(res=>{
      photos.certificates = res
      console.log(photos.certificates);
    })

    // update profile avatar and certificates information
    console.log('update profile avatar and certificates information');
    profileRef = doc(coll, student.id);
    await updateDoc(profileRef, photos).then(()=>{ // when all is done
      alert('Вчителя додано');
      
      // clear all fields
      let elemsToBeCleared = ['input', 'textarea'];
      elemsToBeCleared.forEach(elem=>{
        document.querySelectorAll(elem).forEach(elem=>{
          elem.value = '';
        })
      })
      // delete all clones
      document.querySelectorAll('.clone').forEach(elem=>{
        elem.parentNode.removeChild(elem);
      })
    });

    clearForms()
  } else {
    alert('Превірте чи всі необхідні поля форми - заповнені')
  }
}

async function prepareCertificates(studentFolderRef, certificates){
  certificates = [...document.querySelectorAll('.certificate-elem')];
  let editCerts = [];
    let promises = certificates.map(async elem => {
      let name = elem.querySelector("[name='certificate-name']").value;
      let photo = elem.querySelector("[type='file']").files[0];
      if(name !== ''){
        let photoRef = ref(studentFolderRef, 'certificates/'+photo.name)
        await uploadBytes(photoRef, photo).then(async (snapshot) => {
          // console.log('Uploaded a certificate!');
          await getDownloadURL(photoRef).then((downloadURL) => {
            editCerts.push({name, file: downloadURL})
          });
        });
      }
    })
    await Promise.all(promises)
    console.log(editCerts);
    return editCerts
}

function showData(){

}

document.querySelector('#submit').addEventListener('click', submit);
document.querySelector('#get').addEventListener('click', showData);

