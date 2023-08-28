const contactsService= require("./contacts")


const  invokeAction=async ({ action, id, name, email, phone })=> {
  switch (action) {
    case 'list':
      const list = await contactsService.getContactsList()
      console.log('list : ', list );
      break;

    case 'get':
        const contact = await contactsService.getContactById(id)
        console.log('contact: ', contact);
      
      break;

    case 'add':
    const newContact=await contactsService.addContact({name,email,phone})
    console.log('newContact: ', newContact);
     
      break;

    case 'delete':
        const deletedContact = await contactsService.deleteContact(id)
        console.log('deletedContact : ', deletedContact );
      
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

// invokeAction(argv);
//  invokeAction({action:"add", name:"Iryna2",email:"Artimyk@ukr,net", phone:"380666796604"});
 invokeAction({action:"delete", id:"C9I9OtvvF-OaFZm9_uRQ7"});

