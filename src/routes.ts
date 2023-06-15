import { ERoutes } from './redux/types/enums'
import { InvitePage } from './pages/invite'
import { PageNotFound } from './pages/notFound'
import { MoodboardPage } from './pages/moodboard'
import {redirect} from "react-router-dom";

export const routes = [
  {
    path: ERoutes.invite,
    Component: InvitePage,
    exact: true
  },
  {
    path: ERoutes.moodBoard,
    Component: MoodboardPage,
    exact: true
  },
  {
    path: '*',
    Component: MoodboardPage,
    loader: async () => {
      return redirect(ERoutes.moodBoard);
    }
  }
]
