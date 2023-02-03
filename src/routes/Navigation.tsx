import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from '../assets/react.svg';
import ShoppingPage from '../compound-pattern/pages/ShoppingPage';

export const Navigation = () => {
    return ( 
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li> 
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/users'>
                                Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>
                                About
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={ <ShoppingPage /> } />
                    <Route path='/users' element={ <h1>Users</h1> } />
                    <Route path='/about' element={ <h1>About</h1> } />
                    
                    <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
