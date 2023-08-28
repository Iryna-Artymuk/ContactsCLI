const fs= require("fs/promises");
const{nanoid}=require("nanoid");
const path = require("path");

  const contactsPath = path.join(__dirname, "db.json");;


// TODO: задокументувати кожну функцію
const  getContactsList=async ()=> {
    const contactsData= await fs.readFile(contactsPath)
    // кодування utf 8 можна не вказувти  json.parse вміє читати buffer
       return    JSON.parse(contactsData)
  }
  
  const  getContactById=async (contactId)=> {
    // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  }
  
 const  deleteContact=async (contactId) =>{
    // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  }
  
const addContact=async (name, email, phone) =>{
    // ...твій код. Повертає об'єкт доданого контакту. 
  }

  module.exports={ 
    addContact,
    deleteContact,
    getContactById,
    getContactsList
}