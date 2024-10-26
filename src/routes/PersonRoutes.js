import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import StudentsPage from "../pages/StudentsPage";
import CoursesPage from "../pages/CoursesPage";
import CreateStudent from "../pages/CreateStudent";

const PersonRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/students' element={<StudentsPage/>}/>
            <Route path='/courses' element={<CoursesPage/>}/>
            <Route path='/create-student' element={<CreateStudent   />}/>
        </Routes>
    )
}

export default PersonRoutes;