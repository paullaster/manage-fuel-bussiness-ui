import { MdOutlineMoreHoriz, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
import { redirect } from 'react-router-dom';


const handleCreateNewUser = (state) => {
   state.close();
   redirect('/dashboard/admin/:id/manage/users/create');
}

export default
   [
      {
         key: uuidv4(),
         caption: 'New',
         iconList: [{ key: uuidv4(), icon: <MdOutlineMoreHoriz /> }, { key: uuidv4(), icon: <MdOutlineKeyboardArrowDown /> }],
         hasList: true,
         list: [
            { key: uuidv4(), cap: 'User', action: (state) => { console.log(state) } },
            { key: uuidv4(), cap: 'Company', action: () => { console.log("new company") } },
         ]
      },
   ];