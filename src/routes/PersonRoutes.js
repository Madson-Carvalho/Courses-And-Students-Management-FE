import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import StudentsPage from "../pages/StudentsPage";
import CoursesPage from "../pages/CoursesPage";
import CreateStudent from "../pages/CreateStudent";
import CreateCourses from "../pages/CreateCourses";
import TeachersPage from "../pages/TeachersPage";
import CreateTeachers from "../pages/CreateTeachers";

const PersonRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/students' element={<StudentsPage/>}/>
            <Route path='/courses' element={<CoursesPage/>}/>
            <Route path='/teachers' element={<TeachersPage/>}/>
            <Route path='/create-student' element={<CreateStudent/>}/>
            <Route path='/create-courses' element={<CreateCourses/>}/>
            <Route path='/create-teachers' element={<CreateTeachers/>}/>
        </Routes>
    )
}

export default PersonRoutes;