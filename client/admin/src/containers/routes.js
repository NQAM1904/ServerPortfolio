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
        path: '/category',
        exact: false,
        main: () => <CategoryContainer />
    },
    // {
    //     path: '/category/:id',
    //     exact: false,
    //     main: ({ match }) => <CategoryContainer match={match} />
    // },
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