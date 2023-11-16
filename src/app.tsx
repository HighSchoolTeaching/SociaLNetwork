import { Routes, Route} from 'react-router-dom';
import './globals.css';
import { Home } from './_root/pages';
import SignupForm from './_auth/forms/SignUpForm'
import SignInForm from './_auth/forms/SignInForm'
import RootLayout from './_root/RootLayout';


const app = () => {
  return (
  <main className='flex h-screen'>
   <Routes>
    <Route path="/sign-in" element={<SignInForm />}/>
    <Route path="/sign-up" element={<SignupForm />}/>


    <Route element={<RootLayout/>}>
    <Route index element={<Home/>} />
    </Route>
   </Routes>
 </main>
  
  )
}

export default app