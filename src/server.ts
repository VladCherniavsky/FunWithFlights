import App from '@/app';

import IndexRoute from '@routes/index.route';
import RoutesRoute from '@routes/routes.route';

const app = new App([IndexRoute, RoutesRoute]);

app.listen();
