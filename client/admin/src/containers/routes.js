import HomeContainer from './HomeContainer';
import NotFoundContainer from './NotFoundContainer'
import CategoryContainer from './CategoryContainer';
import ProjectContainer from './ProjectContainer';
const route = [
    {
        path: '/',
        exact: true,
        main: () => <HomeContainer />
    },
    {
        path: '/categorys',
        exact: false,
        main: () => <CategoryContainer />
    },

    {
        path: '/projects',
        exact: false,
        main: () => <ProjectContainer />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundContainer />
    }
]
export default route;