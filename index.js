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
     
      const newContact = await contactsService.getContactById({name,email,phone})
      console.log('newContact: ', newContact);
     
      break;

    case 'delete':
        const deletedContact = await contactsService.getContactById(id)
        console.log('deletedContact : ', deletedContact );
      
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

// invokeAction(argv);
 invokeAction({action:"list"});

