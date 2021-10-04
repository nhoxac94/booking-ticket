import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "containers/shared/Auth/PageNotFound/PageNotFound";
import { adminRoutes, clientRoutes, loginRoutes } from "routes";
import AdminLayout from "layouts/AdminLayout";
import LoginLayout from "layouts/LoginLayout";
import ClientLayout from "layouts/ClientLayout";
import Loader from "components/Loader/Loader";

function App() {
  const renderLayout = (routes, Layout) => {
    return routes.map((routes, idx) => {
      const { path, component, exact, isPrivate } = routes;
      return (
        <Layout
          key={component}
          path={path}
          exact={exact}
          component={component}
          isPrivate={isPrivate}
        />
      );
    });
  };

  return (
    <div className="App">
      <Router>
        <Suspense fallback={Loader}>
          <Switch>
            {renderLayout(loginRoutes, LoginLayout)}
            {renderLayout(adminRoutes, AdminLayout)}
            {renderLayout(clientRoutes, ClientLayout)}
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
