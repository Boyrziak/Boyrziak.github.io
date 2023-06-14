import { ERoutes } from './redux/types/enums'
import { InvitePage } from './pages/invite'
import { PageNotFound } from './pages/notFound'
import { MoodboardPage } from './pages/moodboard'

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
    Component: PageNotFound
  }
]
