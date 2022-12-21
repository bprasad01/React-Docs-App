import HomeIcon from '@mui/icons-material/Home';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { NumbersOutlined } from '@mui/icons-material';

export const sideBarData = [
  {
    title: 'HOC',
    path: '/hoc',
    icon: <HomeIcon />,
  },
  {
    title: 'PureComponent',
    path: '/pure-component',
    icon: <HomeIcon />,
  },
  {
    title: 'Controlled & Uncontrolled Component',
    path: '/controlled&uncontrolled',
    icon: <HomeIcon />
  },
  {
    title: 'PropTypes',
    path: '/proptypes',
    icon: <HomeIcon />
  },
  {
    title: 'Pagination',
    path: '/pagination',
    icon: <NumbersOutlined/>
  },
  {
    title: 'Hooks',
    path: '',
    icon: <BeenhereIcon />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,

    subNav: [
      {
        title: 'useReducer',
        path: '/hooks/useReducer',
        icon: <AddCircleOutlineIcon />,
        cName: 'sub-nav'
      },
      {
        title: 'useImperetiveHandle',
        path: '/hooks/useImperetiveHandle',
        icon: <HomeIcon />,
        cName: 'sub-nav'
      },
      {
        title: 'useLayoutEffect',
        path: '/hooks/useLayoutEffect',
        icon: <HomeIcon />
      }
    ]
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <HomeIcon />,

    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <HomeIcon />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <HomeIcon />
      }
    ]
  },
 
  // {
  //   title : 'Home',
  //   path : '/',
  //   icon : HomeIcon},
  // {
  //   title : 'Project',
  //   path : '/project',
  //   icon : <BeenhereIcon />,
  //   iconClosed: <ArrowDropDownIcon />,
  //   iconOpened: <ArrowDropUpIcon />,
  //   subNav : [
  //     {
  //       title : 'Add',
  //       path : '/project/add',
  //       icon : <AddCircleOutlineIcon />
  //     }
  //   ]
  // }
]