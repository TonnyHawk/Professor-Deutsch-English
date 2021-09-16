import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { getFirestore, addDoc, collection} from "firebase/firestore";
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

async function submit(){
  // collecting the data
  let data = new FormData(document.querySelector('#form'))

  let name, photo, video, about, certificates, langType, langLevel, professor;
  name = data.get('name')
  photo = data.get('photo')
  video = data.get('video')
  about = data.get('about')
  certificates = [...document.querySelectorAll('.certificate-elem')]
  langType = data.get('lang-type')
  langLevel = data.get('lang-level')
  professor = data.get('professor')

  let student = {
    name,
    about,
    professor,
    level: {
      [langType]: langLevel
    }
  }

  console.log(photo);

  // sending data
    // creating a profile
    // const profileRef = await addDoc(collection(db, "students"), student);
    // console.log("Document written with ID: ", profileRef.id);
    // student.id = profileRef.id

    // create a folder for this profile
    // const studentFolderRef = ref(storage, 'students/'+student.id);
    const studentFolderRef = ref(storage, 'students/olya-w');
    // uploading an avatar
    const photoRef = ref(studentFolderRef, 'avatar.jpg');

    uploadBytes(photoRef, photo).then((snapshot) => {
      console.log('Uploaded an avatar!');
      getDownloadURL(photoRef).then((downloadURL) => {
        console.log('File available at', downloadURL);
        photo = downloadURL;
      });
    });

    // uploading certificates
    prepareCertificates().then(res=>{
      console.log(res);
      student.certificates = res;
    })


  //   // const sertificatesFolderRef = ref(storage, 'students/'+student.id+'/certificates');
}

async function prepareCertificates(){
  console.log('preparing certificates');
  let certificates = [...document.querySelectorAll('.certificate-elem')];
  let editCerts = [];
    let promises = certificates.map(async elem => {
      let name = elem.querySelector("[name='certificate-name']").value;
      let photo = elem.querySelector("[type='file']").files[0];
      // let photoRef = ref(studentFolderRef, 'certificates/'+photo.name)
      let photoRef = ref(ref(storage, 'students/olya-w'), 'certificates/' + photo.name)
        await uploadBytes(photoRef, photo).then((snapshot) => {
          console.log('Uploaded a certificate!');
          getDownloadURL(photoRef).then((downloadURL) => {
            editCerts.push({name, file: downloadURL})
          });
        });
    })
    await Promise.all(promises)
    return editCerts
}

function showData(){
  prepareCertificates().then(res=>{
    console.log(res);
  })
}

document.querySelector('#submit').addEventListener('click', submit);
document.querySelector('#get').addEventListener('click', showData);

