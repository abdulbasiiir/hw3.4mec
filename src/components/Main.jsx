
// import React, { useState } from 'react';
// import data from '../data/db.json';
// import Card from './Card';
// import Sidebar from './Sidebar';
// import './Main.css'; 

// function Main() {
//     const [users, setUsers] = useState(data);
//     const [sidebarVisible, setSidebarVisible] = useState(false);
//     const [searchvalue, setSearchValue] = useState('')
    
//     const [name, setName] = useState('')
//     const [title, setTitle] = useState('')
//     const [description, setDescription] = useState('')
//     const [avatar, setAvatar] = useState('')

//     function AddNewObg() {
//         setUsers([...users, {
//             "title": "bbbbbbbbbbb",
//             "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/954.jpg",
//             "despretion": "bbbbbbbbbbbbbb",
//             "name": "bbbbbbbbbbbbb",
//             "rate": 58,
//             "id": "1"
//         }]);
//     }

    
//     const sortedUsers = [...users].sort((a, b) => b.rate - a.rate);


//     function toggleSidebar() {
//         setSidebarVisible(!sidebarVisible);
//     }
//     console.log(searchvalue);
//     const handleSearch = (event) =>{
//         setSearchValue(event.target.value);
//     };
//     const filteredData = users.filter(item => 
//         item.title.toLowerCase().includes(searchvalue.toLowerCase())
//     );

//     function AddUser() {
//         setUsers([
//             {
//                 description: description,
//                 title: title,
//                 avatar: avatar,
//                 name: name,
//             }, ...users])
//     }

//     return (
        
//         <>
//              <div>
//                 <input onChange={(e) => setName(e.target.value)} type="text" placeholder='name' />
//                 <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='title' />
//                 <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder='despretion' />
//                 <input onChange={(e) => setAvatar(e.target.value)} type="text" placeholder='avatar' />
//                 <button onClick={AddUser}>add</button>

//             </div>
//             <br />
//             <hr />
//             <input  onChange={handleSearch}/>
//             <br />
//             <br />
//             <button>SORT</button>
            
//             <div className='main-container'>
//                 <button className='toggle-button' onClick={toggleSidebar}>
//                     {sidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
//                 </button>
//                 {sidebarVisible && <Sidebar addNewObject={AddNewObg} />}
//                 <section className='main-content'>
//                     {filteredData.map((item, index) => 
//                         <Card 
//                             key={index}
//                             title={item.title}
//                             avatar={item.avatar}
//                             despretion={item.despretion}
//                             name={item.name}
//                             rate={item.rate}
//                         />
//                     )}
//                 </section>
//             </div>
//         </>
//     );
// }

// export default Main;





                        
import React, { useState } from 'react';
import data from '../data/db.json';
import Card from './Card';
import Sidebar from './Sidebar';
import './Main.css';

function Main() {
    const [users, setUsers] = useState(data);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [avatar, setAvatar] = useState('');
    const [isSortedDescending, setIsSortedDescending] = useState(true);

    function AddNewObg() {
        setUsers([...users, {
            "title": "bbbbbbbbbbb",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/954.jpg",
            "despretion": "bbbbbbbbbbbbbb",
            "name": "bbbbbbbbbbbbb",
            "rate": 58,
            "id": "1"
        }]);
    }

    function toggleSortOrder() {
        const sortedUsers = [...users].sort((a, b) => 
            isSortedDescending ? a.rate - b.rate : b.rate - a.rate
        );
        setUsers(sortedUsers);
        setIsSortedDescending(!isSortedDescending);
    }

    function toggleSidebar() {
        setSidebarVisible(!sidebarVisible);
    }

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    };

    const filteredData = users.filter(item => 
        item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    function AddUser() {
        setUsers([
            {
                description: description,
                title: title,
                avatar: avatar,
                name: name,
            }, 
            ...users
        ]);
    }

    return (
        <>
            <div>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder='name' />
                <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='title' />
                <input onChange={(e) => setDescription(e.target.value)} type="text" placeholder='description' />
                <input onChange={(e) => setAvatar(e.target.value)} type="text" placeholder='avatar' />
                <button onClick={AddUser}>Add</button>
            </div>
            <br />
            <hr />
            <input onChange={handleSearch} />
            <br />
            <br />
            <button onClick={toggleSortOrder}>SORT</button>
            <div className='main-container'>
                <button className='toggle-button' onClick={toggleSidebar}>
                    {sidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
                </button>
                {sidebarVisible && <Sidebar addNewObject={AddNewObg} />}
                <section className='main-content'>
                    {filteredData.map((item, index) => 
                        <Card 
                            key={index}
                            title={item.title}
                            avatar={item.avatar}
                            despretion={item.despretion}
                            name={item.name}
                            rate={item.rate}
                        />
                    )}
                </section>
            </div>
        </>
    );
}

export default Main;
