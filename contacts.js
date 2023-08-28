const fs= require("fs/promises");
const{nanoid}=require("nanoid");
const path = require("path");

  const contactsPath = path.join(__dirname, "db.json");;
  console.log('contactsPath: ', contactsPath);


// TODO: задокументувати кожну функцію
const  getContactsList=async ()=> {
    const contactsData= await fs.readFile(contactsPath)
    // кодування utf 8 можна не вказувти  json.parse вміє читати buffer
       return    JSON.parse(contactsData)
  }
  
  const  getContactById=async (contactId)=> {
    const allContacts= await getContactsList()
    const contact= allContacts.find(contact=>contact.id===contactId)
 
       return  contact|| null
  }
  
 const  deleteContact=async (contactId) =>{
    const allContacts =  await getContactsList();
    const index = allContacts.findIndex(contact => contact.id === contactId);
    console.log('index: ', index);
    
    if(index === -1){
        return null;
    }
    const [result] = allContacts.splice(index, 1);
    console.log('result: ', result);

    await fs.writeFile(contactsPath,JSON.stringify(allContacts, null, 2))
    return result;
  }
  
const addContact=async (data) =>{
    const allContacts =  await getContactsList();
    const newContact={
       
        id:nanoid(),
        ...data
    }
    allContacts.push(newContact)
    // після додавання книги перезаписуємо json file 
await fs.writeFile(contactsPath,JSON.stringify(allContacts, null, 2))

return newContact
  }

  module.exports={ 
    addContact,
    deleteContact,
    getContactById,
    getContactsList
}