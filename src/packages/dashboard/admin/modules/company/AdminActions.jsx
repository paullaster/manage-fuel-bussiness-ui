import { MdOutlineMoreHoriz, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';


const handleCreateNewUser = (state) => {
   state.close();
   location.pathname = '/dashboard/admin/:id/manage/users/create';
}

const handleCreateNewCompany = (state) => {
   state.close();
   location.pathname = '/dashboard/admin/:id/manage/company/new';
}

export default
   [
      {
         key: uuidv4(),
         caption: 'New',
         iconList: [{ key: uuidv4(), icon: <MdOutlineMoreHoriz /> }, { key: uuidv4(), icon: <MdOutlineKeyboardArrowDown /> }],
         hasList: true,
         list: [
            { key: uuidv4(), cap: 'User', action: (state) =>  handleCreateNewUser(state)},
            { key: uuidv4(), cap: 'Company', action: (state) => handleCreateNewCompany(state)},
         ]
      },
   ];